---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Amiiformes
    commonName: Bowfin and Fossil Relatives
    commonNameZh: 弓鳍鱼目
    rank: order
    taxonId: txn:35190
    firstAppearance: 251.9
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Holostei/Amiiformes
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
      reviewedAgainstReferenceVersion: grande-bemis-1998-amiidae DOI 10.1080/02724634.1998.10011114; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: grande-bemis-1998-amiidae
          pages: 1–690
          figure: Cladograms and anatomical figures throughout; character matrix
          quoteLocator: Comparative skeletal anatomy; taxon diagnoses; phylogenetic analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Holostei/Amiiformes
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: grande-bemis-1998-amiidae; concrete range-boundary locator audit at rc48
      referenceLinks:
        - relation: supports
          referenceId: grande-bemis-1998-amiidae
          pages: 1–690
          figure: Cladograms, fossil taxon accounts and character matrix throughout
          quoteLocator: Amiidae sample and fossil accounts; order-wide endpoint not established
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Holostei/Amiiformes
      rangeKind: global-composite
      taxonomicConcept: Amiiformes temporal range
      geographicScope: Order-level interval pending an Amiiformes-wide stratigraphic synthesis
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
      evidenceLevel: literature-synthesized
      confidence: low
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Actinopterygii/Actinopteri/Holostei/Amiiformes/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: grande-bemis-1998-amiidae
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
---

# Amiiformes

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A comprehensive comparative-skeletal study samples living and fossil amiids and presents explicit phylogenetic hypotheses. Even this large Amiidae-focused monograph does not equate its sampled record with the exact global range or origin of Amiiformes.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond even this large Amiidae-focused monograph does not equate its sampled record with the exact global range or origin of Amiiformes.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The comprehensive Amiidae monograph includes living and fossil amiids but does not directly validate the former 251.9 Ma–present range for all Amiiformes; the order-wide display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Amiiformes temporal range: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is low and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Amiiformes temporal range：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为低。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
全面的比较骨骼研究抽样现生与化石弓鳍鱼科，并提出明确的系统假说。即使这部以弓鳍鱼科为核心的大型专著，也不能把其抽样记录等同于弓鳍鱼目的精确全球延限或起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
这部全面的弓鳍鱼科专著包含现生和化石成员，但不能直接验证原先 2.519 亿年前至今的整个弓鳍鱼目范围；目级显示现予暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The comprehensive Amiidae monograph does not make its family sample an exact range for all Amiiformes.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 251.9 Ma–present display is withheld rather than extrapolated across order and family concepts.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
1–690; Cladograms, fossil taxon accounts and character matrix throughout; Amiidae sample and fossil accounts; order-wide endpoint not established
<!-- /evo:text -->
