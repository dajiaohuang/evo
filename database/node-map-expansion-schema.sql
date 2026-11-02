-- Candidate-only additive evidence tables; does not migrate the authoring database.
CREATE TABLE map_occurrence_evidence_detail (
  dataset_release_id TEXT NOT NULL,
  occurrence_id TEXT NOT NULL,
  identified_name TEXT,
  taxon_name TEXT,
  reference_id TEXT,
  reference_author TEXT,
  reference_year INTEGER,
  collection_id TEXT,
  source_fields_json TEXT NOT NULL,
  PRIMARY KEY(dataset_release_id, occurrence_id),
  FOREIGN KEY(dataset_release_id, occurrence_id) REFERENCES map_occurrence(dataset_release_id, occurrence_id)
);
CREATE TABLE map_occurrence_source_membership (
  dataset_release_id TEXT NOT NULL,
  occurrence_id TEXT NOT NULL,
  source_id TEXT NOT NULL REFERENCES map_evidence_source(id),
  PRIMARY KEY(dataset_release_id, occurrence_id, source_id),
  FOREIGN KEY(dataset_release_id, occurrence_id) REFERENCES map_occurrence(dataset_release_id, occurrence_id)
);
