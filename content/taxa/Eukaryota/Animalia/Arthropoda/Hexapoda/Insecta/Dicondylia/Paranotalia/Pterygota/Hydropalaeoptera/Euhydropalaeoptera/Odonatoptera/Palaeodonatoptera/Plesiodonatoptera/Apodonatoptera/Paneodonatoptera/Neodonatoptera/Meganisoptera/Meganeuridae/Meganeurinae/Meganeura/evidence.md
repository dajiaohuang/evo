---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Meganeura
    commonName: Giant Dragonfly
    commonNameZh: 巨脉蜻蜓
    rank: genus
    taxonId: txn:175803
    firstAppearance: 305
    lastAppearance: 299
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Dicondylia/Paranotalia/Pterygota/Hydropalaeoptera/Euhydropalaeoptera/Odonatoptera/Palaeodonatoptera/Plesiodonatoptera/Apodonatoptera/Paneodonatoptera/Neodonatoptera/Meganisoptera/Meganeuridae/Meganeurinae/Meganeura
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: nel-2009-griffenfly-revision DOI 10.1127/pala/289/2009/89; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: nel-2009-griffenfly-revision
          pages: 89–121
          figure: Figures 1–14
          quoteLocator: Redescriptions; comparative diagnoses; revised Meganeuridae systematics
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/Dicondylia/Paranotalia/Pterygota/Hydropalaeoptera/Euhydropalaeoptera/Odonatoptera/Palaeodonatoptera/Plesiodonatoptera/Apodonatoptera/Paneodonatoptera/Neodonatoptera/Meganisoptera/Meganeuridae/Meganeurinae/Meganeura
      rangeKind: global-composite
      taxonomicConcept: Meganeura numerical range withheld pending genus-wide stratigraphic synthesis
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
        - referenceId: nel-2009-meganeuridae-revision
          locator: pp. 89–121; Abstract and systematic redescription of Meganeura monyi and selected Eurasian taxa
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Meganeura

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A revision of selected Eurasian Permo-Carboniferous griffenflies places Meganeura within a specimen-based comparative framework. The revision does not sample every Meganeura occurrence and cannot by itself set the genus's exact global first and last appearances.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded taxonomy statement at the supplied locator. The confidence does not extend beyond the revision does not sample every Meganeura occurrence and cannot by itself set the genus's exact global first and last appearances.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的分类表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
对欧亚二叠纪—石炭纪部分巨脉蜓类的修订，把 Meganeura 置于基于标本的比较框架中。该修订并未抽样 Meganeura 的全部记录，不能单独确定该属精确的全球首末出现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The redescription treats selected Meganeura material but does not establish genus-wide numerical endpoints.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 305–299 Ma display is withheld because the systematic redescription does not directly audit those values as the complete temporal range of Meganeura.
<!-- /evo:text -->
