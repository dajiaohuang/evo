---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:519989
    scientificName: Yuganotheca elegans
    commonName: Chengjiang tubular lophophorate sample
    commonNameZh: 澄江管状触手冠动物样本
    rank: species
    parentName: Brachiopod origin dossier route
    extinct: true
    geography:
      - Yu’anshan Member
      - Heilinpu Formation
      - Chengjiang Lagerstätte, Yunnan, China
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
      - zhang-et-al-2014-yuganotheca
      - zhang-et-al-2014-yuganotheca-erratum
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
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
      reviewedAgainstReferenceVersion: zhang-et-al-2014-yuganotheca
      referenceLinks:
        - referenceId: zhang-et-al-2014-yuganotheca
          relation: supports
          pages: Materials and Methods—Material; Description; Figures 1–3, 6
          figure: Figures 1–3, 6
          quoteLocator: Materials and Methods, Material (710 referred specimens); Description and Figures 1–3; Figure 6
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
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
      reviewedAgainstReferenceVersion: Zhang et al. 2014 DOI 10.1038/srep04682
      referenceLinks:
        - relation: supports
          referenceId: zhang-et-al-2014-yuganotheca
          pages: Materials and Methods—Material; Systematic palaeontology—Stratigraphy and locality
          figure: Figures 1–6
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/1/referenceLinks/0/quoteLocator
        - relation: contextualizes
          referenceId: ics-2026-06
          pages: International Chronostratigraphic Chart v2026/06
          figure: Global chronostratigraphic scale
          quoteLocator: Numerical boundaries for the named stages and periods used to bound the source sample
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Zhang et al. 2014 DOI 10.1038/srep04682
      referenceLinks:
        - referenceId: zhang-et-al-2014-yuganotheca
          relation: supports
          pages: Materials and Methods—Material; Description; Figures 1–3, 6
          figure: Figures 1–3, 6
          quoteLocator: Materials and Methods, Material (710 referred specimens); Description and Figures 1–3; Figure 6 phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Zhang et al. 2014 DOI 10.1038/srep04682
      referenceLinks:
        - referenceId: zhang-et-al-2014-yuganotheca
          relation: supports
          pages: Systematic palaeontology—Stratigraphy and locality; Figure 1
          figure: Figure 1; Supplementary Figure S1
          quoteLocator: Systematic palaeontology, Stratigraphy and locality; Yu’anshan Member, Heilinpu Formation, Chengjiang Lagerstätte
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Zhang et al. 2014 DOI 10.1038/srep04682
      referenceLinks:
        - referenceId: zhang-et-al-2014-yuganotheca
          relation: supports
          pages: Description; Figures 1–3
          figure: Figures 1–3
          quoteLocator: Description and Figures 1–3, lophophore, pedicle and tubular-body reconstruction; discussion of functional comparison
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Zhang et al. 2014 DOI 10.1038/srep04682
      referenceLinks:
        - referenceId: zhang-et-al-2014-yuganotheca
          relation: supports
          pages: Description; Figures 1–3; corrected Supplementary Figures S4–S6
          figure: Figures 1–3; Supplementary Figures S4–S6
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/5/referenceLinks/0/quoteLocator
        - referenceId: zhang-et-al-2014-yuganotheca-erratum
          relation: supports
          pages: Erratum; corrected Supplementary Figures S4–S6
          figure: Corrected Supplementary Figures S4–S6
          quoteLocator: Erratum correcting Supplementary Figures S4–S6 cited with the anatomical reconstruction
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
    - markdown: evidence.md
      field: /records/claim-statements.zh/3
    - markdown: evidence.md
      field: /records/claim-statements.zh/4
    - markdown: evidence.md
      field: /records/claim-statements.zh/5
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans
      rangeKind: global-composite
      taxonomicConcept: Yuganotheca elegans — Cambrian Stage 3 Chengjiang sample
      geographicScope: Yu’anshan Member of the Heilinpu Formation, Chengjiang Lagerstätte, Yunnan
      olderMa: 521
      youngerMa: 514.5
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
        - content/taxa/Eukaryota/Animalia/Bilateria/Eubilateria/Protostomia/Spiralia/Lophotrochozoa/Lophophorata/Yuganotheca/Yuganotheca_elegans/research/Yuganotheca_elegans/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: zhang-et-al-2014-yuganotheca
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: ics-2026-06
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/1/locator
      reviewStatus: automated-audit-passed
---

# Yuganotheca elegans

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The referred Chengjiang Yuganotheca sample collectively supports a reconstruction of paired agglutinated valves, lophophore, tube and pedicle; no individual fossil is asserted to preserve every feature, and its exact brachiopod–phoronid stem position remains topology-dependent rather than direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The anatomical mosaic is reconstructed collectively from named referred specimens, while homology and placement remain analytical.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Zhang et al. place a referred sample of 710 Yuganotheca specimens in the Eoredlichia–Wutingaspis zone of the Yu’anshan Member and correlate it with late Atdabanian/Botoman Cambrian Stage 3, supporting a 521–514.5 Ma sample envelope rather than a global genus range or lophophorate divergence date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The formal stratigraphy and locality section states the unit, zone and Stage 3 correlation directly. Medium confidence is limited to the enclosing stage and does not convert the morphology-based placement into ancestry.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/1/referenceLinks/0/quoteLocator -->
Materials and Methods, Material (710 referred specimens); Systematic palaeontology, Stratigraphy and locality, Yu’anshan Member and Eoredlichia–Wutingaspis zone
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Yuganotheca elegans is represented by a referred 710-specimen Chengjiang sample whose combined evidence supports a reconstruction of paired agglutinated valves, a lophophore, tube and pedicle; no individual fossil is asserted to preserve every feature, and the mosaic supports comparison near the brachiopod–phoronid stem region without resolving exact homology or direct ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The referred material and its character evidence are directly described, while their combination across specimens and the exact affinities of valves and tubular structures depend on reconstruction and phylogenetic interpretation.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The profiled Yuganotheca material comes from the Yu’anshan Member of the Heilinpu Formation at the Chengjiang Lagerstätte in Yunnan, China; this defined occurrence does not establish a complete species distribution or geographic origin.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The formal stratigraphy and locality section names the member, formation and Chengjiang locality. High confidence applies only to the reported occurrence context.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Yuganotheca is interpreted as an attached suspension feeder in a marine Chengjiang setting because the referred sample’s reconstruction includes a lophophore and long pedicle; movement, population-wide guild and behaviour are not directly observed.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The lophophore and pedicle are reconstructed across the referred specimen sample, but feeding and attachment are functional interpretations bounded to that reconstruction rather than direct behavioural observations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
Across the referred Yuganotheca specimens, paired agglutinated valves surrounding a lophophoral chamber, a median collar above a conical tube, and a long pedicle with inferred coelomic space support a combined reconstruction; no individual fossil is asserted to preserve the entire combination, and homology remains interpretive.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The named structures are illustrated across Chengjiang specimens and combined in a reconstruction, while their exact homologies are assessed through comparative phylogenetic analysis.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/5/referenceLinks/0/quoteLocator -->
Description and Figures 1–3, valve pair, lophophoral chamber, collar, tube and pedicle; corrected Supplementary Figures S4–S6
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
解剖镶嵌由具名归入标本共同重建，但同源性与位置仍属分析推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
正式“地层与地点”部分直接给出地层单元、化石带与第 3 期对比。中等置信度仅适用于包容阶，不把形态学位置转化为祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
归入材料数量和性状证据有直接描述，但其跨标本组合及壳瓣与管状结构的确切亲缘取决于复原和系统发育解释，而非相连的祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
正式地层与地点部分明确指出段、组和澄江地点；高置信度仅适用于所报告的出现背景。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
触手冠和肉茎跨归入标本重建，但摄食与附着是限于该重建的功能解释，并非直接行为观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
具名结构由澄江归入标本的图件共同支持并被组合为复原，但其确切同源性通过比较系统发育分析评估。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
归入的澄江 Yuganotheca 样本共同支持成对胶结壳瓣、触手冠、管体和肉茎的复原；并不声称任何单件化石保存全部性状，其精确腕足动物—帚虫干群位置仍依赖拓扑，并非直接祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Zhang 等把由 710 件归入标本组成的 Yuganotheca 样本置于黑林铺组玉案山段的 Eoredlichia–Wutingaspis 带，并与晚 Atdabanian/Botoman 寒武纪第 3 期对比，因此支持 5.210–5.145 亿年前的样本包络，而非该属全球延限或触手冠动物分化时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
Yuganotheca elegans 由 710 件归入澄江标本组成的样本代表，其组合证据支持成对胶结壳瓣、触手冠、管状结构和肉茎的复原；并不声称任何单件化石保存每项性状，该镶嵌性状支持与腕足动物—帚虫干群区域的比较，但不能解析确切同源性或直接祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
所建档的 Yuganotheca 材料来自中国云南澄江化石库黑林铺组的玉案山段；该限定出现记录并不能确立完整物种分布或地理起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
由于归入样本的复原包含触手冠和长肉茎，Yuganotheca 被解释为澄江海洋环境中的附着悬浮摄食者；运动、种群尺度功能群和行为均未被直接观察到。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
跨归入的 Yuganotheca 标本，围绕触手冠腔的成对胶结壳瓣、锥形管上方的中部领环，以及具有推定体腔空间的长肉茎共同支持一项组合复原；并不声称任何单件化石保存整个组合，其同源性仍属解释。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Cambrian Stage 3 bounds the cited late Atdabanian/Botoman sample; it is not a direct specimen date, global genus range or lophophorate divergence interval.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Zhang et al. place a referred sample of 710 specimens in the Eoredlichia–Wutingaspis zone and explicitly correlate the material with late Atdabanian/Botoman Cambrian Stage 3.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
Materials and Methods—Material (710 referred specimens); Systematic palaeontology—Stratigraphy and locality; Heilinpu Formation, Yu’anshan Member, Eoredlichia–Wutingaspis zone, late Atdabanian/Botoman, Cambrian Stage 3
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/1/locator -->
International Chronostratigraphic Chart v2026/06; numerical boundaries for the named stages and periods used to bound the source sample
<!-- /evo:text -->
