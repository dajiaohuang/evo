-- A changed bibliography version can produce a new revision while reusing the
-- same scientific prose. Body equality must not collapse distinct revisions.
ALTER TABLE evo_v2.node_revision DROP CONSTRAINT node_revision_node_id_content_sha256_key;
ALTER TABLE evo_v2.node_revision ADD COLUMN payload_record_id uuid;
ALTER TABLE evo_v2.node_revision ADD FOREIGN KEY(node_id,payload_record_id)
REFERENCES evo_v2.node_revision(node_id,id);
