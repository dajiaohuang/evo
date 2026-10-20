-- Keep PL/pgSQL local variables distinct from receipt columns.
CREATE OR REPLACE FUNCTION evo_v2.seal_dependency_version(target uuid) RETURNS evo_v2.dependency_seal LANGUAGE plpgsql AS $$
DECLARE v evo_v2.dependency_version; result evo_v2.dependency_seal;
  native jsonb:='{}'; edges jsonb; v_blockers jsonb:='[]'; manifest jsonb;
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
    IF v.descriptor->>'extractionCoverage' IS DISTINCT FROM 'complete' THEN v_blockers:=v_blockers||'"incomplete-node-extraction"'::jsonb; END IF;
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
    ELSIF v.descriptor->>'storage'='unavailable' THEN v_blockers:=v_blockers||'"resource-unavailable"'::jsonb;
    END IF;
  ELSIF v.kind='page' THEN
    IF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge WHERE from_version_id=target AND role='content' AND required) THEN RAISE EXCEPTION 'Page requires content'; END IF;
    IF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_version c ON c.id=e.to_version_id WHERE e.from_version_id=target AND e.role='renderer' AND e.required AND c.kind='renderer') THEN RAISE EXCEPTION 'Page requires a renderer version'; END IF;
    IF v.descriptor->>'dependencyCoverage' IS DISTINCT FROM 'complete' THEN v_blockers:=v_blockers||'"incomplete-page-declaration"'::jsonb; END IF;
  ELSIF v.kind='renderer' THEN
    IF v.descriptor->>'buildStatus' IS DISTINCT FROM 'verified' THEN v_blockers:=v_blockers||'"renderer-not-verified"'::jsonb;
    ELSIF NOT EXISTS(SELECT 1 FROM evo_v2.dependency_edge WHERE from_version_id=target AND role='payload' AND required) THEN RAISE EXCEPTION 'Verified renderer requires its build payload'; END IF;
  END IF;
  SELECT COALESCE(jsonb_agg(jsonb_build_object('version',e.to_version_id,'role',e.role,'required',e.required,'selectors',e.selectors,'sha256',s.manifest_sha256) ORDER BY e.role,e.to_version_id),'[]') INTO edges
    FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_seal s ON s.version_id=e.to_version_id WHERE e.from_version_id=target;
  SELECT v_blockers||COALESCE(jsonb_agg(jsonb_build_object('dependency',e.to_version_id,'role',e.role)),'[]') INTO v_blockers
    FROM evo_v2.dependency_edge e JOIN evo_v2.dependency_seal s ON s.version_id=e.to_version_id WHERE e.from_version_id=target AND e.required AND NOT s.ready;
  manifest:=jsonb_build_object('entity',v.entity_id,'kind',v.kind,'descriptor',v.descriptor,'native',native,'dependencies',edges);
  INSERT INTO evo_v2.dependency_seal(version_id,manifest_sha256,ready,blockers)
    VALUES(target,encode(sha256(convert_to(manifest::text,'UTF8')),'hex'),jsonb_array_length(v_blockers)=0,v_blockers) RETURNING * INTO result;
  RETURN result;
END $$;
