-- One node contains shared facts, evidence and both languages. Draft page
-- heads are views over that aggregate, not independent scientific databases.
CREATE TABLE evo_v2.node_draft_head (
  workspace_id uuid NOT NULL REFERENCES evo_v2.authoring_workspace(id),
  node_id uuid NOT NULL,
  node_revision_id uuid NOT NULL,
  generation bigint NOT NULL CHECK(generation>0),
  updated_by text NOT NULL, updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY(workspace_id,node_id),
  FOREIGN KEY(node_id,node_revision_id) REFERENCES evo_v2.node_revision(node_id,id)
);
REVOKE ALL ON evo_v2.node_draft_head FROM PUBLIC;
CREATE OR REPLACE FUNCTION evo_v2.save_page_draft(workspace uuid,page uuid,expected_generation bigint,expected_version uuid,new_version uuid,request uuid,actor text)
RETURNS jsonb LANGUAGE plpgsql AS $$
DECLARE digest text; prior evo_v2.page_write_receipt; head evo_v2.page_draft_head; result jsonb; content record; node_head evo_v2.node_draft_head; base_revision uuid;
BEGIN
  IF actor IS NULL OR actor='' THEN RAISE EXCEPTION 'Actor required'; END IF;
  digest:=encode(sha256(convert_to(jsonb_build_array(workspace,page,expected_generation,expected_version,new_version,actor)::text,'UTF8')),'hex');
  PERFORM pg_advisory_xact_lock(hashtextextended('page-request/'||request,0));
  SELECT * INTO prior FROM evo_v2.page_write_receipt WHERE request_id=request;
  IF FOUND THEN IF prior.operation<>'draft' OR prior.input_sha256<>digest THEN RAISE EXCEPTION 'Idempotency request reused with different input'; END IF; RETURN prior.result; END IF;
  PERFORM pg_advisory_xact_lock(hashtextextended('draft/'||workspace||'/'||page,0));
  IF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_version v JOIN evo_v2.dependency_seal s ON s.version_id=v.id WHERE v.id=new_version AND v.entity_id=page AND v.kind='page') THEN RAISE EXCEPTION 'Draft requires a sealed page dependency snapshot'; END IF;
  SELECT * INTO head FROM evo_v2.page_draft_head WHERE workspace_id=workspace AND page_entity_id=page FOR UPDATE;
  IF (FOUND AND (head.generation<>expected_generation OR head.page_version_id IS DISTINCT FROM expected_version)) OR (NOT FOUND AND (expected_generation<>0 OR expected_version IS NOT NULL)) THEN RAISE EXCEPTION 'Page draft base changed' USING ERRCODE='40001'; END IF;
  -- Languages and display surfaces share one scientific node aggregate.
  -- A page-level CAS alone must not permit two locales to fork its facts.
  IF EXISTS(
    SELECT r.node_id FROM evo_v2.dependency_closure(new_version,false) c
    JOIN evo_v2.dependency_version v ON v.id=c.version_id JOIN evo_v2.node_revision r ON r.id=v.node_revision_id
    GROUP BY r.node_id HAVING count(DISTINCT r.id)>1
  ) THEN RAISE EXCEPTION 'Draft contains conflicting node revisions'; END IF;
  FOR content IN
    SELECT DISTINCT r.node_id,r.id,r.parent_revision_id FROM evo_v2.dependency_closure(new_version,false) c
    JOIN evo_v2.dependency_version v ON v.id=c.version_id JOIN evo_v2.node_revision r ON r.id=v.node_revision_id ORDER BY r.node_id
  LOOP
    PERFORM pg_advisory_xact_lock(hashtextextended('node-draft/'||workspace||'/'||content.node_id,0));
    base_revision:=content.parent_revision_id;
    IF expected_version IS NOT NULL THEN
      SELECT r.id INTO base_revision FROM evo_v2.dependency_closure(expected_version,false) c
        JOIN evo_v2.dependency_version v ON v.id=c.version_id JOIN evo_v2.node_revision r ON r.id=v.node_revision_id WHERE r.node_id=content.node_id;
    END IF;
    SELECT * INTO node_head FROM evo_v2.node_draft_head WHERE workspace_id=workspace AND node_id=content.node_id FOR UPDATE;
    IF FOUND AND node_head.node_revision_id<>content.id AND node_head.node_revision_id IS DISTINCT FROM base_revision THEN
      RAISE EXCEPTION 'Shared node draft base changed across page or locale' USING ERRCODE='40001';
    END IF;
    IF NOT FOUND OR node_head.node_revision_id<>content.id THEN
      INSERT INTO evo_v2.node_draft_head(workspace_id,node_id,node_revision_id,generation,updated_by)
        VALUES(workspace,content.node_id,content.id,COALESCE(node_head.generation,0)+1,actor)
        ON CONFLICT(workspace_id,node_id) DO UPDATE SET node_revision_id=EXCLUDED.node_revision_id,generation=EXCLUDED.generation,updated_by=EXCLUDED.updated_by,updated_at=now();
    END IF;
  END LOOP;
  INSERT INTO evo_v2.page_draft_head(workspace_id,page_entity_id,page_version_id,generation,updated_by)
    VALUES(workspace,page,new_version,expected_generation+1,actor)
    ON CONFLICT(workspace_id,page_entity_id) DO UPDATE SET page_version_id=EXCLUDED.page_version_id,generation=EXCLUDED.generation,updated_by=EXCLUDED.updated_by,updated_at=now();
  result:=jsonb_build_object('workspaceId',workspace,'pageEntityId',page,'pageVersionId',new_version,'generation',expected_generation+1);
  INSERT INTO evo_v2.page_write_receipt(request_id,operation,input_sha256,result) VALUES(request,'draft',digest,result);
  RETURN result;
END $$;

CREATE OR REPLACE FUNCTION evo_v2.seal_page_release(target uuid,candidate uuid) RETURNS evo_v2.page_release_seal LANGUAGE plpgsql AS $$
DECLARE r evo_v2.release; actual jsonb; digest text; result evo_v2.page_release_seal;
BEGIN
  SELECT * INTO STRICT r FROM evo_v2.release WHERE id=target FOR UPDATE;
  SELECT * INTO result FROM evo_v2.page_release_seal WHERE release_id=target;
  IF FOUND THEN IF result.change_set_id<>candidate THEN RAISE EXCEPTION 'Different approval for sealed release'; END IF; RETURN result; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.release_page WHERE release_id=target) THEN RAISE EXCEPTION 'Publication has no pages'; END IF;
  IF EXISTS(SELECT 1 FROM evo_v2.release_page p LEFT JOIN evo_v2.dependency_seal s ON s.version_id=p.page_version_id WHERE p.release_id=target AND NOT COALESCE(s.ready,false)) THEN RAISE EXCEPTION 'Publication dependencies are incomplete'; END IF;
  IF EXISTS(
    SELECT v.entity_id FROM evo_v2.release_page p
    CROSS JOIN LATERAL evo_v2.dependency_closure(p.page_version_id,false) c
    JOIN evo_v2.dependency_version v ON v.id=c.version_id
    WHERE p.release_id=target AND v.kind<>'resource'
    GROUP BY v.entity_id HAVING count(DISTINCT v.id)>1
  ) THEN RAISE EXCEPTION 'Publication mixes incompatible versions of one dependency'; END IF;
  actual:=evo_v2.page_release_manifest(target); digest:=encode(sha256(convert_to(actual::text,'UTF8')),'hex');
  IF r.manifest IS DISTINCT FROM actual OR r.manifest_sha256<>digest THEN RAISE EXCEPTION 'Publication manifest differs from actual page closure'; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.change_set c JOIN evo_v2.publication_approval a ON a.change_set_id=c.id AND a.candidate_sha256=c.candidate_sha256 WHERE c.id=candidate AND c.candidate_sha256=digest AND c.changes=jsonb_build_object('publication',actual)) THEN RAISE EXCEPTION 'Exact publication approval missing'; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.validation_run WHERE change_set_id=candidate AND candidate_sha256=digest AND passed) THEN RAISE EXCEPTION 'Successful publication validation missing'; END IF;
  INSERT INTO evo_v2.page_release_seal(release_id,change_set_id,candidate_sha256) VALUES(target,candidate,digest) RETURNING * INTO result;
  RETURN result;
END $$;
