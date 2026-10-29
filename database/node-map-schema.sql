-- Node-map v1: additive storage contract, not registered in the authoring migration runner.
-- Apply via a reviewed migration after the tree/export adapter is available.
-- Enable PRAGMA foreign_keys = ON on every connection before using these tables.

CREATE TABLE map_tree_release (
  id TEXT PRIMARY KEY NOT NULL,
  source_revision TEXT NOT NULL,
  source_sha256 TEXT NOT NULL CHECK(length(source_sha256) = 64)
);

CREATE TABLE map_node (
  tree_release_id TEXT NOT NULL REFERENCES map_tree_release(id),
  node_id TEXT NOT NULL,
  PRIMARY KEY(tree_release_id, node_id)
);

-- Only verified ancestry; depth zero is a required self row, validated at export.
CREATE TABLE map_node_ancestor (
  tree_release_id TEXT NOT NULL,
  ancestor_id TEXT NOT NULL,
  descendant_id TEXT NOT NULL,
  depth INTEGER NOT NULL CHECK(depth >= 0),
  PRIMARY KEY(tree_release_id, ancestor_id, descendant_id),
  FOREIGN KEY(tree_release_id, ancestor_id) REFERENCES map_node(tree_release_id, node_id),
  FOREIGN KEY(tree_release_id, descendant_id) REFERENCES map_node(tree_release_id, node_id),
  CHECK((depth = 0 AND ancestor_id = descendant_id) OR (depth > 0 AND ancestor_id <> descendant_id))
);

CREATE TABLE map_evidence_source (
  id TEXT PRIMARY KEY NOT NULL,
  locator TEXT NOT NULL,
  revision TEXT NOT NULL,
  sha256 TEXT NOT NULL CHECK(length(sha256) = 64)
);

CREATE TABLE map_dataset_release (
  id TEXT PRIMARY KEY NOT NULL,
  tree_release_id TEXT NOT NULL REFERENCES map_tree_release(id),
  coverage TEXT NOT NULL CHECK(coverage IN ('bounded-sample', 'complete-snapshot')),
  truncated INTEGER NOT NULL CHECK(truncated IN (0, 1)),
  source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  UNIQUE(id, tree_release_id)
);

CREATE TABLE map_occurrence (
  dataset_release_id TEXT NOT NULL,
  tree_release_id TEXT NOT NULL,
  occurrence_id TEXT NOT NULL,
  node_id TEXT NOT NULL,
  source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  mapping_source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  older_ma REAL,
  younger_ma REAL,
  modern_longitude REAL,
  modern_latitude REAL,
  coordinate_precision_km REAL CHECK(coordinate_precision_km >= 0),
  PRIMARY KEY(dataset_release_id, occurrence_id),
  FOREIGN KEY(dataset_release_id, tree_release_id) REFERENCES map_dataset_release(id, tree_release_id),
  FOREIGN KEY(tree_release_id, node_id) REFERENCES map_node(tree_release_id, node_id),
  CHECK((older_ma IS NULL AND younger_ma IS NULL) OR
    (older_ma IS NOT NULL AND younger_ma IS NOT NULL AND older_ma >= younger_ma AND younger_ma >= 0)),
  CHECK((modern_longitude IS NULL AND modern_latitude IS NULL) OR
    (modern_longitude IS NOT NULL AND modern_latitude IS NOT NULL
    AND modern_longitude BETWEEN -180 AND 180 AND modern_latitude BETWEEN -90 AND 90))
);
CREATE INDEX map_occurrence_node_time ON map_occurrence(dataset_release_id, node_id, older_ma, younger_ma);

CREATE TABLE map_reconstruction_model (
  revision TEXT PRIMARY KEY NOT NULL,
  source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  reference_frame TEXT NOT NULL,
  anchor_plate_id INTEGER NOT NULL CHECK(anchor_plate_id >= 0),
  older_ma REAL NOT NULL,
  younger_ma REAL NOT NULL,
  CHECK(older_ma >= younger_ma AND younger_ma >= 0),
  UNIQUE(revision, reference_frame, anchor_plate_id)
);

-- A frame is a model/age combination, not the age of a fossil or its midpoint.
CREATE TABLE map_reconstruction_frame (
  id TEXT PRIMARY KEY NOT NULL,
  model_revision TEXT NOT NULL,
  reference_frame TEXT NOT NULL,
  anchor_plate_id INTEGER NOT NULL,
  age_ma REAL NOT NULL CHECK(age_ma >= 0),
  geometry_source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  FOREIGN KEY(model_revision, reference_frame, anchor_plate_id)
    REFERENCES map_reconstruction_model(revision, reference_frame, anchor_plate_id),
  UNIQUE(model_revision, age_ma)
);
CREATE TRIGGER map_frame_age_guard BEFORE INSERT ON map_reconstruction_frame
WHEN NOT EXISTS (SELECT 1 FROM map_reconstruction_model WHERE revision = NEW.model_revision
  AND NEW.age_ma BETWEEN younger_ma AND older_ma)
BEGIN SELECT RAISE(ABORT, 'frame age outside model range'); END;
CREATE TRIGGER map_frame_age_update_guard BEFORE UPDATE ON map_reconstruction_frame
WHEN NOT EXISTS (SELECT 1 FROM map_reconstruction_model WHERE revision = NEW.model_revision
  AND NEW.age_ma BETWEEN younger_ma AND older_ma)
BEGIN SELECT RAISE(ABORT, 'frame age outside model range'); END;

CREATE TABLE map_occurrence_position (
  dataset_release_id TEXT NOT NULL,
  occurrence_id TEXT NOT NULL,
  frame_id TEXT NOT NULL REFERENCES map_reconstruction_frame(id),
  source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  status TEXT NOT NULL CHECK(status IN ('ready', 'missing-plate', 'outside-model', 'failed')),
  plate_id INTEGER CHECK(plate_id >= 0),
  longitude REAL,
  latitude REAL,
  reason TEXT,
  PRIMARY KEY(dataset_release_id, occurrence_id, frame_id),
  FOREIGN KEY(dataset_release_id, occurrence_id) REFERENCES map_occurrence(dataset_release_id, occurrence_id),
  CHECK((status = 'ready' AND longitude IS NOT NULL AND latitude IS NOT NULL
    AND longitude BETWEEN -180 AND 180 AND latitude BETWEEN -90 AND 90) OR
    (status <> 'ready' AND longitude IS NULL AND latitude IS NULL AND reason IS NOT NULL))
);
CREATE INDEX map_position_frame ON map_occurrence_position(frame_id, dataset_release_id);
