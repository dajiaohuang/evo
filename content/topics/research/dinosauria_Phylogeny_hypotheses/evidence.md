---
schemaVersion: 1
kind: evidence
records:
  Phylogeny_hypotheses:
    schemaVersion: 1
    packageId: dinosauria
    limitations:
      - markdown: evidence.md
        field: /records/Phylogeny_hypotheses/limitations/0
      - markdown: evidence.md
        field: /records/Phylogeny_hypotheses/limitations/1
      - markdown: evidence.md
        field: /records/Phylogeny_hypotheses/limitations/2
    hypotheses:
      - schemaVersion: 1
        id: phylogeny:dinosauria-ornithoscelida-baron-2017
        label: Baron et al. (2017) Ornithoscelida root hypothesis
        scopePath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
        referenceIds:
          - baron-2017-dinosaur-relationships
        claimPaths:
          - content/events/Competing_early-dinosaur_morphology_matrices/evidence.md#/records/claims/0
        note:
          markdown: evidence.md
          field: /records/Phylogeny_hypotheses/hypotheses/0/note
        root:
          id: dinosauria
          name: Dinosauria
          extinct: false
          children:
            - id: saurischia-baron-2017
              name: Saurischia sensu Baron et al. 2017
              firstAppearance: 233.2
              lastAppearance: 66
              extinct: true
              children:
                - id: sauropodomorpha
                  name: Sauropodomorpha
                  extinct: true
                  children: []
                - id: herrerasauridae-baron-2017
                  name: Herrerasauridae (matrix terminal)
                  firstAppearance: 233.2
                  lastAppearance: 228
                  extinct: true
                  children: []
            - id: ornithoscelida-baron-2017
              name: Ornithoscelida
              firstAppearance: 233.2
              lastAppearance: 0
              extinct: false
              children:
                - id: ornithischia
                  name: Ornithischia
                  extinct: true
                  children: []
                - id: theropoda
                  name: Theropoda
                  extinct: false
                  children: []
      - schemaVersion: 1
        id: phylogeny:dinosauria-saurischia-langer-2017
        label: Langer et al. (2017) classical Saurischia reanalysis
        scopePath: content/topics/atlas/Gnathostomata/Osteichthyes/Sarcopterygii/Tetrapodomorpha/Tetrapoda/Amniota/Sauropsida/Archosauria/Dinosauria
        referenceIds:
          - langer-2017-dinosaur-tree-reanalysis
        claimPaths:
          - content/events/Competing_early-dinosaur_morphology_matrices/evidence.md#/records/claims/0
        note:
          markdown: evidence.md
          field: /records/Phylogeny_hypotheses/hypotheses/1/note
        root:
          id: dinosauria
          name: Dinosauria
          extinct: false
          children:
            - id: ornithischia
              name: Ornithischia
              extinct: true
              children: []
            - id: saurischia
              name: Saurischia
              extinct: false
              children:
                - id: sauropodomorpha
                  name: Sauropodomorpha
                  extinct: true
                  children: []
                - id: theropoda
                  name: Theropoda
                  extinct: false
                  children: []
---

# dinosauria_Phylogeny_hypotheses

## Phylogeny_hypotheses / limitations

<!-- evo:text /records/Phylogeny_hypotheses/limitations/0 -->
These two trees reproduce the scoped root arrangements recovered by the cited morphology-matrix analyses; neither is the global navigation hierarchy or a claim of direct ancestry.
<!-- /evo:text -->

## Phylogeny_hypotheses / limitations

<!-- evo:text /records/Phylogeny_hypotheses/limitations/1 -->
Character rescoring, outgroup choice and taxon sampling alter the root, so branch lengths and displayed temporal ranges must not be interpreted as support values or divergence times.
<!-- /evo:text -->

## Phylogeny_hypotheses / limitations

<!-- evo:text /records/Phylogeny_hypotheses/limitations/2 -->
The trees stop at the three sampled major lineages and do not duplicate Avialae or crown-bird content owned by crocodylomorphs-birds.
<!-- /evo:text -->

## Phylogeny_hypotheses / hypotheses / note

<!-- evo:text /records/Phylogeny_hypotheses/hypotheses/0/note -->
A compact projection of the 74-taxon, 457-character matrix result. It records Theropoda plus Ornithischia as Ornithoscelida and does not reproduce every sampled terminal or character.
<!-- /evo:text -->

## Phylogeny_hypotheses / hypotheses / note

<!-- evo:text /records/Phylogeny_hypotheses/hypotheses/1/note -->
A compact projection of the rescored and taxon-expanded analysis that recovered Ornithischia opposite a monophyletic Saurischia. It is an alternative matrix result, not the atlas default tree.
<!-- /evo:text -->
