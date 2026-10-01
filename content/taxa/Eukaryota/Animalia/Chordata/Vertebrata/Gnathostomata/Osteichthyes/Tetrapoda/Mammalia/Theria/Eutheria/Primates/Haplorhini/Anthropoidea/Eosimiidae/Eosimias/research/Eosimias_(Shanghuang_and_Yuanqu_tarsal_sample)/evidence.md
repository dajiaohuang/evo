---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:92597
    scientificName: Eosimias (Shanghuang and Yuanqu tarsal sample)
    commonName: Middle Eocene isolated tarsal sample
    commonNameZh: 中始新世曙猿孤立跗骨样本
    rank: genus
    parentName: Anthropoidea
    extinct: true
    geography:
      - Shanghuang fissure fillings
      - Yuanqu Basin
      - China
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
      - gebo-2000-eosimias
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
        - referenceId: gebo-2000-eosimias
          metadataVariant: 0
          sourceKey: gebo-2000-eosimias
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
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorhini/Anthropoidea/Eosimiidae/Eosimias/research/Eosimias_(Shanghuang_and_Yuanqu_tarsal_sample)
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: gebo-2000-eosimias concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: gebo-2000-eosimias
          pages: 276–278
          figure: Figures 1–4
          quoteLocator: Specimen provenance; tarsal comparisons; phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorhini/Anthropoidea/Eosimiidae/Eosimias/research/Eosimias_(Shanghuang_and_Yuanqu_tarsal_sample)
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Gebo et al. 2000 DOI 10.1038/35005066; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: gebo-2000-eosimias
          relation: supports
          pages: 276–278
          figure: Figure 1; Supplementary Tables 1–2
          quoteLocator: Isolated tarsal attribution and sampled anthropoid-affinity character analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorhini/Anthropoidea/Eosimiidae/Eosimias/research/Eosimias_(Shanghuang_and_Yuanqu_tarsal_sample)
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Gebo et al. 2000 DOI 10.1038/35005066; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: gebo-2000-eosimias
          relation: supports
          pages: 276–278
          figure: Figure 1
          quoteLocator: Shanghuang and Yuanqu provenance of the described isolated tarsals
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorhini/Anthropoidea/Eosimiidae/Eosimias/research/Eosimias_(Shanghuang_and_Yuanqu_tarsal_sample)
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Gebo et al. 2000 DOI 10.1038/35005066; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: gebo-2000-eosimias
          relation: supports
          pages: 276–278
          figure: Figure 1; Supplementary Tables 1–2
          quoteLocator: Anatomical description and character comparison; no direct diet, habitat or behaviour dataset
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorhini/Anthropoidea/Eosimiidae/Eosimias/research/Eosimias_(Shanghuang_and_Yuanqu_tarsal_sample)
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: "Evo Atlas issue #189 primary-source audit"
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: Gebo et al. 2000 DOI 10.1038/35005066; concrete locator audited 2026-09-01
      referenceLinks:
        - referenceId: gebo-2000-eosimias
          relation: supports
          pages: 276–278
          figure: Figure 1; Supplementary Tables 1–2
          quoteLocator: Calcaneal and talar anatomy; character mosaic; absence of dental association
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorhini/Anthropoidea/Eosimiidae/Eosimias/research/Eosimias_(Shanghuang_and_Yuanqu_tarsal_sample)
      rangeKind: global-composite
      taxonomicConcept: Eosimias isolated-tarsal anthropoid test occurrence
      geographicScope: Shanghuang fissure fillings, Jiangsu, China; Yuanqu Basin, Shanxi, China
      olderMa: 45
      youngerMa: 40.5
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
        - content/events/Eosimias_isolated-tarsal_anthropoid_test/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: gebo-2000-eosimias
          locator: 276–278; Figures 1–4; Supplementary Tables 1–2
      reviewStatus: automated-audit-passed
---

# Eosimias (Shanghuang and Yuanqu tarsal sample)

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Isolated Shanghuang and Yuanqu tarsals and their comparative character-matrix test; not a dentally associated skeleton.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
Shanghuang 与垣曲孤立跗骨及其比较特征矩阵检验；没有与牙齿相连的骨架。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Eosimias is bounded by isolated tarsals and dental comparisons from Chinese middle Eocene fissure fills and basins, approximately 45–40.5 Ma; the tarsals are not dentally associated, so the interval is not a secure global genus range or crown membership.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The specimens and broad locality ages are direct, while anatomical association and anthropoid placement are inferential.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Gebo and colleagues attribute isolated Shanghuang and Yuanqu calcanei and tali to Eosimias and recover anthropoid affinity in their sampled character analysis; the bones are not dentally associated skeletons or demonstrated direct ancestors.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The attribution and matrix result are published, but specimen association and higher-level placement remain comparative inferences rather than direct observations.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The profiled Eosimias tarsals come from the Shanghuang fissure fillings and Yuanqu Basin in China; these sampled localities do not establish a complete distribution for the genus.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary report names both locality samples, while its anatomical comparison is not a geographic presence-or-absence survey.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The isolated Eosimias tarsals support anatomical comparison but do not directly record diet, habitual habitat, observed locomotion, population body size or ecological guild; these fields remain bounded or unresolved here.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The study reports ankle-bone anatomy and character comparisons, not behavioural or ecological observations, so the profile does not promote functional possibilities into direct evidence.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The Shanghuang and Yuanqu sample consists of isolated calcanei and tali with a mosaic of characters used in an anthropoid-affinity test; the study does not document a complete associated foot or dental-postcranial association.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The named bones and scored characters are direct evidence, while whole-foot reconstruction and taxonomic association beyond the isolated material remain inferential.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
标本和宽泛地点年龄属于直接证据，而解剖关联与类人猿位置属于推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
归属和矩阵结果已经发表，但标本关联和高阶位置仍是比较推断，而非直接观察。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
一手报道列出两个地点样本，但其解剖比较不是地理存在—缺失调查。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
研究报告踝骨解剖和性状比较，并非行为或生态观察，因此档案不把功能可能性提升为直接证据。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
具名骨骼及评分性状属于直接证据；完整足部复原和超出孤立材料的分类关联仍属推断。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Eosimias 由中国中始新世裂隙充填与盆地中的孤立跗骨和牙齿比较约束，约为 4500 万—4050 万年前；跗骨未与牙齿关联，因此该区间不是可靠的全球属级范围或冠群成员证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Gebo 等人将上黄和垣曲的孤立跟骨与距骨归入曙猿属，并在其采样性状分析中恢复出类人猿亲缘；这些骨骼并非与牙齿关联的骨架，也不是经证实的直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
本档案中的曙猿跗骨来自中国上黄裂隙充填物和垣曲盆地；这些采样地点不能确立该属的完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
孤立的曙猿跗骨支持解剖比较，但并未直接记录食性、惯常栖息地、已观察运动、种群体型或生态类群；这些字段在此保持有限或未定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
上黄和垣曲样本由孤立的跟骨与距骨组成，其镶嵌性状被用于类人猿亲缘检验；研究没有记录完整关联足部或牙齿—颅后骨关联。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The tarsals are not dentally associated with Eosimias, the fissure-fill age is broad, and anthropoid status is a character-matrix inference rather than crown membership or a global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Named specimen or explicitly bounded dataset and its stratigraphic, radiometric or model context in the cited primary study.
<!-- /evo:text -->
