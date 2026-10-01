---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:175182
    scientificName: Morganucodonta
    commonName: Morganucodontans
    commonNameZh: 摩尔根兽类颅骨标本组
    rank: order
    parentName: Mammaliaformes
    extinct: true
    geography:
      - Wales and China
      - Lower Jurassic representative material
      - No complete order-level distribution inferred
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
      - kermack-1981-morganucodon-skull
      - luo-2002-mesozoic-mammal-phylogeny
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Taxon sampling; Mammaliaformes relationships; discussion of crown Mammalia definitions
        - relation: supports
          referenceId: kermack-1981-morganucodon-skull
          pages: 1–158, especially 1–8
          quoteLocator: Material, taxonomy and systematic position of Morganucodon
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas RC84 mammal-origins dossier audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: kermack-1981-morganucodon-skull primary-study locators checked 2026-09-01
      referenceLinks:
        - relation: supports
          referenceId: kermack-1981-morganucodon-skull
          pages: 1–158, especially 1–8
          quoteLocator: "Introduction and material: M. watsoni from Wales; M. oehleri from China"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas RC84 mammal-origins dossier audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: kermack-1981-morganucodon-skull primary-study locators checked 2026-09-01
      referenceLinks:
        - relation: supports
          referenceId: kermack-1981-morganucodon-skull
          pages: 1–158, especially 1–8
          quoteLocator: Abstract; dentition and functional differentiation
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas RC84 mammal-origins dossier audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: kermack-1981-morganucodon-skull primary-study locators checked 2026-09-01
      referenceLinks:
        - relation: supports
          referenceId: kermack-1981-morganucodon-skull
          pages: 1–158, especially 1–8
          quoteLocator: Abstract; skull, jaw articulation and middle-ear descriptions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: luo-2002-mesozoic-mammal-phylogeny @ https://www.app.pan.pl/archive/published/app47/app47-001.pdf
      referenceLinks:
        - relation: supports
          referenceId: luo-2002-mesozoic-mammal-phylogeny
          pages: 1–78
          quoteLocator: Taxon sampling; Mammaliaformes relationships; discussion of crown Mammalia definitions
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
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
    - markdown: evidence.md
      field: /records/claim-rationales.zh/3
    - markdown: evidence.md
      field: /records/claim-rationales.zh/4
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
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta
      rangeKind: global-composite
      taxonomicConcept: Morganucodonta — source-bounded sample window
      geographicScope: Morganucodontan specimens sampled in Luo et al.'s Mesozoic-mammal synthesis
      olderMa: 201.4
      youngerMa: 145
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptiliomorpha/Anthracosauria/Amphibiosauria/Cotylosauria/Amniota/Synapsida/Therapsida/Cynodontia/Mammaliamorpha/Mammaliaformes/Morganucodonta/research/Morganucodonta/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: luo-2002-mesozoic-mammal-phylogeny
          locator: 1–78; Taxon sampling; Mammaliaformes relationships; discussion of crown Mammalia definitions
        - referenceId: ics-2026-06
          locator: International Chronostratigraphic Chart v2026/06; numerical stage boundaries
      reviewStatus: automated-audit-passed
---

# Morganucodonta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Morganucodontans are sampled as early mammaliaforms outside narrower crown Mammalia in the cited broad character analysis; this placement is a higher-taxon convention and topology, not evidence that Morganucodonta is the direct ancestor of living mammals.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The paper directly scores morganucodontans and discusses the Mammalia boundary. The statement avoids ancestry and whole-group duration.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The primary skull study describes Lower Jurassic Morganucodon watsoni from Wales and M. oehleri from China; these two source localities are representative material, not a complete geographic distribution for Morganucodonta.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The source names the two species, countries and Lower Jurassic context, but an order-level dossier must not turn them into a complete range or origin centre.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The described Morganucodon skulls have teeth differentiated into incisors, canines, premolars and molars, but the study does not directly observe diet, habitat, locomotion or behaviour for Morganucodonta as a whole.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The dental differentiation is a direct anatomical observation; ecological function is deliberately withheld beyond a cautious dental inference.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Kermack and colleagues describe a 26 mm Morganucodon watsoni skull and a slightly larger M. oehleri skull, with a squamosal–dentary contact while the articular–quadrate joint is retained; this is one anatomical mosaic, not a linear transition or direct ancestry claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The named skull study directly describes the stated anatomy, while functional and evolutionary interpretations remain bounded to the authors' material and taxon sampling.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Morganucodonta is displayed at 201.4–145 Ma only as the synthesis's sampled fossil envelope, not exact global genus-group endpoints. The interval is a source-bounded sample window, not a global FAD, LAD, divergence date, continuous occupancy claim or direct-ancestor assertion.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Morganucodonta uses Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L. (2002) because the cited pages and locator expose the sampled taxon, specimen or living sequence set. Confidence is medium and applies only to Morganucodontan specimens sampled in Luo et al.'s Mesozoic-mammal synthesis; broader endpoints remain unclaimed.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
论文直接编码摩根兽类并讨论哺乳纲边界；表述避免祖先关系和全群延续范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
来源明确两种标本、国家和早侏罗世背景，但目级档案不能把它们转化为完整分布或起源中心。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
牙齿分化是直接的解剖观察；除审慎的牙齿功能推断外，生态功能保持未定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
具名颅骨研究直接描述了相关解剖；功能和演化解释仍限定于作者的材料与类群取样。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
Morganucodonta 采用 Luo, Z.-X.; Kielan-Jaworowska, Z.; Cifelli, R.L.（2002）的论文，因为所引页码与定位符直接标示了研究采样的类群、标本或现生序列集合。中等置信度仅适用于 Morganucodontan specimens sampled in Luo et al.'s Mesozoic-mammal synthesis；更宽泛端点保持未声明。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Kermack 及同事描述了一件长 26 毫米的 Morganucodon watsoni 头骨和一件稍大的 M. oehleri 头骨：存在鳞骨与齿骨的接触，同时保留关节骨与方骨组成的关节。这是一种解剖特征的镶嵌组合，并不代表线性演变或直接祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
头骨主研究描述了威尔士下侏罗统的 Morganucodon watsoni 和中国的 M. oehleri；这两个来源地点提供代表性材料，并非摩根齿兽目的完整地理分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
所描述 Morganucodon 头骨的牙齿分化为门齿、犬齿、前臼齿和臼齿，但研究并未直接观察整个摩根齿兽目的食性、生境、运动方式或行为。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
在所引广泛性状分析中，摩根兽类被取样为狭义冠群哺乳纲之外的早期哺乳形类；这一位置属于高阶分类约定与拓扑，不是摩根兽目为现生哺乳类直接祖先的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
Morganucodonta 仅以 201.4–145 Ma 展示为综述所采样的化石包络，而非精确全球类群端点。该区间是来源限定的样本窗口，不是全球首现、末现、分化日期、连续占据或直接祖先断言。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This display is limited to the synthesis's sampled fossil envelope, not exact global genus-group endpoints; numerical stage conversions follow ICS v2026/06 where applicable.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
In quest for a phylogeny of Mesozoic mammals directly anchors the sampled window; the display does not extrapolate it into a global taxon duration.
<!-- /evo:text -->
