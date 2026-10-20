-- Graph aliases do not create independent scientific identities.
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
  -- Native identity remains authoritative even if a graph adapter used an
  -- alternate internal entity key. Aliases cannot bypass version consistency.
  IF EXISTS(
    WITH nodes AS (
      SELECT r.node_id,r.id FROM evo_v2.release_page p
      CROSS JOIN LATERAL evo_v2.dependency_closure(p.page_version_id,false) c
      JOIN evo_v2.dependency_version v ON v.id=c.version_id JOIN evo_v2.node_revision r ON r.id=v.node_revision_id
      WHERE p.release_id=target
    ) SELECT node_id FROM nodes GROUP BY node_id HAVING count(DISTINCT id)>1
  ) OR EXISTS(
    WITH refs AS (
      SELECT r.reference_id,r.version_id FROM evo_v2.release_page p
      CROSS JOIN LATERAL evo_v2.dependency_closure(p.page_version_id,false) c
      JOIN evo_v2.dependency_version v ON v.id=c.version_id JOIN evo_v2.reference_revision r ON r.version_id=v.reference_version_id
      WHERE p.release_id=target
    ) SELECT reference_id FROM refs GROUP BY reference_id HAVING count(DISTINCT version_id)>1
  ) THEN RAISE EXCEPTION 'Publication mixes native node or bibliography versions'; END IF;
  actual:=evo_v2.page_release_manifest(target); digest:=encode(sha256(convert_to(actual::text,'UTF8')),'hex');
  IF r.manifest IS DISTINCT FROM actual OR r.manifest_sha256<>digest THEN RAISE EXCEPTION 'Publication manifest differs from actual page closure'; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.change_set c JOIN evo_v2.publication_approval a ON a.change_set_id=c.id AND a.candidate_sha256=c.candidate_sha256 WHERE c.id=candidate AND c.candidate_sha256=digest AND c.changes=jsonb_build_object('publication',actual)) THEN RAISE EXCEPTION 'Exact publication approval missing'; END IF;
  IF NOT EXISTS(SELECT 1 FROM evo_v2.validation_run WHERE change_set_id=candidate AND candidate_sha256=digest AND passed) THEN RAISE EXCEPTION 'Successful publication validation missing'; END IF;
  INSERT INTO evo_v2.page_release_seal(release_id,change_set_id,candidate_sha256) VALUES(target,candidate,digest) RETURNING * INTO result;
  RETURN result;
END $$;
