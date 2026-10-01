---
schemaVersion: 1
kind: evidence
records:
  calibrations:
    schemaVersion: 2
    cladePackageId: clade:perissodactyla-2026-08
    topologyHypothesisId: phylogeny:perissodactyla-curated-2026-08
    scope:
      markdown: evidence.md
      field: /records/calibrations/scope
    model: Multiple-study evidence ledger; estimates are not merged into one synthetic clock
    estimates:
      - id: tapiroidea-rhinocerotoidea
        nodePath: content/topics/atlas/Ceratomorpha
        mappingStatus: mapped
        displayOnTree: true
        cladePackageId: clade:perissodactyla-2026-08
        topologyHypothesisId: phylogeny:perissodactyla-curated-2026-08
        compatibilityGroup: bai-2020-tip-dating
        nodeLabel: Tapiroidea ↔ Rhinocerotoidea
        medianMa: 54.6
        youngerMa: null
        olderMa: null
        method: Bayesian tip-dating
        referenceId: bai-2020-rhinocerotoidea
        locator:
          figure: Bayesian tip-dating tree in the article supplementary information
        note:
          markdown: evidence.md
          field: /records/calibrations/estimates/0/note
      - id: eggysodontidae-paraceratheriidae-rhinocerotidae
        nodeId: null
        mappingStatus: unmapped
        displayOnTree: false
        cladePackageId: clade:perissodactyla-2026-08
        topologyHypothesisId: phylogeny:perissodactyla-curated-2026-08
        compatibilityGroup: bai-2020-tip-dating
        nodeLabel: Eggysodontidae / Paraceratheriidae / Rhinocerotidae
        medianMa: 43.9
        youngerMa: 41.1
        olderMa: 47
        method: Bayesian tip-dating · 95% HPD
        referenceId: bai-2020-rhinocerotoidea
        locator:
          figure: Bayesian tip-dating tree in the article supplementary information
        note:
          markdown: evidence.md
          field: /records/calibrations/estimates/1/note
      - id: african-eurasian-rhinocerotina
        nodeId: null
        mappingStatus: unmapped
        displayOnTree: false
        cladePackageId: clade:perissodactyla-2026-08
        topologyHypothesisId: phylogeny:perissodactyla-curated-2026-08
        compatibilityGroup: liu-2021-genome-tree
        nodeLabel: African ↔ Eurasian living rhinoceros lineages
        medianMa: 16
        youngerMa: null
        olderMa: null
        method: Genome-scale species tree with fossil time context
        referenceId: liu-2021-rhinoceros-genomes
        locator:
          figure: Genome-scale rhinoceros family tree
        note:
          markdown: evidence.md
          field: /records/calibrations/estimates/2/note
---

# perissodactyla_Divergence_calibrations

## calibrations / scope

<!-- evo:text /records/calibrations/scope -->
Selected published calibrations within Perissodactyla
<!-- /evo:text -->

## calibrations / estimates / note

<!-- evo:text /records/calibrations/estimates/0/note -->
Study-specific estimate for the split between tapiroid and rhinocerotoid lines.
<!-- /evo:text -->

## calibrations / estimates / note

<!-- evo:text /records/calibrations/estimates/1/note -->
A published internal rhinocerotoid calibration with its reported uncertainty. The current topology lacks the exact three-lineage node, so this estimate is not displayed on the tree.
<!-- /evo:text -->

## calibrations / estimates / note

<!-- evo:text /records/calibrations/estimates/2/note -->
Approximate early Miocene split reported by the genomic study. The current topology lacks the crown African–Eurasian lineage node, so this estimate is not displayed on the tree.
<!-- /evo:text -->
