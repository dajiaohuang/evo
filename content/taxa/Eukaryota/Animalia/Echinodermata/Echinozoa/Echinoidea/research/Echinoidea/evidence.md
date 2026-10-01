---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:168786
    scientificName: Echinoidea
    commonName: Sea urchins and sand dollars
    commonNameZh: 海胆与沙钱
    rank: class
    parentName: Echinodermata
    extinct: false
    geography:
      - Global marine record
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
      - thompson-2022-bothriocidaroida
      - mongiardino-koch-2022-echinoid-phylogenomics
      - he-2026-global-sea-urchin-diversity
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: thompson-2022-bothriocidaroida @ DOI 10.1080/14772019.2022.2042408 with correction 10.1080/14772019.2022.2070290
      referenceLinks:
        - relation: supports
          referenceId: thompson-2022-bothriocidaroida
          pages: 1395–1396
          figure: Figures 2 and 6
          quoteLocator: "Abstract; Introduction; Systematic palaeontology: Neobothriocidaris sp. A, Occurrence and Remarks"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: divergence-time
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas automated literature audit
      reviewedAt: 2026-08-29
      reviewedAgainstReferenceVersion: mongiardino-koch-2022-echinoid-phylogenomics @ DOI 10.7554/eLife.72460
      referenceLinks:
        - relation: supports
          referenceId: mongiardino-koch-2022-echinoid-phylogenomics
          pages: 1–2
          figure: Figure 6 and Figure 6—figure supplement 1
          quoteLocator: Abstract; Introduction crown definition; Echinoid (and echinoderm) divergence times
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: thompson-2022-bothriocidaroida primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: thompson-2022-bothriocidaroida
          relation: supports
          pages: 1395–1396; Figures 2 and 6
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: thompson-2022-bothriocidaroida primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: thompson-2022-bothriocidaroida
          relation: supports
          pages: 1395–1396; Figures 2 and 6
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: Primary-study locators audited at 2026.08-static-v5-rc43
      referenceLinks:
        - referenceId: thompson-2022-bothriocidaroida
          relation: supports
          pages: 1395–1396; Figures 2 and 6
        - referenceId: he-2026-global-sea-urchin-diversity
          relation: supports
          pages: Article 578
          figure: Figures 1–2; Table 1
          quoteLocator: "Introduction: ecological breadth; Methods: global occurrence database"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: thompson-2022-bothriocidaroida primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: thompson-2022-bothriocidaroida
          relation: supports
          pages: 1395–1396; Figures 2 and 6
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/6/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/6/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: thompson-2022-bothriocidaroida primary-study locator checked for 2026.08-static-v5-rc38
      referenceLinks:
        - referenceId: thompson-2022-bothriocidaroida
          relation: supports
          pages: 1395–1396; Figures 2 and 6
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
    - markdown: evidence.md
      field: /records/claim-rationales.zh/6
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
    - markdown: evidence.md
      field: /records/claim-statements.zh/5
    - markdown: evidence.md
      field: /records/claim-statements.zh/6
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea
      rangeKind: global-composite
      taxonomicConcept: Echinoidea total group, including Ordovician stem echinoids
      geographicScope: Global total-group fossil record
      olderMa: 460
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
        - content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea/evidence.md#/records/claims/1
        - content/taxa/Eukaryota/Animalia/Echinodermata/Echinozoa/Echinoidea/research/Echinoidea/evidence.md#/records/claims/6
      referenceLocators:
        - referenceId: thompson-2022-bothriocidaroida
          locator: pp. 1395–1396; Figures 2 and 6; Neobothriocidaris sp. A, Occurrence and Remarks
        - referenceId: mongiardino-koch-2022-echinoid-phylogenomics
          locator: pp. 1–2; Figure 6 and Figure 6—figure supplement 1
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Echinoidea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The oldest fossil material assigned to Echinoidea consists of disarticulated bothriocidaroid plates from the Pygodus serra Zone of the Darriwilian; time-scaled analyses place the bothriocidaroid root in the Dapingian or Darriwilian.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The Darriwilian plates are direct fossil evidence, whereas the Dapingian–Darriwilian root interval depends on time-scaling methods. The claim and range refer to total-group Echinoidea, not crown Echinoidea.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Phylogenomic dating places the origin of crown Echinoidea between the Pennsylvanian and Cisuralian across analyses, with most posterior probability in the early Permian; Ordovician echinoids are stem-group records.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The crown interval is recovered across phylogenomic dating analyses but remains sensitive to calibration and clock-model choices. The stem-versus-crown distinction prevents the Ordovician fossil range from being misread as the crown divergence date.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Ordovician bothriocidaroids are treated as stem echinoids, whereas crown Echinoidea is defined and dated separately in the phylogenomic analysis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The taxonomy field is bounded to Echinoidea, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The highlighted Darriwilian plates are sampled occurrences and do not establish a global origin area or complete early distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The biogeography field is bounded to Echinoidea, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Living Echinoidea span shallow- and deep-water, epifaunal and infaunal, omnivorous and detritivorous modes; neither the global occurrence study nor disarticulated stem plates establishes one ancestral ecology or body-size envelope.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The ecology field is bounded to Echinoidea, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Bothriocidaroid plates document stem-echinoid test construction, while crown-character evolution is evaluated in a separate phylogenomic framework.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The morphology field is bounded to Echinoidea, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/6/statement -->
The 460–0 Ma range uses Darriwilian total-group material; it is not the crown origin, which is modelled much later across sampled analyses.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/6/confidenceRationale -->
The fossil-range field is bounded to Echinoidea, the named sample or scoped clade analysis and the cited primary-study locator; interpretation is not generalized to direct ancestry or unsampled species.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
达瑞威尔期骨板是直接化石证据，而大坪期至达瑞威尔期的根节点区间依赖时间标定方法；该范围指含干群的海胆纲总群，而非冠群。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
冠群区间在多种系统基因组定年分析中得到恢复，但仍受校准和分子钟模型选择影响；区分干群与冠群可避免把奥陶纪化石范围误读为冠群分化时间。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
海胆与沙钱的分类字段只陈述所引研究与导航范围；不会把矩阵位置、数据库映射或样本相似性改写为直系祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
海胆与沙钱的地理字段限于具名样本或明确模型范围，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
海胆与沙钱的生态字段区分保存事实与功能推断；未被直接记录的饮食、行为、栖息地偏好和性能均保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
海胆与沙钱的形态字段限于主研究列明的标本、样本或分析，并连接到精确页码、图版或补充材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/6 -->
海胆与沙钱的年代范围是有界的标本、地层或模型投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
归入海胆纲的最老化石材料是达瑞威尔期 Pygodus serra 带中离散的 bothriocidaroid 骨板；时间标定分析将该类群根节点置于大坪期或达瑞威尔期。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
多种系统基因组定年分析将海胆纲冠群起源置于宾夕法尼亚亚纪至乌拉尔世之间，后验概率多数落在早二叠世；奥陶纪海胆属于干群记录。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
奥陶纪的 bothriocidaroid 类群在此作为干群海胆处理；冠群海胆则在系统基因组分析中另行定义和估算年代。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所介绍的达瑞威尔期骨板属于采样记录，不能确定全球起源区域或早期完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
现生海胆纲跨越浅水与深水、表栖与内栖、杂食与食碎屑等模式；无论全球出现记录研究还是离散的干群骨板，都不能确定唯一的祖先生态或体型范围。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
Bothriocidaroid 类群的骨板记录了干群海胆的壳体构造；冠群性状演化则在独立的系统基因组框架中评估。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/6 -->
460–0 Ma 范围采用达瑞威尔期总群材料，并非冠群起源年代；所采样的多项分析将冠群起源估算在晚得多的时期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 460–0 Ma range uses Darriwilian total-group material; it is not the crown origin, which is modelled much later across sampled analyses.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Disarticulated bothriocidaroid plates document a Darriwilian total-group record; time-scaled roots extend into the Dapingian or Darriwilian, whereas phylogenomics places the crown much later.
<!-- /evo:text -->
