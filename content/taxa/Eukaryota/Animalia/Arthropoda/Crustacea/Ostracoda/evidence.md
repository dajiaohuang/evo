---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ostracoda
    commonName: Seed Shrimp
    commonNameZh: 介形虫
    rank: class
    taxonId: txn:22826
    firstAppearance: 485
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Ostracoda
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: siveter-2003-silurian-ostracod DOI 10.1126/science.1091376; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: siveter-2003-silurian-ostracod
          pages: 1749–1751
          figure: Figures 1–3
          quoteLocator: Specimen, locality, soft-part reconstruction and affinity
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Ostracoda
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: siveter-2014 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: siveter-2014-luprisca-ostracod
          relation: supports
          pages: 801–806
          figure: Main-text figures
          quoteLocator: Highlights, Summary and Results identify Luprisca at approximately 450 Ma as the first unequivocal pre-Silurian ostracod
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Ostracoda
      rangeKind: global-composite
      taxonomicConcept: Ostracoda earliest-unequivocal-fossil-to-living navigation envelope
      geographicScope: Unequivocal fossil record and living representatives
      olderMa: 450
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Crustacea/Ostracoda/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: siveter-2014-luprisca-ostracod
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Ostracoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A Lower Silurian ostracod with preserved soft parts provides a directly described specimen-level occurrence and anatomical assignment. One local specimen supplies only a minimum record; it does not establish the class's origin, global FAD or complete range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is high because the cited primary study directly supports the bounded fossil range statement at the supplied locator. The confidence does not extend beyond one local specimen supplies only a minimum record; it does not establish the class's origin, global FAD or complete range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 450–0 Ma Ostracoda display begins with the first unequivocal pre-Silurian ostracod occurrence and excludes less secure older shell-only assignments.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The exceptional-preservation study directly demonstrates ostracod anatomy and brood care at approximately 450 Ma, resolving ambiguity present in older shell-only records.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为高：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的化石延限表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
异常保存研究直接证明约 450 Ma 的介形类解剖与育幼行为，解决了更老壳体记录的归属歧义。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一件保存软体结构的早志留世介形虫，提供了直接描述的标本级记录与解剖归属。单一局部标本只能提供最低记录，不能确定介形纲的起源、全球首现或完整延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
450–0 Ma 的介形类显示从首个无争议的前志留纪记录开始，并排除可靠性较低的更老壳体归属。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 450 Ma edge is the oldest unequivocal reviewed occurrence; older shell-only assignments remain uncertain.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A primary study identifies the approximately 450 Ma Luprisca record as the first unequivocal pre-Silurian ostracod occurrence; living ostracods extend the sampled-record envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 801–806; Highlights, Summary and Results; figures documenting the approximately 450 Ma Luprisca occurrence and caution over older shell-only assignments
<!-- /evo:text -->
