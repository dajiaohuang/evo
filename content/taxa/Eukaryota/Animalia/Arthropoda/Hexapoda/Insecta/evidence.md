---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Insecta
    commonName: Insects
    commonNameZh: 昆虫
    rank: class
    taxonId: txn:56637
    firstAppearance: 410
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/0/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: prokop-2005-paskov-wing
          relation: supports
          pages: 383–387
          figure: Figures 1–2
          quoteLocator: Paskov drill-core horizon; part and counterpart; venation description and Archaeorthoptera attribution
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta
      rangeKind: global-composite
      taxonomicConcept: Insecta sampled body-fossil envelope
      geographicScope: Paskov Archaeorthoptera wing sample to living insects
      olderMa: 324
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 3
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Hexapoda/Insecta/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: prokop-2005-paskov-wing
          locator: pp. 383–387; Figures 1–2
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Insecta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Insecta root display replaces the unsupported 410 Ma value with a 324–0 Ma sampled navigation envelope anchored by the Paskov Archaeorthoptera wing and living insects; it is not the origin of insects or flight.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The part-and-counterpart wing and its lowermost Namurian horizon are directly described, while higher placement and a rounded numerical age remain bounded interpretations. A younger secure sample is preferred over an older contested mandibular fragment.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/0/reviewedAgainstReferenceVersion -->
Prokop et al. 2005 DOI 10.1016/j.geobios.2003.11.006; bibliographic identity corrected by automated source audit 2026-09-22; original claim inventory 2026.08-static-v5-rc39
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
翅片正模与反模及其最下部纳缪尔期层位可直接核实，但更高阶分类和取整年代仍有边界；宁用较年轻的可靠样本，也不用更古老但有争议的颚部碎片。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
昆虫纲根节点以 3.24 亿年前至今的采样导航包络替代缺乏支持的 4.10 亿年前数值，锚点是 Paskov 的古直翅类翅片和现生昆虫；它不是昆虫或飞行的起源时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The secure sampled wing replaces an older contested fragment; it is not an insect or flight origin date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A lowermost Namurian wing part and counterpart preserve venation attributed to Archaeorthoptera; living insects provide the present endpoint.
<!-- /evo:text -->
