---
schemaVersion: 1
kind: evidence
records:
  catalogue-profile:
    scientificName: Aptenodytes forsteri G. R. Gray, 1844
    rank: species
    sourceDatasetId: "2144"
    name:
      zh: 皇帝企鹅
      en: Emperor Penguin
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/0/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/0/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/1/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/1/sourceIds/0
      - topic:
          markdown: page.en.md
          field: /records/catalogue-profile/sections/2/topic
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/2/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/2/text/en
        sourceIds:
          - markdown: page.en.md
            field: /records/catalogue-profile/sections/2/sourceIds/0
    sources:
      referenceBindings:
        - referenceId: ref-0bbed3a8-d515-89c1-a714-5a1db5a15675
          metadataVariant: 0
          sourceKey: cristofari2016
          usage:
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 0
          sourceKey: taxonomy
          usage:
            title:
              zh: Catalogue of Life COL26.8 · source 2144
              en: Catalogue of Life COL26.8 · source 2144
            url: https://www.checklistbank.org/dataset/316115/taxon/FYD9
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-3bbf7114-5345-8b88-a1b0-e68a720f121c
          metadataVariant: 0
          sourceKey: iucn2026
          usage:
            locator: Assessment Information; Red List Category & Criteria; Date Assessed; Justification
            scope:
              zh:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh
              en:
                markdown: evidence.md
                field: /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en
          originalFields:
            - id
            - title
            - url
            - version
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
  catalogue-dossier:
    scientificName: Aptenodytes forsteri G. R. Gray, 1844
    rank: species
    sourceDatasetId: "2144"
    checkedAt: 2026-09-24
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild: Wild/free-living study material is used where explicitly stated; claim-level sampling and seasonal limits are retained.
      domesticated: No domestication claim is made. Captive or managed observations are not substituted for wild populations.
      fossil: Fossil occurrences and geological ages have not been assessed; extant-bird studies are not treated as fossil evidence.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 13
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/FYD9
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Pinned accepted taxon usage FYD9; local node fields name, authorship, rank, status, sourceDatasetId, and parentId
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-1a8509a2-7ed0-8eff-af32-927570e4d91b
          metadataVariant: 0
          sourceKey: sosa2018
          usage:
            locator: Abstract; journal pages 225-235; SEDICI repository record handle 10915/104871
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            licenseAssessment: unknown
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-3106bd91-9bb4-8267-a6dd-8fb3d1d7ffc8
          metadataVariant: 0
          sourceKey: groscolas1986
          usage:
            locator: Abstract; annual cycle sampling from arrival at breeding grounds through reproduction and molt
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            licenseAssessment: unknown
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-ffdf43e2-0ae8-8563-aad9-88cd27412787
          metadataVariant: 0
          sourceKey: gales1990
          usage:
            locator: Abstract; adult stomach-content sample during chick-rearing, August-October 1986
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
            licenseAssessment: unknown
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-d37eb634-7121-8fda-a6c5-530b394c159c
          metadataVariant: 0
          sourceKey: cristofari2016
          usage:
            locator: Abstract; Results, Genome-wide SNP typing; Methods, Sample collection and DNA extraction; Discussion; Fig. 1
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/4/usage/scope
            licenseAssessment: item-level-verified
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-3bbf7114-5345-8b88-a1b0-e68a720f121c
          metadataVariant: 0
          sourceKey: iucn2026
          usage:
            locator: Assessment Information; Red List Category & Criteria; Date Assessed; Justification
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/5/usage/scope
            licenseAssessment: unknown
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            sourceIds:
              - sosa2018
            locator: Abstract; journal pages 225-235
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh
            sourceIds:
              - groscolas1986
            locator: Abstract; annual-cycle sampling across breeding and molt
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/lifeHistory/gaps/0
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - gales1990
            locator: Abstract; Antarctic Science 2(1):23-28
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/textZh
            sourceIds:
              - cristofari2016
            locator: Abstract; Results, Genome-wide SNP typing; Discussion; Methods, Sample collection
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/evolution/gaps/0
      distribution:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/textZh
            sourceIds:
              - cristofari2016
            locator: Results, Genome-wide SNP typing; Methods, Sample collection; Fig. 1a
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/distribution/gaps/0
      fossil:
        status: not-assessed
      conservation:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/textZh
            sourceIds:
              - iucn2026
            locator: Assessment Information; Red List Category & Criteria; Date Assessed; Justification
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus
            translationStatus: Machine-translated factual paraphrase; not a source text and not independently reviewed.
            originalLanguage: en
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/conservation/gaps/0
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
      reviewers: []
      reviewDigest: null
---

# Aptenodytes forsteri

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/zh -->
CC BY 4.0 遗传研究；110 只个体、六个东南极繁殖群，样本采于 2004–2012 年。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/0/usage/scope/en -->
CC BY 4.0 genetic study; 110 individuals from six East Antarctic colonies, sampled in 2004–2012.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/zh -->
固定版本中的接受名、作者、等级和分类父链；不支持生物学正文。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/1/usage/scope/en -->
Pinned accepted name, authorship, rank, and parent classification; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/zh -->
支持 2026 年 2 月 26 日评估日期、IUCN 预发布状态、濒危等级和全球种群指数/模型预测摘要；不是当前个体总数普查。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-profile/sources/referenceBindings/2/usage/scope/en -->
Supports the 2026-02-26 assessment date, its IUCN pre-publication status, Endangered category, and summary of global population indices and model projections; not a current count of individuals.
<!-- /evo:text -->

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Pinned COL26.8 hierarchy node FYD9 was checked for exact accepted name, authorship, species rank, accepted status, and sourceDatasetId against the release registry. Each biological paper explicitly names Aptenodytes forsteri; none assigns the COL usage ID, so the record makes no additional synonym or population-to-global concept claim.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal accepted species usage FYD9 in COL26.8 (parent 62D22). Source claims retain their study population, sample, and locality scope; they are not extended across unstated subspecies or populations.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source dataset 2144 ITIS
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted-name identity, authorship, rank, status, parent, and source-dataset relation only; not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Comparative dissections/descriptions of crania and mandibles from chicks, juveniles, and adults; sample geography and population representativeness are not specified in the repository abstract.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Free-living males and females of Emperor and Adélie penguins; claim is limited to the Emperor penguin component and annual reproductive/molt sampling. Sampling localities are not stated in the abstract.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Adult stomach contents from one colony at Amanda Bay during part of chick-rearing season; does not establish annual, range-wide, or all-age diet.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/4/usage/scope -->
Genome-wide RAD sequencing from 110 individuals at six East Antarctic colonies; coalescent-based demographic/migration inference averaged across generations, not an instantaneous present-day migration rate.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/5/usage/scope -->
Global species-level Red List assessment as marked pre-publication; the assessment date and provisional publication state are retained.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
A comparative dissection study examined emperor-penguin crania and mandibles at chick, juvenile, and adult stages and reported age-group differences in head musculature and postnatal change in bill-to-cranium proportions.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
一项比较解剖研究检查了皇帝企鹅雏鸟、幼鸟和成鸟的头骨与下颌，并报告不同年龄组的头部肌肉存在差异，喙与颅骨的比例也随出生后发育而变化。
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Chicks, juveniles, and adults; collection geography, sexes, measurement protocol detail, and population sampling frame are not specified in the abstract.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Specimens are treated as anatomical material; wild/captive provenance is not specified in the repository abstract.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Sex-specific external measurements, population variation, diagnostic performance, and a specimen-level sampling frame have not been synthesized.
<!-- /evo:text -->

## lifeHistory / claims / text

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/text -->
In a seasonal endocrine study of free-living male and female emperor penguins, plasma LH and gonadal steroid levels rose above basal levels on arrival at breeding grounds and showed peaks near copulation, reported about 10-15 days before egg laying; this describes hormone timing, not a complete life cycle.
<!-- /evo:text -->

## lifeHistory / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/textZh -->
一项针对野外雄性与雌性皇帝企鹅的季节性内分泌研究发现，抵达繁殖地时血浆促黄体生成素与性腺类固醇高于基础水平，并在交配期附近达到峰值；研究报告交配约在产卵前 10–15 天。该结果只描述激素时序，并非完整生活史。
<!-- /evo:text -->

## lifeHistory / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/placeTimeScope -->
Free-living males and females; arrival at breeding grounds, copulation, egg laying, and molt. Localities and sample counts are not provided in the abstract.
<!-- /evo:text -->

## lifeHistory / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/claims/0/lifeStatus -->
Wild/free-living animals, as stated by the source abstract.
<!-- /evo:text -->

## facets / lifeHistory / gaps

<!-- evo:text /records/catalogue-dossier/facets/lifeHistory/gaps/0 -->
Egg/chick development, survival, age at maturity, lifespan, and geographic/seasonal variation remain unreviewed as a full species-level life-history account.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
At Amanda Bay, adult stomach contents sampled during part of chick rearing from August to October 1986 were almost entirely fish; Antarctic silverfish was the main prey in that sample (78% by number and mass). The authors noted that emperor-penguin diet can vary with local topography and hydrology through prey availability.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
在 Amanda Bay，1986 年 8 至 10 月育雏期的一段时间内采集的成鸟胃内容物几乎全为鱼类；该样本中的主要猎物是南極银鱼（按数量和质量均占 78%）。作者指出，局地地形与水文会通过影响猎物可获得性，使皇帝企鹅的食谱发生变化。
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
One Amanda Bay colony, Princess Elizabeth Land, Antarctica; adult stomach contents during August-October 1986 chick-rearing period only.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Free-living adult birds; chick-rearing season.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Foraging across seasons, ages, colonies, prey interactions, and the species-wide ecological interaction network has not been synthesized.
<!-- /evo:text -->

## evolution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/text -->
Genome-wide RAD-SNP data from 110 emperor penguins at six East Antarctic colonies, analyzed with a coalescent migration model, supported strong inter-colony demographic coupling and the authors' single-population/synnome interpretation. Their inferred migration parameters average across generations and are not instantaneous current rates.
<!-- /evo:text -->

## evolution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/textZh -->
研究以東南極六個繁殖群的 110 隻皇帝企鵝取得全基因組 RAD-SNP 資料，並以共祖遷移模型分析；結果支持繁殖群之間存在較強的人口學連結，作者將其解釋為單一遺傳種群／synnome。推算的遷移參數是跨世代平均值，不能視為當前即時遷移率。
<!-- /evo:text -->

## evolution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/placeTimeScope -->
110 birds sampled from six East Antarctic colonies; source material collected 2004-2012; model estimates averaged over generations.
<!-- /evo:text -->

## evolution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/evolution/claims/0/lifeStatus -->
Breeding-colony samples from living or recently dead wild birds; individual biological status retained as source-specific.
<!-- /evo:text -->

## facets / evolution / gaps

<!-- evo:text /records/catalogue-dossier/facets/evolution/gaps/0 -->
The study does not replace a taxon-wide comparative phylogeny; later genomic estimates, model sensitivity, and uncertainty across independent analyses have not been systematically reconciled.
<!-- /evo:text -->

## distribution / claims / text

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/text -->
The Cristofari study sampled six emperor-penguin colonies that its authors described as representing the species' range: Cape Washington in the Ross Sea, Pointe Géologie and two Mertz colonies in East Antarctica, Atka Bay in Dronning Maud Land, and Halley Bay in the Weddell Sea. These are study sampling localities, not a complete current range polygon.
<!-- /evo:text -->

## distribution / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/textZh -->
Cristofari 等研究采样了六个皇帝企鹅繁殖群，作者称这些地点代表该种分布区：罗斯海的 Cape Washington、东南极的 Pointe Géologie 与两个 Mertz 繁殖群、毛德皇后地的 Atka Bay，以及威德尔海的 Halley Bay。这些地点说明研究采样范围，并非当前完整分布边界图。
<!-- /evo:text -->

## distribution / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/placeTimeScope -->
Six East Antarctic colonies sampled 2004-2012; the source's whole-range representation is reported as the authors' sampling frame.
<!-- /evo:text -->

## distribution / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/distribution/claims/0/lifeStatus -->
Wild breeding colonies.
<!-- /evo:text -->

## facets / distribution / gaps

<!-- evo:text /records/catalogue-dossier/facets/distribution/gaps/0 -->
A dated colony/locality inventory with breeding, non-breeding, seasonal, and unoccupied areas plus spatial uncertainty has not been assembled.
<!-- /evo:text -->

## conservation / claims / text

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/text -->
BirdLife International's global IUCN assessment was dated 2026-02-26 and is listed as an accepted pre-publication assessment for IUCN Red List 2026(2), category Endangered A3bc under version 3.1. The assessment uses satellite-derived population indices and climate-dependent projections; it is reported here with its pre-publication state and assessment date.
<!-- /evo:text -->

## conservation / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/textZh -->
BirdLife International 的全球 IUCN 评估日期为 2026 年 2 月 26 日，并作为已接受、待正式发布的 IUCN 红色名录 2026(2) 评估列出；其类别为 Endangered A3bc（3.1 版标准）。评估使用卫星影像推导的种群指数与依赖气候的预测。本档案保留其待正式发布状态和评估日期。
<!-- /evo:text -->

## conservation / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/placeTimeScope -->
Global assessment; assessed 2026-02-26; pre-publication IUCN Red List 2026(2) record as accessed 2026-09-24.
<!-- /evo:text -->

## conservation / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/conservation/claims/0/lifeStatus -->
Wild global population assessment.
<!-- /evo:text -->

## facets / conservation / gaps

<!-- evo:text /records/catalogue-dossier/facets/conservation/gaps/0 -->
The complete assessment rationale, regional risk variation, underlying abundance data, and comparison with earlier assessments have not been independently reviewed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Five facets contain bounded partial evidence; fossil evidence has not been assessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A reproducible systematic search, screening record, and full source-concept reconciliation have not been completed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No external expert review or independent review of the machine-generated Chinese paraphrases has been completed.
<!-- /evo:text -->
