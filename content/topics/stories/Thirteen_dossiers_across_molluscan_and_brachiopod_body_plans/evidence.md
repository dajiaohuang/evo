---
schemaVersion: 1
kind: evidence
records:
  story:
    title:
      markdown: page.en.md
      field: /records/story/title
      format: heading
    titleZh:
      markdown: page.zh.md
      field: /records/story/titleZh
      format: heading
    dek:
      markdown: page.en.md
      field: /records/story/dek
    theme: ocean
    durationMinutes: 21
    featured: true
    steps:
      - id: kimberella-body-plan
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 556.5
        timeRange:
          - 558
          - 555
        taxonPaths:
          - content/topics/atlas/Molluscan_origin_dossier_route
          - content/topics/atlas/Molluscan_origin_dossier_route/Kimberella_quadrata/research/Kimberella_quadrata
        view: evidence
        eventPath: content/events/Kimberella_White_Sea_body-plan_sample
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Kimberella_White_Sea_body-plan_sample/evidence.md#/records/claims/0
            relation: supports
      - id: odontogriphus-radula
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 506.5
        timeRange:
          - 508
          - 505
        taxonPaths:
          - content/topics/atlas/Molluscan_origin_dossier_route
          - content/taxa/Eukaryota/Animalia/Mollusca/Odontogriphus/Odontogriphus_omalus/research/Odontogriphus_omalus
        view: evidence
        eventPath: content/events/Odontogriphus_serial_tooth-row_sample
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Odontogriphus_serial_tooth-row_sample/evidence.md#/records/claims/0
            relation: supports
      - id: orthrozanclus-mosaic
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 506.5
        timeRange:
          - 508
          - 505
        taxonPaths:
          - content/topics/atlas/Molluscan_origin_dossier_route
          - content/taxa/Eukaryota/Animalia/Mollusca/Aculifera/Sachitida/Orthrozanclidae/Orthrozanclus/Orthrozanclus_reburrus
        view: tree
        eventPath: content/events/Orthrozanclus_shell-and-sclerite_mosaic
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/events/Orthrozanclus_shell-and-sclerite_mosaic/evidence.md#/records/claims/0
            relation: supports
      - id: pojetaia-shell
        title:
          markdown: page.en.md
          field: /records/story/steps/3/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/3/text
        age: 517
        timeRange:
          - 521
          - 513
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia
          - content/taxa/Eukaryota/Animalia/Mollusca/Bivalvia/Fordillida/Fordilloidea/Fordillidae/Pojetaia/Pojetaia_runnegari/research/Pojetaia_runnegari
        view: evidence
        eventPath: content/events/Pojetaia_shell-microstructure_sections
        annotation:
          markdown: evidence.md
          field: /records/story/steps/3/annotation
        claimLinks:
          - claimPath: content/events/Pojetaia_shell-microstructure_sections/evidence.md#/records/claims/0
            relation: supports
      - id: nectocaris-test
        title:
          markdown: page.en.md
          field: /records/story/steps/4/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/4/text
        age: 506.5
        timeRange:
          - 508
          - 505
        taxonPaths:
          - content/topics/atlas/Molluscan_origin_dossier_route
          - content/topics/atlas/Molluscan_origin_dossier_route/Nectocaris_pteryx/research/Nectocaris_pteryx
          - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda
        view: tree
        eventPath: content/events/Nectocaris_soft-body_cephalopod_test
        annotation:
          markdown: evidence.md
          field: /records/story/steps/4/annotation
        claimLinks:
          - claimPath: content/events/Nectocaris_soft-body_cephalopod_test/evidence.md#/records/claims/0
            relation: supports
      - id: aculifera-matrix
        title:
          markdown: page.en.md
          field: /records/story/steps/5/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/5/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Mollusca
          - content/topics/atlas/Aculifera
          - content/topics/atlas/Aculifera/Polyplacophora
          - content/topics/atlas/Aculifera/Aplacophora
        view: tree
        eventPath: content/events/Aculifera_phylogenomic_topology
        annotation:
          markdown: evidence.md
          field: /records/story/steps/5/annotation
        claimLinks:
          - claimPath: content/events/Aculifera_phylogenomic_topology/evidence.md#/records/claims/0
            relation: supports
      - id: all-class-matrix
        title:
          markdown: page.en.md
          field: /records/story/steps/6/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/6/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Mollusca
          - content/taxa/Eukaryota/Animalia/Mollusca/Monoplacophora
          - content/taxa/Eukaryota/Animalia/Mollusca/Scaphopoda
          - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda
        view: tree
        eventPath: content/events/All-class_molluscan_phylogenomic_sample
        annotation:
          markdown: evidence.md
          field: /records/story/steps/6/annotation
        claimLinks:
          - claimPath: content/events/All-class_molluscan_phylogenomic_sample/evidence.md#/records/claims/0
            relation: supports
      - id: gastropod-nodal
        title:
          markdown: page.en.md
          field: /records/story/steps/7/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/7/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Mollusca/Gastropoda
        view: evidence
        eventPath: content/events/Gastropod_Nodal_chirality_experiment
        annotation:
          markdown: evidence.md
          field: /records/story/steps/7/annotation
        claimLinks:
          - claimPath: content/events/Gastropod_Nodal_chirality_experiment/evidence.md#/records/claims/0
            relation: supports
      - id: octopus-genome
        title:
          markdown: page.en.md
          field: /records/story/steps/8/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/8/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Mollusca/Cephalopoda/Coleoidea
          - content/topics/atlas/Octopus_bimaculoides
        view: evidence
        eventPath: content/events/Octopus_genome_innovation_test
        annotation:
          markdown: evidence.md
          field: /records/story/steps/8/annotation
        claimLinks:
          - claimPath: content/events/Octopus_genome_innovation_test/evidence.md#/records/claims/0
            relation: supports
      - id: micrina-reconstruction
        title:
          markdown: page.en.md
          field: /records/story/steps/9/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/9/text
        age: 525
        timeRange:
          - 530
          - 520
        taxonPaths:
          - content/topics/atlas/Brachiopod_origin_dossier_route
          - content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Micrina/research/Micrina
        view: evidence
        eventPath: content/events/Micrina_bivalved_reconstruction
        annotation:
          markdown: evidence.md
          field: /records/story/steps/9/annotation
        claimLinks:
          - claimPath: content/events/Micrina_bivalved_reconstruction/evidence.md#/records/claims/0
            relation: supports
      - id: kutorgina-soft-parts
        title:
          markdown: page.en.md
          field: /records/story/steps/10/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/10/text
        age: 519
        timeRange:
          - 520
          - 518
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Brachiopoda
          - content/taxa/Eukaryota/Animalia/Brachiopoda/Rhynchonelliformea/Kutorginata/Kutorginida/Kutorginoidea/Kutorginidae/Kutorgina/Kutorgina_chengjiangensis/research/Kutorgina_chengjiangensis
        view: evidence
        eventPath: content/events/Kutorgina_soft-tissue_anatomy
        annotation:
          markdown: evidence.md
          field: /records/story/steps/10/annotation
        claimLinks:
          - claimPath: content/events/Kutorgina_soft-tissue_anatomy/evidence.md#/records/claims/0
            relation: supports
      - id: lingula-multiomics
        title:
          markdown: page.en.md
          field: /records/story/steps/11/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/11/text
        age: 0
        timeRange:
          - 0
          - 0
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Brachiopoda
          - content/taxa/Eukaryota/Animalia/Brachiopoda/Linguliformea/Lingulata/Lingulida/Linguloidea/Lingulidae/Lingula/Lingula_anatina
        view: evidence
        eventPath: content/events/Lingula_genome_and_shell_proteome
        annotation:
          markdown: evidence.md
          field: /records/story/steps/11/annotation
        claimLinks:
          - claimPath: content/events/Lingula_genome_and_shell_proteome/evidence.md#/records/claims/0
            relation: supports
      - id: yuganotheca-mosaic
        title:
          markdown: page.en.md
          field: /records/story/steps/12/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/12/text
        age: 519
        timeRange:
          - 520
          - 518
        taxonPaths:
          - content/topics/atlas/Brachiopod_origin_dossier_route
          - content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
        view: tree
        eventPath: content/events/Yuganotheca_tubular_lophophorate_mosaic
        annotation:
          markdown: evidence.md
          field: /records/story/steps/12/annotation
        claimLinks:
          - claimPath: content/events/Yuganotheca_tubular_lophophorate_mosaic/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: available-with-limitations
---

# Thirteen dossiers across molluscan and brachiopod body plans

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
A named Ediacaran sample tests character homology without becoming a direct ancestor or global Mollusca first appearance.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
The geometry is observed; radular homology and stem-mollusc placement remain comparative conclusions.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
Halwaxiida is a scored topology, not an observed ancestor chain or secure crown assignment.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/3/annotation -->
Preservation and homology limit mineral interpretation; the sections do not establish every bivalve shell pathway.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/4/annotation -->
Missing shell, siphuncle, beak and radula evidence keeps the cephalopod placement explicitly contested.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/5/annotation -->
Monoplacophora was absent and some alternatives were not rejected, so the result remains matrix-specific.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/6/annotation -->
Conflicting deep nodes and corrected supplementary figures are retained rather than averaged into false certainty.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/7/annotation -->
This living experiment does not directly reconstruct fossil torsion or every gastropod coiling mechanism.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/8/annotation -->
Comparative association is not a single-gene cause of arms, suckers or neural complexity; whole-genome duplication was not supported.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/9/annotation -->
Articulation and valve homology are reconstructions, not a preserved whole organism or settled stem topology.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/10/annotation -->
Direct anatomy informs comparison but does not make Kutorgina the ancestor of living rhynchonelliformeans.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/11/annotation -->
Shared genes do not imply shell identity, vertebrate bone homology or morphological stasis through the fossil record.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/12/annotation -->
COL26.8 routes 159,801 accepted living names here; that naming coverage cannot resolve this fossil mosaic or turn thirteen dossiers into an ancestor series.
<!-- /evo:text -->
