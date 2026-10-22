-- Local Turso authoring schema v1. PostgreSQL publication APIs are not exposed.
-- Historical tables retain every row/column/key; unsupported mutation surfaces are frozen.

CREATE TABLE "artifact" (
  "sha256" TEXT NOT NULL,
  "bytes" INTEGER NOT NULL,
  "media_type" TEXT NOT NULL,
  "storage_locator" TEXT NOT NULL,
  "access" TEXT NOT NULL,
  CHECK ((access IN ('private', 'public'))),
  CHECK ((bytes >= 0)),
  PRIMARY KEY (sha256),
  CHECK (((length(sha256)=64 AND sha256 NOT GLOB '*[^0-9a-f]*')))
);
CREATE TRIGGER "artifact_update_guard" BEFORE UPDATE ON "artifact" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "artifact_delete_guard" BEFORE DELETE ON "artifact" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "authoring_workspace" (
  "id" TEXT NOT NULL,
  "owner_id" TEXT NOT NULL,
  "label" TEXT NOT NULL,
  PRIMARY KEY (id)
);
CREATE TRIGGER "authoring_workspace_update_guard" BEFORE UPDATE ON "authoring_workspace" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "authoring_workspace_delete_guard" BEFORE DELETE ON "authoring_workspace" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "change_set" (
  "id" TEXT NOT NULL,
  "candidate_sha256" TEXT NOT NULL,
  "base_release_id" TEXT,
  "actor_id" TEXT NOT NULL,
  "actor_kind" TEXT NOT NULL,
  "idempotency_key" TEXT NOT NULL,
  "changes" TEXT NOT NULL CHECK ("changes" IS NULL OR json_valid("changes")),
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (base_release_id) REFERENCES release(id),
  UNIQUE (id, candidate_sha256),
  UNIQUE (idempotency_key),
  PRIMARY KEY (id)
);
CREATE TRIGGER "change_set_insert_guard" BEFORE INSERT ON "change_set" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "change_set_update_guard" BEFORE UPDATE ON "change_set" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "change_set_delete_guard" BEFORE DELETE ON "change_set" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "channel" (
  "name" TEXT NOT NULL,
  "release_id" TEXT NOT NULL,
  "generation" INTEGER NOT NULL DEFAULT 1,
  "updated_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (name),
  FOREIGN KEY (release_id) REFERENCES release(id)
);
CREATE TRIGGER "channel_insert_guard" BEFORE INSERT ON "channel" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "channel_update_guard" BEFORE UPDATE ON "channel" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "channel_delete_guard" BEFORE DELETE ON "channel" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "content_node" (
  "id" TEXT NOT NULL,
  "kind" TEXT,
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TRIGGER "content_node_update_guard" BEFORE UPDATE ON "content_node" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "content_node_delete_guard" BEFORE DELETE ON "content_node" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "dependency_edge" (
  "from_version_id" TEXT NOT NULL,
  "to_version_id" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "required" INTEGER NOT NULL DEFAULT 1 CHECK ("required" IN (0,1)),
  "selectors" TEXT NOT NULL DEFAULT '[]' CHECK ("selectors" IS NULL OR json_valid("selectors")),
  FOREIGN KEY (from_version_id) REFERENCES dependency_version(id),
  PRIMARY KEY (from_version_id, to_version_id, role),
  FOREIGN KEY (to_version_id) REFERENCES dependency_version(id)
);
CREATE TRIGGER "dependency_edge_insert_guard" BEFORE INSERT ON "dependency_edge" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_edge_update_guard" BEFORE UPDATE ON "dependency_edge" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_edge_delete_guard" BEFORE DELETE ON "dependency_edge" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "dependency_entity" (
  "id" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "entity_key" TEXT NOT NULL,
  "identity" TEXT NOT NULL CHECK ("identity" IS NULL OR json_valid("identity")),
  UNIQUE (id, kind),
  UNIQUE (kind, entity_key),
  PRIMARY KEY (id)
);
CREATE TRIGGER "dependency_entity_insert_guard" BEFORE INSERT ON "dependency_entity" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_entity_update_guard" BEFORE UPDATE ON "dependency_entity" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_entity_delete_guard" BEFORE DELETE ON "dependency_entity" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "dependency_seal" (
  "version_id" TEXT NOT NULL,
  "manifest_sha256" TEXT NOT NULL,
  "ready" INTEGER NOT NULL CHECK ("ready" IN (0,1)),
  "blockers" TEXT NOT NULL CHECK ("blockers" IS NULL OR json_valid("blockers")),
  "sealed_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (version_id),
  FOREIGN KEY (version_id) REFERENCES dependency_version(id)
);
CREATE TRIGGER "dependency_seal_insert_guard" BEFORE INSERT ON "dependency_seal" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_seal_update_guard" BEFORE UPDATE ON "dependency_seal" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_seal_delete_guard" BEFORE DELETE ON "dependency_seal" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "dependency_version" (
  "id" TEXT NOT NULL,
  "entity_id" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "descriptor" TEXT NOT NULL CHECK ("descriptor" IS NULL OR json_valid("descriptor")),
  "node_revision_id" TEXT,
  "reference_version_id" INTEGER,
  "source_release_id" TEXT,
  "taxon_usage_id" TEXT,
  "artifact_sha256" TEXT,
  "source_snapshot_sha256" TEXT,
  "created_by" TEXT NOT NULL,
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (artifact_sha256) REFERENCES artifact(sha256),
  UNIQUE (entity_id, id),
  FOREIGN KEY (entity_id, kind) REFERENCES dependency_entity(id, kind),
  UNIQUE (id, kind),
  FOREIGN KEY (node_revision_id) REFERENCES node_revision(id),
  PRIMARY KEY (id),
  FOREIGN KEY (reference_version_id) REFERENCES reference_revision(version_id),
  FOREIGN KEY (source_release_id) REFERENCES source_release(id),
  FOREIGN KEY (source_release_id, taxon_usage_id) REFERENCES taxon_usage(release_id, usage_id),
  FOREIGN KEY (source_snapshot_sha256) REFERENCES source_snapshot(sha256)
);
CREATE TRIGGER "dependency_version_insert_guard" BEFORE INSERT ON "dependency_version" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_version_update_guard" BEFORE UPDATE ON "dependency_version" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "dependency_version_delete_guard" BEFORE DELETE ON "dependency_version" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "import_batch" (
  "id" TEXT NOT NULL,
  "source_commit" TEXT NOT NULL,
  "payload_sha256" TEXT NOT NULL,
  "record_count" INTEGER NOT NULL,
  "committed_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CHECK (((length(payload_sha256)=64 AND payload_sha256 NOT GLOB '*[^0-9a-f]*'))),
  PRIMARY KEY (id),
  CHECK ((record_count >= 0)),
  CHECK (((length(source_commit)=40 AND source_commit NOT GLOB '*[^0-9a-f]*')))
);
CREATE TRIGGER "import_batch_update_guard" BEFORE UPDATE ON "import_batch" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "import_batch_delete_guard" BEFORE DELETE ON "import_batch" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "import_node_key" (
  "source_commit" TEXT NOT NULL,
  "physical_key" TEXT NOT NULL,
  "node_id" TEXT NOT NULL,
  "revision_id" TEXT NOT NULL,
  FOREIGN KEY (node_id) REFERENCES content_node(id),
  PRIMARY KEY (source_commit, physical_key),
  FOREIGN KEY (revision_id) REFERENCES node_revision(id),
  CHECK (((length(source_commit)=40 AND source_commit NOT GLOB '*[^0-9a-f]*')))
);
CREATE TRIGGER "import_node_key_update_guard" BEFORE UPDATE ON "import_node_key" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "import_node_key_delete_guard" BEFORE DELETE ON "import_node_key" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "import_reference_key" (
  "source_commit" TEXT NOT NULL,
  "reference_id" TEXT NOT NULL,
  "reference_sha256" TEXT NOT NULL,
  PRIMARY KEY (source_commit, reference_id),
  FOREIGN KEY (reference_id, reference_sha256) REFERENCES reference_revision(reference_id, content_sha256),
  CHECK (((length(source_commit)=40 AND source_commit NOT GLOB '*[^0-9a-f]*')))
);
CREATE TRIGGER "import_reference_key_update_guard" BEFORE UPDATE ON "import_reference_key" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "import_reference_key_delete_guard" BEFORE DELETE ON "import_reference_key" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "node_draft_head" (
  "workspace_id" TEXT NOT NULL,
  "node_id" TEXT NOT NULL,
  "node_revision_id" TEXT NOT NULL,
  "generation" INTEGER NOT NULL,
  "updated_by" TEXT NOT NULL,
  "updated_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CHECK ((generation > 0)),
  FOREIGN KEY (node_id, node_revision_id) REFERENCES node_revision(node_id, id),
  PRIMARY KEY (workspace_id, node_id),
  FOREIGN KEY (workspace_id) REFERENCES authoring_workspace(id)
);
CREATE TRIGGER "node_draft_head_delete_guard" BEFORE DELETE ON "node_draft_head" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "node_revision" (
  "id" TEXT NOT NULL,
  "node_id" TEXT NOT NULL,
  "parent_revision_id" TEXT,
  "content_sha256" TEXT NOT NULL,
  "document" TEXT CHECK ("document" IS NULL OR json_valid("document")),
  "source_files" TEXT NOT NULL DEFAULT '{}' CHECK ("source_files" IS NULL OR json_valid("source_files")),
  "delivery_bindings" TEXT NOT NULL DEFAULT '[]' CHECK ("delivery_bindings" IS NULL OR json_valid("delivery_bindings")),
  "origin_commit" TEXT,
  "created_by" TEXT NOT NULL,
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "identity" TEXT CHECK ("identity" IS NULL OR json_valid("identity")),
  "payload_artifact_sha256" TEXT,
  "payload_record_id" TEXT,
  CHECK (((length(content_sha256)=64 AND content_sha256 NOT GLOB '*[^0-9a-f]*'))),
  CHECK ((json_type(delivery_bindings) = 'array')),
  CHECK ((json_type(document) = 'object')),
  CHECK ((json_type(document,'$.node') = 'object')),
  CHECK ((json_type(document,'$.pages') = 'object')),
  FOREIGN KEY (node_id) REFERENCES content_node(id),
  UNIQUE (node_id, id),
  FOREIGN KEY (node_id, parent_revision_id) REFERENCES node_revision(node_id, id),
  FOREIGN KEY (node_id, payload_record_id) REFERENCES node_revision(node_id, id),
  CHECK (((length(origin_commit)=40 AND origin_commit NOT GLOB '*[^0-9a-f]*'))),
  FOREIGN KEY (payload_artifact_sha256) REFERENCES artifact(sha256),
  PRIMARY KEY (id),
  CHECK ((json_type(source_files) = 'object')),
  CHECK (document IS NULL OR (json_type(document,'$.node') = 'object' AND json_type(document,'$.evidence') = 'object' AND json_type(document,'$.pages') = 'object' AND json_type(document,'$.node.identity') = 'object') IS TRUE),
  CHECK (document IS NOT NULL OR (payload_artifact_sha256 IS NOT NULL AND identity IS NOT NULL AND json_type(identity) = 'object'))
);
CREATE TRIGGER "node_revision_update_guard" BEFORE UPDATE ON "node_revision" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "node_revision_delete_guard" BEFORE DELETE ON "node_revision" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "outbox_job" (
  "id" TEXT NOT NULL,
  "idempotency_key" TEXT NOT NULL,
  "input_sha256" TEXT NOT NULL,
  "kind" TEXT NOT NULL,
  "payload" TEXT NOT NULL CHECK ("payload" IS NULL OR json_valid("payload")),
  "state" TEXT NOT NULL DEFAULT 'queued',
  "lease_until" TEXT,
  "receipt" TEXT CHECK ("receipt" IS NULL OR json_valid("receipt")),
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (idempotency_key),
  PRIMARY KEY (id)
);
CREATE TRIGGER "outbox_job_insert_guard" BEFORE INSERT ON "outbox_job" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "outbox_job_update_guard" BEFORE UPDATE ON "outbox_job" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "outbox_job_delete_guard" BEFORE DELETE ON "outbox_job" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "page_draft_head" (
  "workspace_id" TEXT NOT NULL,
  "page_entity_id" TEXT NOT NULL,
  "page_kind" TEXT NOT NULL DEFAULT 'page',
  "page_version_id" TEXT NOT NULL,
  "generation" INTEGER NOT NULL,
  "updated_by" TEXT NOT NULL,
  "updated_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (page_entity_id, page_kind) REFERENCES dependency_entity(id, kind),
  FOREIGN KEY (page_entity_id, page_version_id) REFERENCES dependency_version(entity_id, id),
  PRIMARY KEY (workspace_id, page_entity_id),
  FOREIGN KEY (workspace_id) REFERENCES authoring_workspace(id)
);
CREATE TRIGGER "page_draft_head_insert_guard" BEFORE INSERT ON "page_draft_head" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "page_draft_head_update_guard" BEFORE UPDATE ON "page_draft_head" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "page_draft_head_delete_guard" BEFORE DELETE ON "page_draft_head" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "page_release_seal" (
  "release_id" TEXT NOT NULL,
  "change_set_id" TEXT NOT NULL,
  "candidate_sha256" TEXT NOT NULL,
  "sealed_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (change_set_id, candidate_sha256) REFERENCES publication_approval(change_set_id, candidate_sha256),
  PRIMARY KEY (release_id),
  FOREIGN KEY (release_id) REFERENCES release(id)
);
CREATE TRIGGER "page_release_seal_insert_guard" BEFORE INSERT ON "page_release_seal" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "page_release_seal_update_guard" BEFORE UPDATE ON "page_release_seal" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "page_release_seal_delete_guard" BEFORE DELETE ON "page_release_seal" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "page_write_receipt" (
  "request_id" TEXT NOT NULL,
  "operation" TEXT NOT NULL,
  "input_sha256" TEXT NOT NULL,
  "result" TEXT NOT NULL CHECK ("result" IS NULL OR json_valid("result")),
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CHECK ((operation IN ('draft', 'channel', 'node-draft'))),
  PRIMARY KEY (request_id)
);
CREATE TRIGGER "page_write_receipt_update_guard" BEFORE UPDATE ON "page_write_receipt" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "page_write_receipt_delete_guard" BEFORE DELETE ON "page_write_receipt" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "publication_approval" (
  "change_set_id" TEXT NOT NULL,
  "candidate_sha256" TEXT NOT NULL,
  "approved_by" TEXT NOT NULL,
  "approved_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (change_set_id, candidate_sha256) REFERENCES change_set(id, candidate_sha256),
  PRIMARY KEY (change_set_id, candidate_sha256)
);
CREATE TRIGGER "publication_approval_insert_guard" BEFORE INSERT ON "publication_approval" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "publication_approval_update_guard" BEFORE UPDATE ON "publication_approval" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "publication_approval_delete_guard" BEFORE DELETE ON "publication_approval" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "reference_revision" (
  "reference_id" TEXT NOT NULL,
  "content_sha256" TEXT NOT NULL,
  "metadata" TEXT NOT NULL CHECK ("metadata" IS NULL OR json_valid("metadata")),
  "origin_commit" TEXT,
  "version_id" INTEGER NOT NULL,
  CHECK (((length(content_sha256)=64 AND content_sha256 NOT GLOB '*[^0-9a-f]*'))),
  CHECK ((json_type(metadata) = 'object')),
  CHECK (((length(origin_commit)=40 AND origin_commit NOT GLOB '*[^0-9a-f]*'))),
  PRIMARY KEY (reference_id, content_sha256),
  UNIQUE (version_id)
);
CREATE TRIGGER "reference_revision_update_guard" BEFORE UPDATE ON "reference_revision" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "reference_revision_delete_guard" BEFORE DELETE ON "reference_revision" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "release" (
  "id" TEXT NOT NULL,
  "manifest_sha256" TEXT NOT NULL,
  "origin_commit" TEXT,
  "manifest" TEXT NOT NULL CHECK ("manifest" IS NULL OR json_valid("manifest")),
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (manifest_sha256),
  PRIMARY KEY (id)
);
CREATE TRIGGER "release_insert_guard" BEFORE INSERT ON "release" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_update_guard" BEFORE UPDATE ON "release" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_delete_guard" BEFORE DELETE ON "release" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "release_item" (
  "release_id" TEXT NOT NULL,
  "node_id" TEXT NOT NULL,
  "revision_id" TEXT NOT NULL,
  FOREIGN KEY (node_id, revision_id) REFERENCES node_revision(node_id, id),
  PRIMARY KEY (release_id, node_id),
  FOREIGN KEY (release_id) REFERENCES release(id)
);
CREATE TRIGGER "release_item_insert_guard" BEFORE INSERT ON "release_item" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_item_update_guard" BEFORE UPDATE ON "release_item" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_item_delete_guard" BEFORE DELETE ON "release_item" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "release_page" (
  "release_id" TEXT NOT NULL,
  "page_entity_id" TEXT NOT NULL,
  "page_kind" TEXT NOT NULL DEFAULT 'page',
  "page_version_id" TEXT NOT NULL,
  FOREIGN KEY (page_entity_id, page_kind) REFERENCES dependency_entity(id, kind),
  FOREIGN KEY (page_entity_id, page_version_id) REFERENCES dependency_version(entity_id, id),
  PRIMARY KEY (release_id, page_entity_id),
  FOREIGN KEY (release_id) REFERENCES release(id)
);
CREATE TRIGGER "release_page_insert_guard" BEFORE INSERT ON "release_page" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_page_update_guard" BEFORE UPDATE ON "release_page" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_page_delete_guard" BEFORE DELETE ON "release_page" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "release_reference" (
  "release_id" TEXT NOT NULL,
  "reference_id" TEXT NOT NULL,
  "reference_sha256" TEXT NOT NULL,
  PRIMARY KEY (release_id, reference_id),
  FOREIGN KEY (reference_id, reference_sha256) REFERENCES reference_revision(reference_id, content_sha256),
  FOREIGN KEY (release_id) REFERENCES release(id)
);
CREATE TRIGGER "release_reference_insert_guard" BEFORE INSERT ON "release_reference" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_reference_update_guard" BEFORE UPDATE ON "release_reference" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "release_reference_delete_guard" BEFORE DELETE ON "release_reference" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "revision_dependency" (
  "revision_id" TEXT NOT NULL,
  "reference_version_id" INTEGER NOT NULL,
  FOREIGN KEY (reference_version_id) REFERENCES reference_revision(version_id),
  FOREIGN KEY (revision_id) REFERENCES node_revision(id),
  PRIMARY KEY (revision_id, reference_version_id)
);
CREATE TRIGGER "revision_dependency_update_guard" BEFORE UPDATE ON "revision_dependency" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "revision_dependency_delete_guard" BEFORE DELETE ON "revision_dependency" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "schema_migration" (
  "version" TEXT NOT NULL,
  "sha256" TEXT NOT NULL,
  "applied_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (version),
  CHECK (((length(sha256)=64 AND sha256 NOT GLOB '*[^0-9a-f]*')))
);
CREATE TRIGGER "schema_migration_update_guard" BEFORE UPDATE ON "schema_migration" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;
CREATE TRIGGER "schema_migration_delete_guard" BEFORE DELETE ON "schema_migration" BEGIN SELECT RAISE(ABORT, 'immutable historical row'); END;

CREATE TABLE "source_checklist" (
  "release_id" TEXT NOT NULL,
  "source_dataset_id" TEXT NOT NULL,
  "metadata" TEXT NOT NULL CHECK ("metadata" IS NULL OR json_valid("metadata")),
  PRIMARY KEY (release_id, source_dataset_id),
  FOREIGN KEY (release_id) REFERENCES source_release(id)
);
CREATE TRIGGER "source_checklist_insert_guard" BEFORE INSERT ON "source_checklist" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "source_checklist_update_guard" BEFORE UPDATE ON "source_checklist" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "source_checklist_delete_guard" BEFORE DELETE ON "source_checklist" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "source_release" (
  "id" TEXT NOT NULL,
  "authority" TEXT NOT NULL,
  "release_key" TEXT NOT NULL,
  "metadata" TEXT NOT NULL CHECK ("metadata" IS NULL OR json_valid("metadata")),
  UNIQUE (authority, release_key),
  PRIMARY KEY (id)
);
CREATE TRIGGER "source_release_insert_guard" BEFORE INSERT ON "source_release" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "source_release_update_guard" BEFORE UPDATE ON "source_release" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "source_release_delete_guard" BEFORE DELETE ON "source_release" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "source_snapshot" (
  "sha256" TEXT NOT NULL,
  "bytes" INTEGER NOT NULL,
  "media_type" TEXT NOT NULL,
  "storage_locator" TEXT NOT NULL,
  "access" TEXT NOT NULL,
  "provenance" TEXT NOT NULL CHECK ("provenance" IS NULL OR json_valid("provenance")),
  PRIMARY KEY (sha256)
);
CREATE TRIGGER "source_snapshot_insert_guard" BEFORE INSERT ON "source_snapshot" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "source_snapshot_update_guard" BEFORE UPDATE ON "source_snapshot" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "source_snapshot_delete_guard" BEFORE DELETE ON "source_snapshot" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "taxon_usage" (
  "release_id" TEXT NOT NULL,
  "usage_id" TEXT NOT NULL,
  "scientific_name" TEXT NOT NULL,
  "authorship" TEXT,
  "rank" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "parent_id" TEXT,
  "accepted_id" TEXT,
  "source_dataset_id" TEXT,
  "in_hierarchy" INTEGER NOT NULL DEFAULT 0 CHECK ("in_hierarchy" IN (0,1)),
  PRIMARY KEY (release_id, usage_id),
  FOREIGN KEY (release_id, accepted_id) REFERENCES taxon_usage(release_id, usage_id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (release_id) REFERENCES source_release(id),
  FOREIGN KEY (release_id, parent_id) REFERENCES taxon_usage(release_id, usage_id) DEFERRABLE INITIALLY DEFERRED,
  FOREIGN KEY (release_id, source_dataset_id) REFERENCES source_checklist(release_id, source_dataset_id)
);
CREATE TRIGGER "taxon_usage_insert_guard" BEFORE INSERT ON "taxon_usage" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "taxon_usage_update_guard" BEFORE UPDATE ON "taxon_usage" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "taxon_usage_delete_guard" BEFORE DELETE ON "taxon_usage" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE TABLE "validation_run" (
  "id" TEXT NOT NULL,
  "change_set_id" TEXT NOT NULL,
  "candidate_sha256" TEXT NOT NULL,
  "validator_version" TEXT NOT NULL,
  "passed" INTEGER NOT NULL CHECK ("passed" IN (0,1)),
  "receipt" TEXT NOT NULL CHECK ("receipt" IS NULL OR json_valid("receipt")),
  "created_at" TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (change_set_id, candidate_sha256) REFERENCES change_set(id, candidate_sha256),
  PRIMARY KEY (id)
);
CREATE TRIGGER "validation_run_insert_guard" BEFORE INSERT ON "validation_run" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "validation_run_update_guard" BEFORE UPDATE ON "validation_run" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;
CREATE TRIGGER "validation_run_delete_guard" BEFORE DELETE ON "validation_run" BEGIN SELECT RAISE(ABORT, 'publication and non-authoring writes are disabled locally'); END;

CREATE INDEX turso_node_revision_node ON node_revision(node_id);
CREATE INDEX turso_revision_object ON node_revision(payload_artifact_sha256);
CREATE INDEX turso_dependent_revisions ON revision_dependency(reference_version_id,revision_id);
CREATE INDEX turso_baseline_nodes ON import_node_key(node_id);
CREATE TRIGGER native_dependency_guard BEFORE INSERT ON revision_dependency WHEN NOT EXISTS(SELECT 1 FROM revision_dependency WHERE revision_id=NEW.revision_id AND reference_version_id=NEW.reference_version_id) AND EXISTS(SELECT 1 FROM dependency_version v JOIN dependency_seal s ON s.version_id=v.id WHERE v.node_revision_id=NEW.revision_id) BEGIN SELECT RAISE(ABORT,'Native revision dependency set is sealed'); END;
CREATE TABLE turso_local_migration (id TEXT PRIMARY KEY NOT NULL, schema_sha256 TEXT NOT NULL, source_fingerprint TEXT NOT NULL, receipt TEXT NOT NULL CHECK(json_valid(receipt)), completed_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP);
CREATE TRIGGER turso_migration_update_guard BEFORE UPDATE ON turso_local_migration BEGIN SELECT RAISE(ABORT,'immutable migration receipt'); END;
CREATE TRIGGER turso_migration_delete_guard BEFORE DELETE ON turso_local_migration BEGIN SELECT RAISE(ABORT,'immutable migration receipt'); END;
