CREATE TABLE evo_v2.import_reference_key (
  source_commit text NOT NULL CHECK (source_commit ~ '^[0-9a-f]{40}$'),
  reference_id text NOT NULL,
  reference_sha256 text NOT NULL,
  PRIMARY KEY (source_commit, reference_id),
  FOREIGN KEY (reference_id, reference_sha256) REFERENCES evo_v2.reference_revision(reference_id, content_sha256)
);
CREATE TRIGGER immutable_rows BEFORE UPDATE OR DELETE ON evo_v2.import_reference_key
FOR EACH ROW EXECUTE FUNCTION evo_v2.reject_mutation();
REVOKE ALL ON ALL TABLES IN SCHEMA evo_v2 FROM PUBLIC;
