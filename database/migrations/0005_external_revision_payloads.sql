-- Immutable baseline bodies are content-addressed private objects. PostgreSQL
-- retains transaction/identity/index metadata; small new drafts may stay inline.
ALTER TABLE evo_v2.node_revision ALTER COLUMN document DROP NOT NULL;
ALTER TABLE evo_v2.node_revision ADD COLUMN identity jsonb;
ALTER TABLE evo_v2.node_revision ADD COLUMN payload_artifact_sha256 text REFERENCES evo_v2.artifact(sha256);
ALTER TABLE evo_v2.node_revision ADD CONSTRAINT revision_payload_present CHECK (
  document IS NOT NULL OR (payload_artifact_sha256 IS NOT NULL AND identity IS NOT NULL AND jsonb_typeof(identity)='object')
);
