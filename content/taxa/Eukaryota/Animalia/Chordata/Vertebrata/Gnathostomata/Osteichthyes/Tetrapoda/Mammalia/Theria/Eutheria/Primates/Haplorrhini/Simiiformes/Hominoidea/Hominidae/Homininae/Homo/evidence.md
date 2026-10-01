---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Homo
    commonName: Humans & Relatives
    commonNameZh: 人属及其近亲
    rank: genus
    taxonId: txn:40901
    firstAppearance: 2.8
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lordkipanidze-2013-dmanisi concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: lordkipanidze-2013-dmanisi
          pages: 326–331
          figure: Figures 1–4
          quoteLocator: Skull association; layer and age; variation analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: lordkipanidze-2013-dmanisi @ DOI 10.1126/science.1238484
      referenceLinks:
        - relation: supports
          referenceId: lordkipanidze-2013-dmanisi
          pages: 326–331
          figure: Figures 1–4
          quoteLocator: Skull association; layer and age; variation analysis
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for named geological stages used to bound the source sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo
      rangeKind: taxon-range
      taxonomicConcept: Homo — source-bounded sample window
      geographicScope: Dmanisi Homo skull assemblage, Georgia
      olderMa: 1.85
      youngerMa: 1.77
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: lordkipanidze-2013-dmanisi
          locator: 326–331; Skull association; layer and age; variation analysis
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Hominoidea/Hominidae/Homininae/Homo
      rangeKind: global-composite
      taxonomicConcept: Dmanisi Skull 5 and early Homo variation occurrence
      geographicScope: Layer B1y, Block 2, Dmanisi, Georgia
      olderMa: 1.85
      youngerMa: 1.77
      status: available
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/1/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/1/evidenceBasis
      evidenceLevel: literature-synthesized
      confidence: high
      claimPaths:
        - content/events/Dmanisi_Skull_5_and_early_Homo_variation/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: lordkipanidze-2013-dmanisi
          locator: 326–331; Figures 1–4; Figure S1; Tables S1–S7
      reviewStatus: automated-audit-passed
---

# Homo

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Homo is bounded here by the approximately 1.85–1.77 Ma Dmanisi sample, including associated adult skull D4500/D2600 from layer B1y; this documents one population sample and does not collapse all early Homo taxa into one lineage or define the genus’s global range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The associated skull and stratigraphic sample are direct. The study’s broader single-lineage interpretation remains a taxonomic hypothesis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Homo is displayed at 1.85–1.77 Ma only as the dated Dmanisi assemblage only, not the origin, complete range or living continuation of Homo. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Homo uses Lordkipanidze, D.; Ponce de León, M.S.; Margvelashvili, A.; Rak, Y.; Rightmire, G.P.; Vekua, A.; Zollikofer, C.P.E. (2013) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Dmanisi Homo skull assemblage, Georgia; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
关联头骨与地层样本属于直接证据；研究更广泛的单谱系解释仍是分类假说。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Homo 采用 Lordkipanidze, D.; Ponce de León, M.S.; Margvelashvili, A.; Rak, Y.; Rightmire, G.P.; Vekua, A.; Zollikofer, C.P.E.（2013）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Dmanisi Homo skull assemblage, Georgia；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
此处 Homo 由约 185 万—177 万年前的德马尼西样本约束，其中包括 B1y 层关联成年头骨 D4500/D2600；它记录一个种群样本，不会把所有早期 Homo 类群合并为单一谱系，也不定义该属全球范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Homo 仅以 1.85–1.77 Ma 展示为仅限有测年约束的德马尼西组合，而非 Homo 的起源、完整范围或现生延续。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the dated Dmanisi assemblage only, not the origin, complete range or living continuation of Homo; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A Complete Skull from Dmanisi, Georgia, and the Evolutionary Biology of Early Homo directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/1/uncertainty/note -->
The specimen directly documents one individual and sample variation; the paper’s single evolving early-Homo lineage is a taxonomic interpretation, not a universally accepted ancestry claim.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/1/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
