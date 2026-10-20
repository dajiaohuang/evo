-- Existing canonical identities need recorded fields, but do not all record a
-- kind. Preserve that absence instead of fabricating a scientific type.
ALTER TABLE evo_v2.content_node ALTER COLUMN kind DROP NOT NULL;
