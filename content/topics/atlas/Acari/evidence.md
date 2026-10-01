---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Acari
    commonName: Mites and Ticks
    commonNameZh: 蜱螨类
    rank: superorder
    taxonId: ""
    firstAppearance: 410
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Acari
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
      reviewedAgainstReferenceVersion: arribas-2020-acari-metagenomics DOI 10.1093/molbev/msz255; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: arribas-2020-acari-metagenomics
          pages: 683–694
          figure: Figures 1–4; supplementary data
          quoteLocator: Metagenomic sampling; phylogeny; molecular dating
    - subject:
        kind: taxon
        path: content/topics/atlas/Acari
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: sidorchuk-2018 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: sidorchuk-2018-acari-fossil-record
          relation: supports
          pages: 349–359
          figure: Fossil dataset
          quoteLocator: Abstract and dataset, more than 260 fossils from approximately 410 Ma onward and rejected older assignments
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
    - entityPath: content/topics/atlas/Acari
      rangeKind: global-composite
      taxonomicConcept: Broad Acari oldest-secure-fossil-to-living navigation envelope
      geographicScope: Global fossil and living record
      olderMa: 410
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
      evidenceLevel: literature-synthesized
      confidence: contested
      claimPaths:
        - content/topics/atlas/Acari/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: sidorchuk-2018-acari-fossil-record
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Acari

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Mitochondrial metagenomics samples soil-mite diversity and yields a model-based Acari topology and divergence estimates. Both topology and ages are conditional on the mitochondrial sample and clock model, not direct observations of acarine origin or global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond both topology and ages are conditional on the mitochondrial sample and clock model, not direct observations of acarine origin or global range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The 410–0 Ma Acari display begins with the oldest securely accepted reviewed mite record and remains a broad fossil-to-living envelope rather than a consensus crown age.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The fossil review directly rejects unsupported older assignments, but contested Acari topology limits the interpretation of this broad navigation concept.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
化石综述直接排除不可靠的更老归属，但蜱螨类拓扑争议限制该宽泛导航概念的解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
线粒体宏基因组抽样土壤螨类多样性，并给出模型化的螨类拓扑和分歧估计。拓扑与年龄都受线粒体样本和时钟模型制约，不是螨类起源或全球延限的直接观测。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
410–0 Ma 的蜱螨类显示从综述接受的最早可靠螨类记录开始，是宽泛的化石至现生包络，而非公认冠群年龄。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 410 Ma edge is the oldest securely accepted reviewed record, not a crown age; Acari topology remains contested.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A fossil-data review documents secure Acari records from the Early Devonian at approximately 410 Ma and excludes unsupported older assignments; living mites extend the navigation envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 349–359; Abstract and fossil dataset; more than 260 fossils from the Early Devonian approximately 410 Ma onward; rejected Ordovician and Permian assignments
<!-- /evo:text -->
