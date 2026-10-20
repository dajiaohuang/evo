-- Bibliographic identity/version is stored once. Passage/source selectors stay
-- in the immutable revision payload; the dependency graph is a derived index.
ALTER TABLE evo_v2.reference_revision ADD COLUMN version_id bigint GENERATED ALWAYS AS IDENTITY;
ALTER TABLE evo_v2.reference_revision ADD CONSTRAINT reference_version_key UNIQUE(version_id);
ALTER TABLE evo_v2.revision_dependency RENAME TO revision_dependency_legacy;
CREATE TABLE evo_v2.revision_dependency (
  revision_id uuid NOT NULL REFERENCES evo_v2.node_revision(id),
  reference_version_id bigint NOT NULL REFERENCES evo_v2.reference_revision(version_id),
  CONSTRAINT revision_dependency_v2_pkey PRIMARY KEY(revision_id,reference_version_id)
);
INSERT INTO evo_v2.revision_dependency(revision_id,reference_version_id)
SELECT d.revision_id,r.version_id FROM evo_v2.revision_dependency_legacy d
JOIN evo_v2.reference_revision r ON r.reference_id=d.reference_id AND r.content_sha256=d.reference_sha256;
DO $$ BEGIN
  IF (SELECT count(*) FROM evo_v2.revision_dependency)<>(SELECT count(*) FROM evo_v2.revision_dependency_legacy) THEN
    RAISE EXCEPTION 'Dependency compaction lost an edge';
  END IF;
END $$;
CREATE INDEX reference_dependencies_v2 ON evo_v2.revision_dependency(reference_version_id,revision_id);
CREATE TRIGGER immutable_rows BEFORE UPDATE OR DELETE ON evo_v2.revision_dependency
FOR EACH ROW EXECUTE FUNCTION evo_v2.reject_mutation();
DROP TABLE evo_v2.revision_dependency_legacy;
-- The failed hierarchy transaction has no live rows. Reclaim its derived empty
-- relation before another bounded import; never truncate a populated tree.
DO $$ BEGIN
  IF EXISTS(SELECT 1 FROM evo_v2.taxon_usage) THEN
    RAISE EXCEPTION 'Refusing to reclaim a nonempty hierarchy';
  END IF;
END $$;
TRUNCATE evo_v2.taxon_usage;
REVOKE ALL ON ALL TABLES IN SCHEMA evo_v2 FROM PUBLIC;
