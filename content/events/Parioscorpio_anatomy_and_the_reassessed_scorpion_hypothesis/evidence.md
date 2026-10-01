---
schemaVersion: 1
kind: evidence
records:
  event:
    title:
      markdown: page.en.md
      field: /records/event/title
      format: heading
    titleZh:
      markdown: page.zh.md
      field: /records/event/titleZh
      format: heading
    category: transition
    startAge: 437.5
    endAge: 436.5
    regions:
      - Brandon Bridge Formation, Waukesha, Wisconsin, USA
    clades:
      - Parioscorpio venator
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/Parioscorpio_anatomy_and_the_reassessed_scorpion_hypothesis/evidence.md#/records/claims/0
    evidenceItems:
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/0/claimIds/0
        referenceLinks:
          - referenceId: wendruff-2020-parioscorpio
            relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/relation
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/quoteLocator
    uncertaintyItems:
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/0/claimIds/0
        referenceLinks:
          - referenceId: anderson-2021-parioscorpio-reassessment
            relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            quoteLocator:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator
  claims:
    - subject:
        kind: event
        path: content/events/Parioscorpio_anatomy_and_the_reassessed_scorpion_hypothesis
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: wendruff-2020-parioscorpio
          relation: supports
          pages: "14"
          figure: Figures 1–4; Supplementary Figures
          quoteLocator: UWGM 2162 and 2163; Internal anatomy; Depositional and terrestrialization discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
---

# Parioscorpio anatomy and the reassessed scorpion hypothesis

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Wendruff et al. (2020) interpreted holotype UWGM 2162 and paratype UWGM 2163 as scorpions and compared their medial structures with pulmonary-cardiovascular anatomy; this records the original interpretation, not an established identification.
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:parioscorpio-terrestrialization
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
14
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/figure -->
Figures 1–4; Supplementary Figures
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/quoteLocator -->
UWGM 2162 and 2163; Internal anatomy; Depositional and terrestrialization discussion
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Anderson et al. (2021) rejected the scorpion interpretation and left exact arthropod affinities unresolved. These specimens therefore do not establish scorpion terrestrial physiology or habitat.
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:parioscorpio-terrestrialization
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/quoteLocator -->
Redescription and phylogenetic conclusions
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Wendruff et al. (2020) interpreted Parioscorpio venator specimens UWGM 2162 and UWGM 2163 as scorpions and compared medial structures with a pulmonary-cardiovascular system. This claim records that study's terrestrialization hypothesis, not established scorpion anatomy, physiology or habitat.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The original study's interpretation is documented, but subsequent redescription rejected scorpion identification. Preserved structures do not establish the proposed pulmonary-cardiovascular homologies or terrestrial habitat.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Wendruff et al. 2020 original interpretation; Anderson et al. 2021 redescription and author data archive; historical-hypothesis correction
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
原研究的解释有文献记录，但后续重新描述否定了蝎类归属。保存结构不能确立所提出的肺—心血管同源关系或陆生栖息地。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Wendruff 等（2020）把 Parioscorpio venator 标本 UWGM 2162 和 UWGM 2163 解释为蝎类，并将中线结构与肺—心血管系统比较。本条记录的是该研究的陆生化假说，不是已确定的蝎类解剖、生理或栖息地。
<!-- /evo:text -->
