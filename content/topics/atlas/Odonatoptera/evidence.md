---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    taxonId: ""
    extinct: false
    name: Odonatoptera
    commonName: Odonatopteran navigation group
    commonNameZh: 蜻蜓总群导航组
    rank: navigation group
    firstAppearance: 325
    lastAppearance: 0
    entityKind: navigation-group
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Odonatoptera
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: kohli-2021-odonata-transcriptomics DOI 10.1016/j.isci.2021.103324; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: kohli-2021-odonata-transcriptomics
          pages: "103324"
          figure: Figures 1–5; supplementary calibrations
          quoteLocator: Transcriptome sampling; fossil calibrations; divergence-time analyses
    - subject:
        kind: taxon
        path: content/topics/atlas/Odonatoptera
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
      reviewedAgainstReferenceVersion: sutherland-2025 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: sutherland-2025-odonatoptera-classification
          relation: supports
          pages: Article 5
          figure: Odonatoptera classification synthesis
          quoteLocator: Paleontological Record and Odonatoptera Classification sections, oldest record at 325–324 Ma
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
    - entityPath: content/topics/atlas/Odonatoptera
      rangeKind: global-composite
      taxonomicConcept: Odonatoptera oldest-reviewed-fossil-to-living navigation envelope
      geographicScope: Reviewed fossil record and living representatives
      olderMa: 325
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
        - content/topics/atlas/Odonatoptera/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: sutherland-2025-odonatoptera-classification
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Odonatoptera

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A transcriptomic tree combined with fossil calibrations supplies one evidence route through living Odonata and selected fossil odonatopterans. This navigation group joins a study-bounded route; its inferred node ages are not Odonatoptera's global FAD or a direct ancestor sequence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond this navigation group joins a study-bounded route; its inferred node ages are not Odonatoptera's global FAD or a direct ancestor sequence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 325–0 Ma Odonatoptera display is a reviewed oldest-fossil-to-living navigation envelope beginning with Serpukhovian records at 325–324 Ma.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The systematic review directly identifies the oldest superorder record and separately distinguishes it from the later appearance of modern Odonata.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
系统综述直接标识超目级最老记录，并将其与更晚出现的现代蜻蜓目区分。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
转录组树结合化石校准，形成一条穿过现生蜻蜓目与部分化石蜻蜓总群的证据路线。这一导航组只连接研究限定的路线；其推断节点年龄不是蜻蜓总群的全球首现，也不是直接祖先序列。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
325–0 Ma 的 Odonatoptera 显示是经综述的最早化石至现生导航包络，起点为 325–324 Ma 的 Serpukhovian 记录。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 325 Ma edge is the oldest reviewed fossil record, not an origination or crown-divergence date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A systematic review places the oldest Odonatoptera in the Serpukhovian at 325–324 Ma; living odonatopterans extend this sampled-record navigation envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Article 5; Paleontological Record and Odonatoptera Classification sections; oldest Serpukhovian Odonatoptera at 325–324 Ma
<!-- /evo:text -->
