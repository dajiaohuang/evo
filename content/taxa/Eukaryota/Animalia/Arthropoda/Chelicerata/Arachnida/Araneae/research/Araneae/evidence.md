---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:57473
    scientificName: Araneae
    commonName: Spiders
    commonNameZh: 蜘蛛目
    rank: order
    parentName: Arachnida
    extinct: false
    geography:
      - Carboniferous and younger spider fossil localities reviewed by Selden and Penney
      - Broad living-spider target-gene sampling in Wheeler et al.
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
      - wheeler-2017-spider-tree
      - garwood-2016-idmonarachne
      - selden-penney-2010-spider-fossil-record
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Garwood et al. 2016 DOI 10.1098/rspb.2016.0125; Europe PMC PMC4822468 full text
      referenceLinks:
        - referenceId: garwood-2016-idmonarachne
          relation: supports
          pages: "20160125"
          quoteLocator: "Introduction: spinneret definition; Discussion: preserved underside, tomography and exclusion from Araneae"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: wheeler-2017-spider-tree DOI 10.1111/cla.12182; concrete-locator audit at 2026.08-static-v5-rc44
      referenceLinks:
        - relation: supports
          referenceId: wheeler-2017-spider-tree
          pages: 574–616
          figure: Figures 1–5; appendices and matrices
          quoteLocator: Taxon sampling; analytical methods; classification and topology
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: selden-penney-2010 + garwood-2016 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: selden-penney-2010-spider-fossil-record
          relation: supports
          pages: 171–206
          figure: Table S1
          quoteLocator: Systematic fossil-record review of Carboniferous spiders
        - referenceId: garwood-2016-idmonarachne
          relation: supports
          pages: Article 20160125
          figure: Main-text figures
          quoteLocator: Introduction traces Araneae to approximately 315 Ma and distinguishes Idmonarachne from true spiders
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
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
        - referenceId: wheeler-2017-spider-tree
          relation: supports
          pages: 574–616
          figure: Figures 1–5; appendices and matrices
          quoteLocator: Taxon sampling, classification and topology
        - referenceId: garwood-2016-idmonarachne
          relation: supports
          pages: "20160125"
          figure: Main-text figures
          quoteLocator: Preserved appendages and exclusion of Idmonarachne from true Araneae
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
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
      reviewedAgainstReferenceVersion: Selden and Penney 2010; Wheeler et al. 2017 DOI 10.1111/cla.12182; concrete locators audited 2026-09-11
      referenceLinks:
        - referenceId: selden-penney-2010-spider-fossil-record
          relation: supports
          pages: 171–206
          figure: Table S1
          quoteLocator: Fossil spider localities and temporal occurrence review
        - referenceId: wheeler-2017-spider-tree
          relation: supports
          pages: 574–616
          figure: Figures 1–5; appendices and matrices
          quoteLocator: Extensive living-spider taxon sampling
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
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
        - referenceId: wheeler-2017-spider-tree
          relation: supports
          pages: 574–616
          figure: Figures 1–5; appendices and matrices
          quoteLocator: Phylogenetic sampling and study scope
        - referenceId: garwood-2016-idmonarachne
          relation: supports
          pages: "20160125"
          figure: Main-text figures
          quoteLocator: Preserved anatomy and spider-origin comparison, without direct behaviour observations
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
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae
      rangeKind: global-composite
      taxonomicConcept: Araneae reviewed oldest-known-fossil-to-living navigation envelope
      geographicScope: Global fossil and living record
      olderMa: 315
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
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Arthropoda/Chelicerata/Arachnida/Araneae/research/Araneae/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: selden-penney-2010-spider-fossil-record
          locator: pp. 171–206; fossil-record review and Table S1
        - referenceId: garwood-2016-idmonarachne
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Araneae

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Spider spinnerets are abdominal appendages that control silk deployment. Garwood et al. distinguish true spiders from the Carboniferous Idmonarachne fossil, whose preserved underside lacks spinnerets; its spider-like appearance alone does not make it a member of Araneae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study defines spinnerets and documents their absence using the preserved ventral surface and tomography. This claim retains the authors' anatomical distinction without treating inferred silk production in the fossil as an observation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Extensive target-gene and taxon sampling provides a reproducible topology and revised classification for sampled spiders. It does not establish the fossil first appearance, exact crown age or a direct ancestor of Araneae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Confidence is medium because the cited primary study directly supports the bounded topology statement at the supplied locator. The confidence does not extend beyond it does not establish the fossil first appearance, exact crown age or a direct ancestor of Araneae.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The 315–0 Ma Araneae display is an oldest-known-fossil-to-living navigation envelope and does not date spider origination or crown divergence.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
A systematic fossil review and a separately imaged Carboniferous arachnid study converge on the approximately 315 Ma true-spider record while distinguishing stem-like material.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Wheeler et al. use extensive target-gene sampling to revise relationships among living spiders, while Garwood et al. distinguish the Carboniferous Idmonarachne from true spiders by its preserved appendages; the combined classification remains a sampled and revisable hypothesis.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The primary phylogeny and fossil study directly report sampled characters and their interpretations, but taxon sampling and preservation limit a final order-wide classification.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/3/reviewedAgainstReferenceVersion -->
Wheeler et al. 2017 DOI 10.1111/cla.12182; Garwood et al. 2016 DOI 10.1098/rspb.2016.0125; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The spider fossil review records Carboniferous and younger occurrences, and Wheeler et al. sample living lineages broadly for target-gene phylogeny; these fossil localities and sampled species do not form a complete geographic distribution of Araneae.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Both studies identify their included fossil records or living taxa, but neither is a global presence–absence survey of spiders.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The cited spider phylogeny and fossil-origin studies test relationships and preserved anatomy rather than diet, habitat use, locomotor performance, body size or ecological guild; those fields remain unassigned for Araneae here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The source designs are explicitly phylogenetic and anatomical, so withholding ecological fields avoids converting sampled relationships or fossil preservation into observed behaviour.
<!-- /evo:text -->

## claims / reviewedAgainstReferenceVersion

<!-- evo:text /records/claims/5/reviewedAgainstReferenceVersion -->
Wheeler et al. 2017 DOI 10.1111/cla.12182; Garwood et al. 2016 DOI 10.1098/rspb.2016.0125; concrete locators audited 2026-09-11
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究定义了纺器，并通过保存的腹面和断层成像记录其缺失。本主张保留作者的解剖区分，不将推断的化石产丝能力当作直接观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
置信度为中：所引主研究在给定页码、图版或章节定位器处直接支持这一受限的拓扑表述；置信度不外推到文中明确排除的全群起源、全球首现、直接祖先或精确端点。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
系统化石综述与独立成像研究均支持约 315 Ma 的真蜘蛛记录，同时区分干群样材料。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
系统发育和化石研究直接报告了取样性状及其解释，但类群取样和保存状况限制了最终的目级分类。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
两项研究分别列出化石记录和现生类群样本，但都不是蜘蛛目全球存在与缺失的普查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
所引研究聚焦系统发育和保存解剖，并没有饮食、栖息地、运动性能或生态功能群数据，因此保留未赋值。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
蜘蛛的纺器是控制蛛丝释放与运用的腹部附肢。Garwood 等将真蜘蛛与石炭纪 Idmonarachne 化石区分开：后者保存的腹面缺少纺器，仅凭蜘蛛样外形不能将其归入蜘蛛目。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
大规模目标基因与类群抽样，为所抽样蜘蛛提供了可复现的拓扑和修订分类。它不能确定蜘蛛目的化石首现、精确冠群年龄或直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
315–0 Ma 的蜘蛛目显示是已知最早化石至现生的导航包络，不用于测定蜘蛛起源或冠群分化。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older edge is a reviewed oldest-known fossil record, not an origination or crown-divergence date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The fossil-record review and a Carboniferous arachnid study trace true spiders to approximately 315 Ma; living Araneae extend this sampled-record navigation envelope to the present.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
Article 20160125; Introduction and main-text figures; Araneae traced to approximately 315 Ma and Idmonarachne distinguished from true spiders
<!-- /evo:text -->
