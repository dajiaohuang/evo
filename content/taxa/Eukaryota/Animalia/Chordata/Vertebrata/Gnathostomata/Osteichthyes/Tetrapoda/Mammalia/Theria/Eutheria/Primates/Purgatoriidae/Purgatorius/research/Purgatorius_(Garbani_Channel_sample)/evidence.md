---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:40704
    scientificName: Purgatorius (Garbani Channel sample)
    commonName: Paleocene primatomorphan sample
    commonNameZh: 古新世炼狱猴样本
    rank: genus
    parentName: Plesiadapiformes
    extinct: true
    geography:
      - Garbani Channel fauna
      - Montana
      - United States
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
      - chester-2015-purgatorius
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/0/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/sourceIds/0
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/1/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/1/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/1/sourceIds/0
      - id:
          markdown: page.en.md
          field: /records/atlas-profile/readerSections/2/id
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/2/text/zh
        sourceIds:
          - markdown: page.en.md
            field: /records/atlas-profile/readerSections/2/sourceIds/0
    readerSources:
      referenceBindings:
        - referenceId: chester-2015-purgatorius
          metadataVariant: 0
          sourceKey: chester-2015-purgatorius
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
    readerLimitations:
      en:
        markdown: page.en.md
        field: /records/atlas-profile/readerLimitations/en
      zh:
        markdown: page.zh.md
        field: /records/atlas-profile/readerLimitations/zh
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)
      claimType: taxonomy
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: chester-2015-purgatorius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: chester-2015-purgatorius
          relation: supports
          pages: 1487–1492; Figures 1–3; SI Appendix Figures S1–S5 and Tables S1–S3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)
      claimType: biogeography
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: chester-2015-purgatorius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: chester-2015-purgatorius
          relation: supports
          pages: 1487–1492; Figures 1–3; SI Appendix Figures S1–S5 and Tables S1–S3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)
      claimType: ecology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: chester-2015-purgatorius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: chester-2015-purgatorius
          relation: supports
          pages: 1487–1492; Figures 1–3; SI Appendix Figures S1–S5 and Tables S1–S3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)
      claimType: morphology
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: chester-2015-purgatorius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: chester-2015-purgatorius
          relation: supports
          pages: 1487–1492; Figures 1–3; SI Appendix Figures S1–S5 and Tables S1–S3
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: chester-2015-purgatorius primary-study locator checked for 2026.08-static-v5-rc37
      referenceLinks:
        - referenceId: chester-2015-purgatorius
          relation: supports
          pages: 1487–1492; Figures 1–3; SI Appendix Figures S1–S5 and Tables S1–S3
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)
      rangeKind: global-composite
      taxonomicConcept: Purgatorius Garbani Channel tarsals occurrence
      geographicScope: Garbani Channel fauna, Tullock Member, Fort Union Formation, Montana, USA
      olderMa: 65.2
      youngerMa: 64.4
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
        - content/events/Purgatorius_Garbani_Channel_tarsals/evidence.md#/records/claims/0
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Purgatoriidae/Purgatorius/research/Purgatorius_(Garbani_Channel_sample)/evidence.md#/records/claims/4
      referenceLocators:
        - referenceId: chester-2015-purgatorius
          locator: 1487–1492; Figures 1–3; SI Appendix Figures S1–S5 and Tables S1–S3
      reviewStatus: automated-audit-passed
---

# Purgatorius (Garbani Channel sample)

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Isolated Garbani Channel tarsals and comparative functional and taxonomic analyses; no associated dental skeleton.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
研究对象为 Garbani Channel 孤立跗骨及其比较功能、分类分析；没有与牙齿相连的骨架。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Garbani Channel tarsals were attributed to Purgatorius by bounded comparative regressions and phylogenetic analyses; the isolated bones do not establish crown-Primate membership or ancestry.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The taxonomy field for purgatorius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The profile represents the Garbani Channel fauna in Montana and does not convert that locality sample into a global Purgatorius distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The biogeography field for purgatorius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Tarsal joint form supports an arboreal locomotor inference, while diet, habitual substrate use and behaviour remain unobserved.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The ecology field for purgatorius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
UCMP 197509 and UCMP 197517 preserve ankle and inverted-foot features quantified against dentally associated euarchontans.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The morphology field for purgatorius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The 65.2–64.4 Ma envelope is the bounded late Puercan sample context, not a genus-wide FAD, LAD, crown-Primate age or uninterrupted duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The fossil-range field for purgatorius is bounded to the named material and cited primary-study locator; that evidence type is not generalized to ancestry or a whole clade.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
古新世炼狱猴样本的分类表述只覆盖具名标本及所引主研究的分析范围；导航归属不表示直系祖先或普适系统树。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
古新世炼狱猴样本的地理字段只投影主研究记录的具体产地，不外推为全球分布、起源中心或完整扩散路径。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
古新世炼狱猴样本的生态字段区分保存事实与功能推断；未被标本直接记录的饮食、行为、栖息地或性能均明确保留不确定性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
古新世炼狱猴样本的形态字段限定于主研究列明的具名标本和精确页码、图版或补充材料，不外推到整个支系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
古新世炼狱猴样本的年代范围是主研究标本或地层背景的有界投影，不作为全球首现、末现、分化时间或连续谱系时长。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Garbani Channel 跗骨通过有边界的比较回归与系统发育分析被归入 Purgatorius；这些孤立骨骼不能确立灵长目冠群成员身份或祖先关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
本资料代表蒙大拿州 Garbani Channel 动物群，不把该地点样本外推为 Purgatorius 的全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
跗骨关节形态支持树栖运动推断，但食性、惯常基底利用和行为仍未被观察。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
UCMP 197509 与 UCMP 197517 保存了踝部及足内翻特征，并以有牙齿关联材料的真灵长总目成员作定量比较。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
6,520 万至 6,440 万年前的区间是有边界的晚 Puercan 期样本背景，并非该属全球首次或末次出现、灵长目冠群年龄或连续延续时间。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The tarsals are not associated with teeth or one skeleton; taxonomic attribution, arboreality and a primate-side placement are inferences, not crown-Primate membership, direct ancestry or a global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
