-- All frozen nomenclatural search shards are preserved in private objects.
-- SQL serves exact identity/ancestry/direct-child lookup; avoid duplicating the
-- complete search corpus as another large name index before it is needed.
DROP INDEX evo_v2.taxon_name_prefix;
DROP INDEX evo_v2.taxon_children;
CREATE INDEX taxon_children ON evo_v2.taxon_usage(release_id,parent_id) WHERE in_hierarchy;
