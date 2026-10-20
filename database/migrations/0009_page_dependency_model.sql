-- Additive page-centred publication model. Existing imported scientific bodies
-- remain authoritative snapshots; this migration does not publish or delete any.
ALTER TABLE evo_v2.node_revision ALTER COLUMN origin_commit DROP NOT NULL;
ALTER TABLE evo_v2.node_revision ALTER COLUMN source_files SET DEFAULT '{}';
ALTER TABLE evo_v2.node_revision ALTER COLUMN delivery_bindings SET DEFAULT '[]';
ALTER TABLE evo_v2.reference_revision ALTER COLUMN origin_commit DROP NOT NULL;
ALTER TABLE evo_v2.release ALTER COLUMN origin_commit DROP NOT NULL;

CREATE TABLE evo_v2.dependency_entity (
  id uuid PRIMARY KEY,
  kind text NOT NULL CHECK(kind IN ('page','node','reference','taxon','dataset','resource','renderer')),
  entity_key text NOT NULL CHECK(length(entity_key)>0),
  identity jsonb NOT NULL CHECK(jsonb_typeof(identity)='object'),
  UNIQUE(kind,entity_key), UNIQUE(id,kind)
);
CREATE TABLE evo_v2.dependency_version (
  id uuid PRIMARY KEY,
  entity_id uuid NOT NULL,
  kind text NOT NULL,
  descriptor jsonb NOT NULL CHECK(jsonb_typeof(descriptor)='object'),
  node_revision_id uuid REFERENCES evo_v2.node_revision(id),
  reference_version_id bigint REFERENCES evo_v2.reference_revision(version_id),
  source_release_id uuid REFERENCES evo_v2.source_release(id),
  taxon_usage_id text,
  artifact_sha256 text REFERENCES evo_v2.artifact(sha256),
  source_snapshot_sha256 text REFERENCES evo_v2.source_snapshot(sha256),
  created_by text NOT NULL CHECK(length(created_by)>0),
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY(entity_id,kind) REFERENCES evo_v2.dependency_entity(id,kind),
  FOREIGN KEY(source_release_id,taxon_usage_id) REFERENCES evo_v2.taxon_usage(release_id,usage_id),
  UNIQUE(entity_id,id), UNIQUE(id,kind),
  CHECK ((kind='node')=(node_revision_id IS NOT NULL)),
  CHECK ((kind='reference')=(reference_version_id IS NOT NULL)),
  CHECK ((kind='taxon')=(taxon_usage_id IS NOT NULL)),
  CHECK (kind IN ('taxon','dataset') OR source_release_id IS NULL),
  CHECK (kind<>'taxon' OR source_release_id IS NOT NULL),
  CHECK (kind='resource' OR (artifact_sha256 IS NULL AND source_snapshot_sha256 IS NULL)),
  CHECK (source_snapshot_sha256 IS NULL OR (artifact_sha256 IS NOT NULL AND source_snapshot_sha256=artifact_sha256)),
  CHECK (kind<>'page' OR (
    jsonb_typeof(descriptor->'route')='string' AND length(descriptor->>'route')>0
    AND descriptor->>'locale' IN ('en','zh') AND jsonb_typeof(descriptor->'pageType')='string') IS TRUE),
  CHECK (kind<>'resource' OR (
    descriptor->>'storage' IN ('blob','external','inline','unavailable')
    AND descriptor->>'retention' IN ('citation','selected-record','full-file','rebuildable')
    AND ((descriptor->>'storage'='blob')=(artifact_sha256 IS NOT NULL))
    AND (descriptor->>'storage'<>'external' OR descriptor->>'url' ~ '^https://[^[:space:]]+$')
    AND (descriptor->>'storage'<>'inline' OR descriptor ? 'value')) IS TRUE)
);
CREATE TABLE evo_v2.dependency_edge (
  from_version_id uuid NOT NULL REFERENCES evo_v2.dependency_version(id),
  to_version_id uuid NOT NULL REFERENCES evo_v2.dependency_version(id),
  role text NOT NULL CHECK(role IN ('content','citation','identity','classification','payload','source-original','data','media','map','index','renderer','component')),
  required boolean NOT NULL DEFAULT true,
  selectors jsonb NOT NULL DEFAULT '[]' CHECK(jsonb_typeof(selectors)='array'),
  PRIMARY KEY(from_version_id,to_version_id,role),
  CHECK(from_version_id<>to_version_id)
);
CREATE INDEX dependency_reverse ON evo_v2.dependency_edge(to_version_id,from_version_id);
CREATE TABLE evo_v2.dependency_seal (
  version_id uuid PRIMARY KEY REFERENCES evo_v2.dependency_version(id),
  manifest_sha256 text NOT NULL CHECK(manifest_sha256 ~ '^[0-9a-f]{64}$'),
  ready boolean NOT NULL,
  blockers jsonb NOT NULL CHECK(jsonb_typeof(blockers)='array'),
  sealed_at timestamptz NOT NULL DEFAULT now()
);

CREATE FUNCTION evo_v2.guard_dependency_edge() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE prior evo_v2.dependency_edge; child_kind text;
BEGIN
  PERFORM 1 FROM evo_v2.dependency_version WHERE id=NEW.from_version_id FOR UPDATE;
  SELECT kind INTO child_kind FROM evo_v2.dependency_version WHERE id=NEW.to_version_id;
  IF (NEW.role='citation' AND child_kind<>'reference') OR (NEW.role='payload' AND child_kind<>'resource')
     OR (NEW.role='renderer' AND child_kind<>'renderer') OR (NEW.role='classification' AND child_kind NOT IN ('taxon','dataset')) THEN
    RAISE EXCEPTION 'Dependency role and target type differ';
  END IF;
  IF EXISTS(SELECT 1 FROM evo_v2.dependency_seal WHERE version_id=NEW.from_version_id) THEN
    SELECT * INTO prior FROM evo_v2.dependency_edge
      WHERE from_version_id=NEW.from_version_id AND to_version_id=NEW.to_version_id AND role=NEW.role;
    IF NOT FOUND OR prior.required IS DISTINCT FROM NEW.required OR prior.selectors IS DISTINCT FROM NEW.selectors THEN
      RAISE EXCEPTION 'Dependency version is sealed';
    END IF;
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER dependency_edge_guard BEFORE INSERT ON evo_v2.dependency_edge
  FOR EACH ROW EXECUTE FUNCTION evo_v2.guard_dependency_edge();

-- Freeze native collections/edges once their graph representation is sealed.
-- Historical rows may be reconciled with ON CONFLICT, but no new row can alter
-- an already sealed native snapshot behind a previously approved hash.
CREATE FUNCTION evo_v2.guard_native_dependency_insert() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE anchor uuid; exists_already boolean;
BEGIN
  IF TG_TABLE_NAME='revision_dependency' THEN
    anchor:=NEW.revision_id;
    PERFORM pg_advisory_xact_lock(hashtextextended('node-dependencies/'||anchor,0));
    SELECT EXISTS(SELECT 1 FROM evo_v2.revision_dependency WHERE revision_id=anchor AND reference_version_id=NEW.reference_version_id) INTO exists_already;
    IF NOT exists_already AND EXISTS(SELECT 1 FROM evo_v2.dependency_version v JOIN evo_v2.dependency_seal s ON s.version_id=v.id WHERE v.node_revision_id=anchor) THEN
      RAISE EXCEPTION 'Native revision dependency set is sealed';
    END IF;
  ELSE
    anchor:=NEW.release_id;
    PERFORM pg_advisory_xact_lock(hashtextextended('source-release/'||anchor,0));
    IF TG_TABLE_NAME='taxon_usage' THEN
      SELECT EXISTS(SELECT 1 FROM evo_v2.taxon_usage WHERE release_id=anchor AND usage_id=NEW.usage_id) INTO exists_already;
    ELSE
      SELECT EXISTS(SELECT 1 FROM evo_v2.source_checklist WHERE release_id=anchor AND source_dataset_id=NEW.source_dataset_id) INTO exists_already;
    END IF;
    IF NOT exists_already AND EXISTS(SELECT 1 FROM evo_v2.dependency_version v JOIN evo_v2.dependency_seal s ON s.version_id=v.id WHERE v.kind='dataset' AND v.source_release_id=anchor) THEN
      RAISE EXCEPTION 'Native source release is sealed; create a new release';
    END IF;
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER native_dependency_guard BEFORE INSERT ON evo_v2.revision_dependency FOR EACH ROW EXECUTE FUNCTION evo_v2.guard_native_dependency_insert();
CREATE TRIGGER native_taxon_guard BEFORE INSERT ON evo_v2.taxon_usage FOR EACH ROW EXECUTE FUNCTION evo_v2.guard_native_dependency_insert();
CREATE TRIGGER native_checklist_guard BEFORE INSERT ON evo_v2.source_checklist FOR EACH ROW EXECUTE FUNCTION evo_v2.guard_native_dependency_insert();

CREATE FUNCTION evo_v2.seal_dependency_version(target uuid) RETURNS evo_v2.dependency_seal LANGUAGE plpgsql AS $$
DECLARE v evo_v2.dependency_version; result evo_v2.dependency_seal;
  native jsonb:='{}'; edges jsonb; blockers jsonb:='[]'; manifest jsonb;
  payload_hash text; mismatch boolean;
BEGIN
  SELECT * INTO STRICT v FROM evo_v2.dependency_version WHERE id=target FOR UPDATE;
  SELECT * INTO result FROM evo_v2.dependency_seal WHERE version_id=target;
  IF FOUND THEN RETURN result; END IF;
  -- A child must be sealed before its parent. This also makes dependency cycles
  -- impossible to seal, without maintaining a second transitive-closure table.
  IF EXISTS(SELECT 1 FROM evo_v2.dependency_edge e LEFT JOIN evo_v2.dependency_seal s ON s.version_id=e.to_version_id WHERE e.from_version_id=target AND s.version_id IS NULL) THEN
    RAISE EXCEPTION 'Seal every dependency before its parent';
  END IF;
  IF v.kind='node' THEN
    PERFORM pg_advisory_xact_lock(hashtextextended('node-dependencies/'||v.node_revision_id,0));
    SELECT jsonb_build_object('id',r.id,'nodeId',r.node_id,'contentSha256',r.content_sha256,'identity',r.identity,'payload',r.payload_artifact_sha256,'payloadRecord',r.payload_record_id)
      INTO native FROM evo_v2.node_revision r WHERE r.id=v.node_revision_id;
    SELECT payload_artifact_sha256 INTO payload_hash FROM evo_v2.node_revision WHERE id=v.node_revision_id;
    IF payload_hash IS NOT NULL AND NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version c ON c.id=e.to_version_id WHERE e.from_version_id=target AND e.required AND e.role='payload' AND c.artifact_sha256=payload_hash) THEN
      RAISE EXCEPTION 'Node payload dependency missing';
    END IF;
    SELECT EXISTS(
      (SELECT reference_version_id FROM evo_v2.revision_dependency WHERE revision_id=v.node_revision_id
       EXCEPT SELECT c.reference_version_id FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version c ON c.id=e.to_version_id WHERE e.from_version_id=target AND e.role='citation' AND e.required)
      UNION ALL
      (SELECT c.reference_version_id FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version c ON c.id=e.to_version_id WHERE e.from_version_id=target AND e.role='citation' AND e.required
       EXCEPT SELECT reference_version_id FROM evo_v2.revision_dependency WHERE revision_id=v.node_revision_id)
    ) INTO mismatch;
    IF mismatch THEN RAISE EXCEPTION 'Node bibliography closure differs from native revision'; END IF;
    IF v.descriptor->>'extractionCoverage' IS DISTINCT FROM 'complete' THEN blockers:=blockers||'"incomplete-node-extraction"'::jsonb; END IF;
  ELSIF v.kind='reference' THEN
    SELECT jsonb_build_object('referenceId',reference_id,'sha256',content_sha256,'metadata',metadata) INTO native FROM evo_v2.reference_revision WHERE version_id=v.reference_version_id;
  ELSIF v.kind='taxon' THEN
    SELECT to_jsonb(t) INTO native FROM evo_v2.taxon_usage t WHERE t.release_id=v.source_release_id AND t.usage_id=v.taxon_usage_id;
    IF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version c ON c.id=e.to_version_id WHERE e.from_version_id=target AND e.required AND e.role='classification' AND c.kind='dataset' AND c.source_release_id=v.source_release_id) THEN
      RAISE EXCEPTION 'Taxon requires its frozen source dataset';
    END IF;
  ELSIF v.kind='dataset' AND v.source_release_id IS NOT NULL THEN
    PERFORM pg_advisory_xact_lock(hashtextextended('source-release/'||v.source_release_id,0));
    SELECT jsonb_build_object('release',to_jsonb(r),'taxonRows',(SELECT count(*) FROM evo_v2.taxon_usage WHERE release_id=r.id),'sourceChecklists',(SELECT count(*) FROM evo_v2.source_checklist WHERE release_id=r.id)) INTO native FROM evo_v2.source_release r WHERE r.id=v.source_release_id;
  ELSIF v.kind='resource' THEN
    IF v.artifact_sha256 IS NOT NULL THEN
      SELECT jsonb_build_object('sha256',sha256,'bytes',bytes,'mediaType',media_type,'access',access) INTO native FROM evo_v2.artifact WHERE sha256=v.artifact_sha256;
      IF v.descriptor ? 'expectedSha256' AND v.descriptor->>'expectedSha256'<>v.artifact_sha256 THEN RAISE EXCEPTION 'Resource hash differs from artifact'; END IF;
    ELSIF v.descriptor->>'storage'='unavailable' THEN blockers:=blockers||'"resource-unavailable"'::jsonb;
    END IF;
  ELSIF v.kind='page' THEN
    IF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge WHERE from_version_id=target AND role='content' AND required) THEN RAISE EXCEPTION 'Page requires content'; END IF;
    IF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version c ON c.id=e.to_version_id WHERE e.from_version_id=target AND e.role='renderer' AND e.required AND c.kind='renderer') THEN RAISE EXCEPTION 'Page requires a renderer version'; END IF;
    IF v.descriptor->>'dependencyCoverage' IS DISTINCT FROM 'complete' THEN blockers:=blockers||'"incomplete-page-declaration"'::jsonb; END IF;
  ELSIF v.kind='renderer' THEN
    IF v.descriptor->>'buildStatus' IS DISTINCT FROM 'verified' THEN blockers:=blockers||'"renderer-not-verified"'::jsonb;
    ELSIF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge WHERE from_version_id=target AND role='payload' AND required) THEN RAISE EXCEPTION 'Verified renderer requires its build payload'; END IF;
  END IF;
  SELECT COALESCE(jsonb_agg(jsonb_build_object('version',e.to_version_id,'role',e.role,'required',e.required,'selectors',e.selectors,'sha256',s.manifest_sha256) ORDER BY e.role,e.to_version_id),'[]') INTO edges
    FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_seal s ON s.version_id=e.to_version_id WHERE e.from_version_id=target;
  SELECT blockers||COALESCE(jsonb_agg(jsonb_build_object('dependency',e.to_version_id,'role',e.role)),'[]') INTO blockers
    FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_seal s ON s.version_id=e.to_version_id WHERE e.from_version_id=target AND e.required AND NOT s.ready;
  manifest:=jsonb_build_object('entity',v.entity_id,'kind',v.kind,'descriptor',v.descriptor,'native',native,'dependencies',edges);
  INSERT INTO evo_v2.dependency_seal(version_id,manifest_sha256,ready,blockers)
    VALUES(target,encode(sha256(convert_to(manifest::text,'UTF8')),'hex'),jsonb_array_length(blockers)=0,blockers) RETURNING * INTO result;
  RETURN result;
END $$;

CREATE FUNCTION evo_v2.dependency_closure(root uuid,include_optional boolean DEFAULT true)
RETURNS TABLE(version_id uuid,entity_id uuid,kind text,entity_key text,manifest_sha256 text,ready boolean)
LANGUAGE sql STABLE AS $$
  WITH RECURSIVE reachable(id) AS (
    SELECT root UNION SELECT e.to_version_id FROM reachable r JOIN evo_v2.dependency_edge e ON e.from_version_id=r.id WHERE include_optional OR e.required
  ) SELECT v.id,v.entity_id,v.kind,n.entity_key,s.manifest_sha256,s.ready FROM reachable r JOIN evo_v2.dependency_version v ON v.id=r.id JOIN evo_v2.dependency_entity n ON n.id=v.entity_id LEFT JOIN evo_v2.dependency_seal s ON s.version_id=v.id
$$;

CREATE TABLE evo_v2.release_page (
  release_id uuid NOT NULL REFERENCES evo_v2.release(id),
  page_entity_id uuid NOT NULL,
  page_kind text NOT NULL DEFAULT 'page' CHECK(page_kind='page'),
  page_version_id uuid NOT NULL,
  PRIMARY KEY(release_id,page_entity_id),
  FOREIGN KEY(page_entity_id,page_kind) REFERENCES evo_v2.dependency_entity(id,kind),
  FOREIGN KEY(page_entity_id,page_version_id) REFERENCES evo_v2.dependency_version(entity_id,id)
);
CREATE TABLE evo_v2.page_release_seal (
  release_id uuid PRIMARY KEY REFERENCES evo_v2.release(id),
  change_set_id uuid NOT NULL,
  candidate_sha256 text NOT NULL,
  sealed_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY(change_set_id,candidate_sha256) REFERENCES evo_v2.publication_approval(change_set_id,candidate_sha256)
);
CREATE FUNCTION evo_v2.guard_release_page() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  PERFORM 1 FROM evo_v2.release WHERE id=NEW.release_id FOR UPDATE;
  IF EXISTS(SELECT 1 FROM evo_v2.page_release_seal WHERE release_id=NEW.release_id) THEN RAISE EXCEPTION 'Page release is sealed'; END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER release_page_guard BEFORE INSERT ON evo_v2.release_page FOR EACH ROW EXECUTE FUNCTION evo_v2.guard_release_page();

CREATE FUNCTION evo_v2.page_release_manifest(target uuid) RETURNS jsonb LANGUAGE sql STABLE AS $$
  SELECT jsonb_build_object('model','page-dependency-v1','pages',COALESCE(jsonb_agg(jsonb_build_object('pageEntityId',p.page_entity_id,'pageVersionId',p.page_version_id,'manifestSha256',s.manifest_sha256) ORDER BY p.page_entity_id),'[]'))
  FROM evo_v2.release_page p LEFT JOIN evo_v2.dependency_seal s ON s.version_id=p.page_version_id WHERE p.release_id=target
$$;
CREATE FUNCTION evo_v2.seal_page_release(target uuid,candidate uuid) RETURNS evo_v2.page_release_seal LANGUAGE plpgsql AS $$
DECLARE r evo_v2.release; actual jsonb; digest text; result evo_v2.page_release_seal;
BEGIN
  SELECT * INTO STRICT r FROM evo_v2.release WHERE id=target FOR UPDATE;
  SELECT * INTO result FROM evo_v2.page_release_seal WHERE release_id=target;
  IF FOUND THEN IF result.change_set_id<>candidate THEN RAISE EXCEPTION 'Different approval for sealed release'; END IF; RETURN result; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.release_page WHERE release_id=target) THEN RAISE EXCEPTION 'Publication has no pages'; END IF;
  IF EXISTS(SELECT 1 FROM evo_v2.release_page p LEFT JOIN evo_v2.dependency_seal s ON s.version_id=p.page_version_id WHERE p.release_id=target AND NOT COALESCE(s.ready,false)) THEN RAISE EXCEPTION 'Publication dependencies are incomplete'; END IF;
  actual:=evo_v2.page_release_manifest(target); digest:=encode(sha256(convert_to(actual::text,'UTF8')),'hex');
  IF r.manifest IS DISTINCT FROM actual OR r.manifest_sha256<>digest THEN RAISE EXCEPTION 'Publication manifest differs from actual page closure'; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.change_set c JOIN evo_v2.publication_approval a ON a.change_set_id=c.id AND a.candidate_sha256=c.candidate_sha256 WHERE c.id=candidate AND c.candidate_sha256=digest AND c.changes=jsonb_build_object('publication',actual)) THEN RAISE EXCEPTION 'Exact publication approval missing'; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.validation_run WHERE change_set_id=candidate AND candidate_sha256=digest AND passed) THEN RAISE EXCEPTION 'Successful publication validation missing'; END IF;
  INSERT INTO evo_v2.page_release_seal(release_id,change_set_id,candidate_sha256) VALUES(target,candidate,digest) RETURNING * INTO result;
  RETURN result;
END $$;
CREATE FUNCTION evo_v2.guard_page_channel() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  IF NOT EXISTS(SELECT 1 FROM evo_v2.page_release_seal WHERE release_id=NEW.release_id) THEN RAISE EXCEPTION 'Channel requires a sealed and approved page publication'; END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER page_channel_guard BEFORE INSERT OR UPDATE ON evo_v2.channel FOR EACH ROW EXECUTE FUNCTION evo_v2.guard_page_channel();

CREATE TABLE evo_v2.authoring_workspace (
  id uuid PRIMARY KEY, owner_id text NOT NULL, label text NOT NULL
);
CREATE TABLE evo_v2.page_draft_head (
  workspace_id uuid NOT NULL REFERENCES evo_v2.authoring_workspace(id),
  page_entity_id uuid NOT NULL,
  page_kind text NOT NULL DEFAULT 'page' CHECK(page_kind='page'),
  page_version_id uuid NOT NULL,
  generation bigint NOT NULL CHECK(generation>0),
  updated_by text NOT NULL, updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY(workspace_id,page_entity_id),
  FOREIGN KEY(page_entity_id,page_kind) REFERENCES evo_v2.dependency_entity(id,kind),
  FOREIGN KEY(page_entity_id,page_version_id) REFERENCES evo_v2.dependency_version(entity_id,id)
);
CREATE TABLE evo_v2.page_write_receipt (
  request_id uuid PRIMARY KEY,
  operation text NOT NULL CHECK(operation IN ('draft','channel')),
  input_sha256 text NOT NULL,
  result jsonb NOT NULL, created_at timestamptz NOT NULL DEFAULT now()
);
CREATE FUNCTION evo_v2.save_page_draft(workspace uuid,page uuid,expected_generation bigint,expected_version uuid,new_version uuid,request uuid,actor text)
RETURNS jsonb LANGUAGE plpgsql AS $$
DECLARE digest text; prior evo_v2.page_write_receipt; head evo_v2.page_draft_head; result jsonb;
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
  INSERT INTO evo_v2.page_draft_head(workspace_id,page_entity_id,page_version_id,generation,updated_by)
    VALUES(workspace,page,new_version,expected_generation+1,actor)
    ON CONFLICT(workspace_id,page_entity_id) DO UPDATE SET page_version_id=EXCLUDED.page_version_id,generation=EXCLUDED.generation,updated_by=EXCLUDED.updated_by,updated_at=now();
  result:=jsonb_build_object('workspaceId',workspace,'pageEntityId',page,'pageVersionId',new_version,'generation',expected_generation+1);
  INSERT INTO evo_v2.page_write_receipt(request_id,operation,input_sha256,result) VALUES(request,'draft',digest,result);
  RETURN result;
END $$;
CREATE FUNCTION evo_v2.advance_page_channel(channel_name text,target uuid,expected_generation bigint,request uuid,actor text)
RETURNS jsonb LANGUAGE plpgsql AS $$
DECLARE digest text; prior evo_v2.page_write_receipt; head evo_v2.channel; result jsonb;
BEGIN
  IF actor IS NULL OR actor='' OR channel_name IS NULL OR channel_name='' THEN RAISE EXCEPTION 'Actor and channel required'; END IF;
  digest:=encode(sha256(convert_to(jsonb_build_array(channel_name,target,expected_generation,actor)::text,'UTF8')),'hex');
  PERFORM pg_advisory_xact_lock(hashtextextended('page-request/'||request,0));
  SELECT * INTO prior FROM evo_v2.page_write_receipt WHERE request_id=request;
  IF FOUND THEN IF prior.operation<>'channel' OR prior.input_sha256<>digest THEN RAISE EXCEPTION 'Idempotency request reused with different input'; END IF; RETURN prior.result; END IF;
  PERFORM pg_advisory_xact_lock(hashtextextended('channel/'||channel_name,0));
  IF NOT EXISTS(SELECT 1 FROM evo_v2.page_release_seal WHERE release_id=target) THEN RAISE EXCEPTION 'Unapproved publication'; END IF;
  SELECT * INTO head FROM evo_v2.channel WHERE name=channel_name FOR UPDATE;
  IF (FOUND AND head.generation<>expected_generation) OR (NOT FOUND AND expected_generation<>0) THEN RAISE EXCEPTION 'Publication channel changed' USING ERRCODE='40001'; END IF;
  INSERT INTO evo_v2.channel(name,release_id,generation) VALUES(channel_name,target,expected_generation+1)
    ON CONFLICT(name) DO UPDATE SET release_id=EXCLUDED.release_id,generation=EXCLUDED.generation,updated_at=now();
  result:=jsonb_build_object('channel',channel_name,'releaseId',target,'generation',expected_generation+1,'actor',actor);
  INSERT INTO evo_v2.page_write_receipt(request_id,operation,input_sha256,result) VALUES(request,'channel',digest,result);
  RETURN result;
END $$;

CREATE FUNCTION evo_v2.dependency_referrers(target uuid)
RETURNS TABLE(page_version_id uuid,page_entity_id uuid,page_key text,release_id uuid,workspace_id uuid)
LANGUAGE sql STABLE AS $$
  WITH RECURSIVE parents(id) AS (
    SELECT target UNION SELECT e.from_version_id FROM parents p JOIN evo_v2.dependency_edge e ON e.to_version_id=p.id
  ) SELECT v.id,v.entity_id,n.entity_key,r.release_id,d.workspace_id FROM parents p JOIN evo_v2.dependency_version v ON v.id=p.id JOIN evo_v2.dependency_entity n ON n.id=v.entity_id LEFT JOIN evo_v2.release_page r ON r.page_version_id=v.id LEFT JOIN evo_v2.page_draft_head d ON d.page_version_id=v.id WHERE v.kind='page'
$$;
DO $$ DECLARE name text; BEGIN
  FOREACH name IN ARRAY ARRAY['dependency_entity','dependency_version','dependency_edge','dependency_seal','release_page','page_release_seal','authoring_workspace','page_write_receipt'] LOOP
    EXECUTE format('CREATE TRIGGER immutable_rows BEFORE UPDATE OR DELETE ON evo_v2.%I FOR EACH ROW EXECUTE FUNCTION evo_v2.reject_mutation()',name);
  END LOOP;
END $$;
REVOKE ALL ON ALL TABLES IN SCHEMA evo_v2 FROM PUBLIC;
REVOKE ALL ON ALL FUNCTIONS IN SCHEMA evo_v2 FROM PUBLIC;
