CREATE TABLE evo_v2.import_node_key (
  source_commit text NOT NULL CHECK (source_commit ~ '^[0-9a-f]{40}$'),
  physical_key text NOT NULL,
  node_id uuid NOT NULL REFERENCES evo_v2.content_node(id),
  revision_id uuid NOT NULL REFERENCES evo_v2.node_revision(id),
  PRIMARY KEY (source_commit, physical_key)
);
CREATE TRIGGER immutable_rows BEFORE UPDATE OR DELETE ON evo_v2.import_node_key
FOR EACH ROW EXECUTE FUNCTION evo_v2.reject_mutation();
ALTER TABLE evo_v2.node_revision ADD CONSTRAINT required_aggregate_keys
CHECK (document ?& ARRAY['node','evidence','pages'] AND (document->'node') ? 'identity');
REVOKE ALL ON ALL TABLES IN SCHEMA evo_v2 FROM PUBLIC;
