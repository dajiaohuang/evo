-- New isolated schema. No existing application or Auth schema is rewritten.
CREATE SCHEMA IF NOT EXISTS evo_v2;
CREATE TABLE evo_v2.schema_migration (
  version text PRIMARY KEY,
  sha256 text NOT NULL CHECK (sha256 ~ '^[0-9a-f]{64}$'),
  applied_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE evo_v2.import_batch (
  id text PRIMARY KEY,
  source_commit text NOT NULL CHECK (source_commit ~ '^[0-9a-f]{40}$'),
  payload_sha256 text NOT NULL CHECK (payload_sha256 ~ '^[0-9a-f]{64}$'),
  record_count integer NOT NULL CHECK (record_count >= 0),
  committed_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE evo_v2.source_release (
  id uuid PRIMARY KEY,
  authority text NOT NULL,
  release_key text NOT NULL,
  metadata jsonb NOT NULL,
  UNIQUE (authority, release_key)
);
CREATE TABLE evo_v2.source_checklist (
  release_id uuid NOT NULL REFERENCES evo_v2.source_release(id),
  source_dataset_id text NOT NULL,
  metadata jsonb NOT NULL,
  PRIMARY KEY (release_id, source_dataset_id)
);
CREATE TABLE evo_v2.taxon_usage (
  release_id uuid NOT NULL REFERENCES evo_v2.source_release(id),
  usage_id text NOT NULL,
  scientific_name text NOT NULL,
  authorship text,
  rank text NOT NULL,
  status text NOT NULL,
  parent_id text,
  accepted_id text,
  source_dataset_id text,
  in_hierarchy boolean NOT NULL DEFAULT false,
  PRIMARY KEY (release_id, usage_id),
  FOREIGN KEY (release_id, parent_id) REFERENCES evo_v2.taxon_usage(release_id, usage_id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (release_id, accepted_id) REFERENCES evo_v2.taxon_usage(release_id, usage_id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (release_id, source_dataset_id) REFERENCES evo_v2.source_checklist(release_id, source_dataset_id),
  CHECK (parent_id IS DISTINCT FROM usage_id),
  CHECK (length(usage_id) > 0 AND length(scientific_name) > 0)
);
CREATE INDEX taxon_children ON evo_v2.taxon_usage(release_id, parent_id, scientific_name, usage_id) WHERE in_hierarchy;
CREATE INDEX taxon_name_prefix ON evo_v2.taxon_usage(release_id, lower(scientific_name) text_pattern_ops);
CREATE TABLE evo_v2.content_node (
  id uuid PRIMARY KEY,
  kind text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE evo_v2.node_revision (
  id uuid PRIMARY KEY,
  node_id uuid NOT NULL REFERENCES evo_v2.content_node(id),
  parent_revision_id uuid,
  content_sha256 text NOT NULL CHECK (content_sha256 ~ '^[0-9a-f]{64}$'),
  document jsonb NOT NULL CHECK (jsonb_typeof(document) = 'object'),
  source_files jsonb NOT NULL CHECK (jsonb_typeof(source_files) = 'object'),
  delivery_bindings jsonb NOT NULL CHECK (jsonb_typeof(delivery_bindings) = 'array'),
  origin_commit text NOT NULL CHECK (origin_commit ~ '^[0-9a-f]{40}$'),
  created_by text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (node_id, content_sha256),
  UNIQUE (node_id, id),
  FOREIGN KEY (node_id, parent_revision_id) REFERENCES evo_v2.node_revision(node_id, id),
  CHECK (jsonb_typeof(document->'node') = 'object'),
  CHECK (jsonb_typeof(document->'pages') = 'object')
);
-- A revision stores the whole source-bound aggregate. Markdown occurs once in
-- document.pages, raw evidence keeps bindings instead of hydrated bibliography.
CREATE TABLE evo_v2.reference_revision (
  reference_id text NOT NULL,
  content_sha256 text NOT NULL CHECK (content_sha256 ~ '^[0-9a-f]{64}$'),
  metadata jsonb NOT NULL CHECK (jsonb_typeof(metadata) = 'object'),
  origin_commit text NOT NULL CHECK (origin_commit ~ '^[0-9a-f]{40}$'),
  PRIMARY KEY (reference_id, content_sha256)
);
CREATE TABLE evo_v2.source_snapshot (
  sha256 text PRIMARY KEY CHECK (sha256 ~ '^[0-9a-f]{64}$'),
  bytes bigint NOT NULL CHECK (bytes >= 0),
  media_type text NOT NULL,
  storage_locator text NOT NULL,
  access text NOT NULL CHECK (access IN ('private', 'public')),
  provenance jsonb NOT NULL
);
CREATE TABLE evo_v2.revision_dependency (
  revision_id uuid NOT NULL REFERENCES evo_v2.node_revision(id),
  reference_id text NOT NULL,
  reference_sha256 text NOT NULL,
  bindings jsonb NOT NULL CHECK (jsonb_typeof(bindings) = 'array'),
  PRIMARY KEY (revision_id, reference_id),
  FOREIGN KEY (reference_id, reference_sha256) REFERENCES evo_v2.reference_revision(reference_id, content_sha256)
);
CREATE INDEX dependent_revisions ON evo_v2.revision_dependency(reference_id, reference_sha256, revision_id);
CREATE TABLE evo_v2.change_set (
  id uuid PRIMARY KEY,
  candidate_sha256 text NOT NULL CHECK (candidate_sha256 ~ '^[0-9a-f]{64}$'),
  base_release_id uuid,
  actor_id text NOT NULL,
  actor_kind text NOT NULL CHECK (actor_kind IN ('human', 'agent', 'migration')),
  idempotency_key text NOT NULL UNIQUE,
  changes jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (id, candidate_sha256)
);
CREATE TABLE evo_v2.validation_run (
  id uuid PRIMARY KEY,
  change_set_id uuid NOT NULL,
  candidate_sha256 text NOT NULL,
  validator_version text NOT NULL,
  passed boolean NOT NULL,
  receipt jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  FOREIGN KEY (change_set_id, candidate_sha256) REFERENCES evo_v2.change_set(id, candidate_sha256)
);
CREATE TABLE evo_v2.publication_approval (
  change_set_id uuid NOT NULL,
  candidate_sha256 text NOT NULL,
  approved_by text NOT NULL,
  approved_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (change_set_id, candidate_sha256),
  FOREIGN KEY (change_set_id, candidate_sha256) REFERENCES evo_v2.change_set(id, candidate_sha256)
);
CREATE TABLE evo_v2.outbox_job (
  id uuid PRIMARY KEY,
  idempotency_key text NOT NULL UNIQUE,
  input_sha256 text NOT NULL,
  kind text NOT NULL,
  payload jsonb NOT NULL,
  state text NOT NULL DEFAULT 'queued' CHECK (state IN ('queued','running','succeeded','failed','unknown')),
  lease_until timestamptz,
  receipt jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE evo_v2.release (
  id uuid PRIMARY KEY,
  manifest_sha256 text NOT NULL UNIQUE CHECK (manifest_sha256 ~ '^[0-9a-f]{64}$'),
  origin_commit text NOT NULL,
  manifest jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE evo_v2.change_set ADD FOREIGN KEY (base_release_id) REFERENCES evo_v2.release(id);
CREATE TABLE evo_v2.release_item (
  release_id uuid NOT NULL REFERENCES evo_v2.release(id),
  node_id uuid NOT NULL,
  revision_id uuid NOT NULL,
  PRIMARY KEY (release_id, node_id),
  FOREIGN KEY (node_id, revision_id) REFERENCES evo_v2.node_revision(node_id, id)
);
CREATE TABLE evo_v2.release_reference (
  release_id uuid NOT NULL REFERENCES evo_v2.release(id),
  reference_id text NOT NULL,
  reference_sha256 text NOT NULL,
  PRIMARY KEY (release_id, reference_id),
  FOREIGN KEY (reference_id, reference_sha256) REFERENCES evo_v2.reference_revision(reference_id, content_sha256)
);
CREATE TABLE evo_v2.artifact (
  sha256 text PRIMARY KEY CHECK (sha256 ~ '^[0-9a-f]{64}$'),
  bytes bigint NOT NULL CHECK (bytes >= 0),
  media_type text NOT NULL,
  storage_locator text NOT NULL,
  access text NOT NULL CHECK (access IN ('private','public'))
);
CREATE TABLE evo_v2.channel (
  name text PRIMARY KEY,
  release_id uuid NOT NULL REFERENCES evo_v2.release(id),
  generation bigint NOT NULL DEFAULT 1 CHECK (generation > 0),
  updated_at timestamptz NOT NULL DEFAULT now()
);
-- Revisions and scientific source rows are append-only. Draft pointers and job
-- leases may change; a new body or bibliography entry always has a new hash.
CREATE FUNCTION evo_v2.reject_mutation() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN RAISE EXCEPTION 'evo_v2 % rows are immutable; insert a new revision', TG_TABLE_NAME; END;
$$;
DO $$ DECLARE table_name text; BEGIN
  FOREACH table_name IN ARRAY ARRAY['node_revision','reference_revision','source_release','source_checklist','taxon_usage','source_snapshot','revision_dependency','release','release_item','release_reference','artifact','publication_approval','validation_run','import_batch'] LOOP
    EXECUTE format('CREATE TRIGGER immutable_rows BEFORE UPDATE OR DELETE ON evo_v2.%I FOR EACH ROW EXECUTE FUNCTION evo_v2.reject_mutation()', table_name);
  END LOOP;
END $$;
-- No public/browser role receives this schema by default.
REVOKE ALL ON SCHEMA evo_v2 FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA evo_v2 FROM PUBLIC;
