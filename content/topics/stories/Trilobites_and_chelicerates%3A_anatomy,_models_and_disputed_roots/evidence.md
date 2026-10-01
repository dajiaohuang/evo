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
    theme: amber
    durationMinutes: 14
    featured: true
    steps:
      - id: early-trilobite-phylogenetic-clock
        title:
          markdown: page.en.md
          field: /records/story/steps/0/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/0/text
        age: 519.75
        timeRange:
          - 521.5
          - 518
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita
        view: tree
        eventPath: content/events/Early_trilobite_topology_and_origin-time_model
        annotation:
          markdown: evidence.md
          field: /records/story/steps/0/annotation
        claimLinks:
          - claimPath: content/events/Early_trilobite_topology_and_origin-time_model/evidence.md#/records/claims/0
            relation: supports
      - id: tatelt-trilobite-3d-anatomy
        title:
          markdown: page.en.md
          field: /records/story/steps/1/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/1/text
        age: 514.5
        timeRange:
          - 515
          - 514
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Ellipsocephalidae/Protolenus
          - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Palaeolenidae/Gigoutella
        view: evidence
        eventPath: content/events/Tatelt_trilobites_preserved_in_three_dimensions
        annotation:
          markdown: evidence.md
          field: /records/story/steps/1/annotation
        claimLinks:
          - claimPath: content/events/Tatelt_trilobites_preserved_in_three_dimensions/evidence.md#/records/claims/0
            relation: supports
      - id: trilobite-upper-limb-gill
        title:
          markdown: page.en.md
          field: /records/story/steps/2/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/2/text
        age: 476
        timeRange:
          - 509
          - 443
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Ptychopariida/Olenidae/Triarthrus
          - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Corynexochida/Dorypygidae/Olenoides/research/Olenoides_serratus
        view: diversity
        eventPath: content/events/Trilobite_upper_limb_branch_and_gill_function
        annotation:
          markdown: evidence.md
          field: /records/story/steps/2/annotation
        claimLinks:
          - claimPath: content/events/Trilobite_upper_limb_branch_and_gill_function/evidence.md#/records/claims/0
            relation: supports
      - id: bohemolichas-gut-contents
        title:
          markdown: page.en.md
          field: /records/story/steps/3/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/3/text
        age: 464.5
        timeRange:
          - 466
          - 463
        taxonPaths:
          - content/topics/atlas/Trilobite_primary-evidence_samples/Bohemolichas/research/Bohemolichas_incola
        view: evidence
        eventPath: content/events/Bohemolichas_gut_contents_and_digestive_inference
        annotation:
          markdown: evidence.md
          field: /records/story/steps/3/annotation
        claimLinks:
          - claimPath: content/events/Bohemolichas_gut_contents_and_digestive_inference/evidence.md#/records/claims/0
            relation: supports
      - id: burgess-agnostid-topology
        title:
          markdown: page.en.md
          field: /records/story/steps/4/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/4/text
        age: 507.5
        timeRange:
          - 509
          - 506
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Trilobita/Agnostida/Agnostina
        view: tree
        eventPath: content/events/Burgess_Shale_agnostid_anatomy_and_affinity
        annotation:
          markdown: evidence.md
          field: /records/story/steps/4/annotation
        claimLinks:
          - claimPath: content/events/Burgess_Shale_agnostid_anatomy_and_affinity/evidence.md#/records/claims/0
            relation: supports
      - id: urokodia-chelicera-book-gill
        title:
          markdown: page.en.md
          field: /records/story/steps/5/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/5/text
        age: 518.5
        timeRange:
          - 519
          - 518
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Urokodia/research/Urokodia_aequalis
        view: evidence
        eventPath: content/events/Urokodia_appendages_and_upper_stem-chelicerate_placement
        annotation:
          markdown: evidence.md
          field: /records/story/steps/5/annotation
        claimLinks:
          - claimPath: content/events/Urokodia_appendages_and_upper_stem-chelicerate_placement/evidence.md#/records/claims/0
            relation: supports
      - id: megachelicerax-chelicerae
        title:
          markdown: page.en.md
          field: /records/story/steps/6/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/6/text
        age: 502.5
        timeRange:
          - 504.5
          - 500.5
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Megachelicerax/research/Megachelicerax_cousteaui
        view: tree
        eventPath: content/events/Megachelicerax_chelicerae_and_stem_placement
        annotation:
          markdown: evidence.md
          field: /records/story/steps/6/annotation
        claimLinks:
          - claimPath: content/events/Megachelicerax_chelicerae_and_stem_placement/evidence.md#/records/claims/0
            relation: supports
      - id: mollisonia-neuroanatomy-mosaic
        title:
          markdown: page.en.md
          field: /records/story/steps/7/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/7/text
        age: 506.55
        timeRange:
          - 508.1
          - 505
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Mollisoniida/Mollisoniidae/Mollisonia/research/Mollisonia_symmetrica
        view: evidence
        eventPath: content/events/Mollisonia_neuroanatomy_and_mosaic_stem_signal
        annotation:
          markdown: evidence.md
          field: /records/story/steps/7/annotation
        claimLinks:
          - claimPath: content/events/Mollisonia_neuroanatomy_and_mosaic_stem_signal/evidence.md#/records/claims/0
            relation: supports
      - id: jaekelopterus-giant-chelicera
        title:
          markdown: page.en.md
          field: /records/story/steps/8/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/8/text
        age: 409
        timeRange:
          - 411
          - 407
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/Eurypterina/Diploperculata/Pterygotoidea/Pterygotidae/Jaekelopterus
        view: diversity
        eventPath: content/events/Jaekelopterus_giant_chelicera_and_body-size_estimate
        annotation:
          markdown: evidence.md
          field: /records/story/steps/8/annotation
        claimLinks:
          - claimPath: content/events/Jaekelopterus_giant_chelicera_and_body-size_estimate/evidence.md#/records/claims/0
            relation: supports
      - id: xiphosura-total-group-topology
        title:
          markdown: page.en.md
          field: /records/story/steps/9/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/9/text
        age: 240
        timeRange:
          - 480
          - 0
        taxonPaths:
          - content/topics/atlas/Xiphosura
        view: tree
        eventPath: content/events/Xiphosuran_total-group_morphology_matrix
        annotation:
          markdown: evidence.md
          field: /records/story/steps/9/annotation
        claimLinks:
          - claimPath: content/events/Xiphosuran_total-group_morphology_matrix/evidence.md#/records/claims/0
            relation: supports
      - id: parioscorpio-terrestrialization
        title:
          markdown: page.en.md
          field: /records/story/steps/10/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/10/text
        age: 437
        timeRange:
          - 437.5
          - 436.5
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Parioscorpio
        view: evidence
        eventPath: content/events/Parioscorpio_anatomy_and_the_reassessed_scorpion_hypothesis
        annotation:
          markdown: evidence.md
          field: /records/story/steps/10/annotation
        claimLinks:
          - claimPath: content/events/Parioscorpio_anatomy_and_the_reassessed_scorpion_hypothesis/evidence.md#/records/claims/0
            relation: supports
      - id: arachnid-monophyly-conflict
        title:
          markdown: page.en.md
          field: /records/story/steps/11/title
          format: heading
        text:
          markdown: page.en.md
          field: /records/story/steps/11/text
        age: 464.5
        timeRange:
          - 485
          - 444
        taxonPaths:
          - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida
          - content/topics/atlas/Xiphosura
          - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Pycnogonida
        view: tree
        eventPath: content/events/Competing_phylogenomic_models_of_Arachnida
        annotation:
          markdown: evidence.md
          field: /records/story/steps/11/annotation
        claimLinks:
          - claimPath: content/events/Competing_phylogenomic_models_of_Arachnida/evidence.md#/records/claims/0
            relation: supports
    evidenceStatus: available-with-limitations
---

# Trilobites and chelicerates: anatomy, models and disputed roots

## story / steps / annotation

<!-- evo:text /records/story/steps/0/annotation -->
Tree shape, clock priors, character coding and survivorship bias condition the result; a modelled origin is not a fossil occurrence or a direct ancestor.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/1/annotation -->
The inferred feeding apparatus and homologies compare a rare local preservational window; they do not establish behaviour, ancestry or anatomy for every trilobite.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/2/annotation -->
Gill function, haemolymph flow and limb-branch homology are functional interpretations from morphology across two taxa and times, not measured gas exchange.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/3/annotation -->
Rapid indiscriminate feeding and a neutral-to-alkaline gut are inferences from one biased shelly meal; soft food and population variation are not preserved.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/4/annotation -->
The recovered sister relationship to polymeroid trilobites depends on sampled characters and taxa; crustacean-like limbs and life habit remain homoplastic or ecological interpretations.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/5/annotation -->
Appendage homology and earliest-branching upper stem placement come from reconstruction and phylogenetic scoring and can change with competing character interpretations.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/6/annotation -->
Predatory ecology and a bridge between habeliids and synziphosurines are functional and topology results from one specimen and a scored matrix.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/7/annotation -->
Incomplete anterior preservation and conflict between nervous-system and appendage characters permit competing placements and mosaic-evolution scenarios.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/8/annotation -->
The approximately 2.5-metre body length assumes comparable chelicera-to-body proportions and limited positive allometry; it is not a complete skeleton measurement.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/9/annotation -->
Polyphyly of traditional synziphosurines and internal Xiphosura relationships are topology results sensitive to coding, missing anatomy and taxon sampling.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/10/annotation -->
Book-lung homology and terrestrial physiology are interpretations; nearshore strata, transport and incomplete respiratory structures do not prove habitat.
<!-- /evo:text -->

## story / steps / annotation

<!-- evo:text /records/story/steps/11/annotation -->
Gene choice, compositional heterogeneity, taxon sampling, morphology and model fit change the root; terrestrialization count and timing therefore remain topology-dependent. COL26.8 routes 104,126 strictly accepted species names through exact Chelicerata and Trilobita roots; that is nomenclatural coverage, not 104,126 mature dossiers or agreement among fossil, morphology and genomic models.
<!-- /evo:text -->
