---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:18947
    scientificName: Eurypterida
    commonName: Sea Scorpions
    commonNameZh: 海蝎类
    rank: order
    parentName: Chelicerata
    extinct: true
    geography:
      - Upper Tremadocian Fezouata Formation, Morocco (Van Roy et al.)
      - Late Permian Russian occurrence reviewed by Tetlie
    overview:
      markdown: page.en.md
      field: /records/atlas-profile/overview
    ecology:
      diet:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/diet
      habitat:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/habitat
      locomotion:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/locomotion
      bodySize:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/bodySize
      guild:
        markdown: page.en.md
        field: /records/atlas-profile/ecology/guild
    traits:
      - markdown: page.en.md
        field: /records/atlas-profile/traits/0
      - markdown: page.en.md
        field: /records/atlas-profile/traits/1
      - markdown: page.en.md
        field: /records/atlas-profile/traits/2
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: medium
    referenceIds:
      - van-roy-2025-fezouata-eurypterids
      - tetlie-2007-eurypterid-history
      - lamsdell-2015-pentecopterus-eurypterid
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
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
      reviewedAgainstReferenceVersion: lamsdell-2015-pentecopterus-eurypterid DOI 10.1186/s12862-015-0443-9; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: lamsdell-2015-pentecopterus-eurypterid
          pages: 1–21
          figure: Figures 1–15; supplementary matrix
          quoteLocator: Geological setting; material; systematic palaeontology; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
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
      reviewedAgainstReferenceVersion: van-roy-2025 + tetlie-2007 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: van-roy-2025-fezouata-eurypterids
          relation: supports
          pages: Article 20252061
          figure: Figures 1–5
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/1/referenceLinks/0/quoteLocator
        - referenceId: tetlie-2007-eurypterid-history
          relation: supports
          pages: 557–574
          figure: Tables 1–7
          quoteLocator: Abstract and Introduction, reviewed latest Late Permian Russian record at approximately 250 Ma
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/2/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: van-roy-2025-fezouata-eurypterids
          relation: supports
          pages: Article 20252061
          figure: Figures 1-5
          quoteLocator: Fezouata eurypterid appendages and morphology matrix
        - referenceId: lamsdell-2015-pentecopterus-eurypterid
          relation: supports
          pages: 1-21
          figure: Figures 1-15; supplementary matrix
          quoteLocator: Pentecopterus morphology and phylogenetic character scoring
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/3/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: van-roy-2025-fezouata-eurypterids
          relation: supports
          pages: Article 20252061
          figure: Figures 1-5
          quoteLocator: Systematic palaeontology and morphology matrix
        - referenceId: tetlie-2007-eurypterid-history
          relation: supports
          pages: 557-574
          figure: Tables 1-7
          quoteLocator: Distribution review and taxonomic limitations
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/4/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: van-roy-2025-fezouata-eurypterids
          relation: supports
          pages: Article 20252061
          figure: Figures 1-5
          quoteLocator: Upper Tremadocian Fezouata occurrence
        - referenceId: tetlie-2007-eurypterid-history
          relation: supports
          pages: 557-574
          figure: Tables 1-7
          quoteLocator: Latest Late Permian Russian record and distribution review
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-11
      reviewedAgainstReferenceVersion:
        markdown: evidence.md
        field: /records/claims/5/reviewedAgainstReferenceVersion
      referenceLinks:
        - referenceId: van-roy-2025-fezouata-eurypterids
          relation: supports
          pages: Article 20252061
          figure: Figures 1-5
          quoteLocator: Morphological and phylogenetic study scope
        - referenceId: tetlie-2007-eurypterid-history
          relation: supports
          pages: 557-574
          figure: Tables 1-7
          quoteLocator: Distribution and dispersal study scope
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
    - markdown: evidence.md
      field: /records/claim-rationales.zh/5
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida
      rangeKind: global-composite
      taxonomicConcept: Eurypterida reviewed oldest-to-latest known fossil-record navigation envelope
      geographicScope: Fezouata oldest record and reviewed global fossil record
      olderMa: 479
      youngerMa: 250
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
        - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Eurypterida/research/Eurypterida/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: van-roy-2025-fezouata-eurypterids
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: tetlie-2007-eurypterid-history
          locator: pp. 557–574; Abstract and Introduction; Tables 1–7; reviewed latest Late Permian Russian record at approximately 250 Ma
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Eurypterida

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pentecopterus decorahensis material from the Darriwilian Winneshiek Lagerstätte supplies a named local eurypterid occurrence and an expanded morphology matrix. It is a specimen- and locality-bounded minimum record, not the exact global origin or full range of Eurypterida.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Confidence is high because the cited primary study directly supports the bounded fossil range statement at the supplied locator. The confidence does not extend beyond it is a specimen- and locality-bounded minimum record, not the exact global origin or full range of Eurypterida.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The atlas shows a 479–250 Ma reviewed eurypterid fossil-record envelope from the oldest unequivocal Fezouata material to Tetlie's reviewed latest record, not an origination or extinction interval.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Two range-fit studies directly bound the displayed fossil-record endpoints, while taxonomic revision and incomplete sampling prevent treating either edge as a biological event.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/1/referenceLinks/0/quoteLocator -->
Systematic palaeontology and Discussion section 3(d), upper Tremadocian occurrence and approximately 479 Ma lower interval
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Van Roy et al. document Fezouata eurypterid appendages and score morphology in a matrix, while Lamsdell et al. provide a sampled Pentecopterus comparison; these characters do not establish order-wide anatomy.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The cited primary studies directly report preserved appendages and scored characters, but their fossil samples and matrix choices do not cover every eurypterid lineage.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/2/reviewedAgainstReferenceVersion -->
van-roy-2025-fezouata-eurypterids DOI 10.1098/rspb.2025.2061; lamsdell-2015-pentecopterus-eurypterid DOI 10.1186/s12862-015-0443-9; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Van Roy et al. place unequivocal Fezouata sea scorpions in a sampled eurypterid morphology matrix, while Tetlie reviews historical distribution; classification remains a sampled, revisable hypothesis rather than a final order-wide tree.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary occurrence study and distribution review report their sampled characters and taxa, but matrix choice and incomplete fossil sampling leave order-wide classification revisable.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
van-roy-2025-fezouata-eurypterids DOI 10.1098/rspb.2025.2061; tetlie-2007-eurypterid-history DOI 10.1016/j.palaeo.2007.05.011; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Fezouata and Late Permian Russian occurrences in Van Roy et al. and Tetlie provide bounded localities across time; they do not constitute a complete geographic distribution of Eurypterida.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The cited studies identify their fossil localities and sampled intervals, while taxonomic revision and uneven preservation prevent a global presence-absence interpretation.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/4/reviewedAgainstReferenceVersion -->
van-roy-2025-fezouata-eurypterids DOI 10.1098/rspb.2025.2061; tetlie-2007-eurypterid-history DOI 10.1016/j.palaeo.2007.05.011; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The cited eurypterid studies address morphology, phylogenetic placement and fossil distribution; predatory function, habitat preference, locomotor performance, body size and ecological guild remain study-limited and unassigned here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The sources are focused on fossil occurrence, morphology and systematics rather than a comparative behavioural or performance dataset, so ecological fields are withheld.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/5/reviewedAgainstReferenceVersion -->
van-roy-2025-fezouata-eurypterids DOI 10.1098/rspb.2025.2061; tetlie-2007-eurypterid-history DOI 10.1016/j.palaeo.2007.05.011; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
置信度为高：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的化石延限表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
两项范围适配研究直接约束显示的化石记录端点；分类修订与采样不完整使两端都不能被当作生物学事件。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Van Roy 等记录 Fezouata 广翅鲎的附肢并在矩阵中评分形态，Lamsdell 等则提供取样的 Pentecopterus 比较；这些性状不能确立整个目级类群的普遍解剖。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
Van Roy 等将明确的 Fezouata 海蝎置于取样的广翅鲎形态矩阵中，Tetlie 则综述历史分布；分类仍是取样且可修订的假说，而不是整个目级类群的最终树。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
Van Roy 等和 Tetlie 所报道的 Fezouata 与晚二叠世俄罗斯出现记录，提供跨时间的有界地点；它们不构成广翅鲎目的完整地理分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
所引广翅鲎研究讨论形态、系统位置和化石分布；捕食功能、栖息偏好、运动性能、体型与生态营养类群仍受研究范围限制，并在此未作赋值。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
达瑞威尔期 Winneshiek 化石库的 Pentecopterus decorahensis 标本，提供了具名的局部广翅鲎记录及扩展形态矩阵。它只是受标本和地点约束的最低记录，不是广翅鲎目精确的全球起源或完整延限。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
图集以 479–250 Ma 显示板足鲎类经综述的化石记录包络，从 Fezouata 最早无争议材料到 Tetlie 综述的最晚记录，而非起源或灭绝区间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The bounds are literature-reported fossil records, not origination or extinction instants.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A 2025 primary study reports unequivocal upper Tremadocian eurypterids from the approximately 479 Ma Fezouata interval; Tetlie's systematic review records the latest occurrence at approximately 250 Ma.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Systematic palaeontology; Figures 1–5; Discussion section 3(d); upper Tremadocian Fezouata occurrence and approximately 479 Ma lower interval
<!-- /evo:text -->
