---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Hippomorpha
    commonName: Horse-line Perissodactyls
    commonNameZh: 马形奇蹄类
    rank: suborder
    taxonId: ""
    firstAppearance: 56
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Hippomorpha
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: price-2009-perissodactyl-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: price-2009-perissodactyl-phylogeny
          pages: 277–292
          figure: Figures 1–3
          quoteLocator: Abstract; supertree and supermatrix results
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Hippomorpha
      rangeKind: global-composite
      taxonomicConcept: Hippomorpha numerical range withheld because the cited phylogeny samples extant taxa only
      geographicScope: No defensible global numerical scope established
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: price-2009-perissodactyl-phylogeny
          locator: pp. 277–292; Abstract and Figures 1–3; extant-species supertree and supermatrix scope
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Hippomorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Combined supertree and supermatrix analyses of the extant perissodactyl sample recover Equidae—the living component labelled Hippomorpha—as sister to sampled Ceratomorpha; this extant topology neither resolves every fossil hippomorph nor dates the total group’s origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study includes all extant species recognized by its taxonomy and explicitly reports patchy gene coverage. The claim is restricted to that living sample.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究覆盖其分类框架认可的全部现生物种，并明确报告基因覆盖不均；主张仅限于该现生样本。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对现生奇蹄类样本的超级树与超级矩阵联合分析，将马科——此处标为 Hippomorpha 的现生组成——恢复为取样 Ceratomorpha 的姐妹群；该现生拓扑既不解析所有化石马型类，也不测定总群起源。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The extant-species supertree and supermatrix cannot establish a total-group fossil range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 56–0 Ma display is withheld because the cited comprehensive analysis is restricted to living perissodactyl species and does not audit fossil total-group endpoints.
<!-- /evo:text -->
