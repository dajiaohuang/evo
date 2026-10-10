---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Rhynchocephalia
    commonName: Tuatara lineage
    commonNameZh: 喙头类
    rank: order
    taxonId: txn:54194
    firstAppearance: 238
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: herrera-flores-2017-rhynchocephalia
          relation: supports
          pages: 319–328
          figure: Figures 1–4
          quoteLocator: Abstract; Materials and methods; diversity and disparity results; Discussion
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      referenceLinks:
        - relation: supports
          referenceId: herrera-flores-2017-rhynchocephalia
          pages: 319–328
          figure: Figures 1–4; time-scaled phylogeny
          quoteLocator: Fossil diversity, disparity and living Sphenodon sample
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia
      rangeKind: global-composite
      taxonomicConcept: Rhynchocephalia time-scaled study sample
      geographicScope: Fossil taxa plus living Sphenodon in Herrera-Flores et al. 2017
      olderMa: 238
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: herrera-flores-2017-rhynchocephalia
          locator: 319–328; Figures 1–4; time-scaled phylogeny; Fossil diversity, disparity and living Sphenodon sample
  catalogue-profile:
    scientificName: Rhynchocephalia
    rank: order
    sourceDatasetId: null
    name:
      zh: Rhynchocephalia
      en: Rhynchocephalia
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbRhynchocephaliaTaxonomy20261002
          - pbdbRhynchocephaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/0/text/en
      - topic: readingPath
        sourceIds:
          - pbdbRhynchocephaliaOccurrences20261002
          - pbdbOccurrenceFields20261002
        text:
          zh:
            markdown: page.zh.md
            field: /records/catalogue-profile/sections/1/text/zh
          en:
            markdown: page.en.md
            field: /records/catalogue-profile/sections/1/text/en
    sources:
      referenceBindings:
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbRhynchocephaliaTaxonomy20261002
          usage:
            title: PBDB classification — Rhynchocephalia
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=54194
            locator: Recorded PBDB parent closure beneath the already documented Rhynchocephalia COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-675a7fe7-4458-476e-a876-7fe5a3a30c4a
          metadataVariant: 0
          sourceKey: pbdbRhynchocephaliaOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:54194
            readingTargets:
              - name: Colobops noviportensis
                pbdbTaxonId: txn:371876
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia/Colobops/Colobops_noviportensis
              - name: Oenosaurus muehlheimensis
                pbdbTaxonId: txn:249546
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia/Sphenodontidae/Oenosaurus/Oenosaurus_muehlheimensis
              - name: Tika giacchinoi
                pbdbTaxonId: txn:458377
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia/Sphenodontidae/Sphenodontinae/Tika/Tika_giacchinoi
              - name: Navajosphenodon sani
                pbdbTaxonId: txn:462103
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia/Sphenodontidae/Sphenodontinae/Navajosphenodon/Navajosphenodon_sani
              - name: Sphenofontis velserae
                pbdbTaxonId: txn:438182
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Reptilia/Neodiapsida/Sauria/Lepidosauromorpha/Lepidosauria/Rhynchocephalia/Sphenodontidae/Sphenodontinae/Sphenofontis/Sphenofontis_velserae
            scope:
              zh: 本批物种出现记录的阅读路径，不是整个类群的生态总结。
              en: Reading path through this batch’s species occurrence records, not a whole-group ecological summary.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - pbdbTaxonId
            - readingTargets
            - scope
        - referenceId: ref-c4887d31-ff09-4384-b816-a87cb63d0c54
          metadataVariant: 0
          sourceKey: pbdbOccurrenceFields20261002
          usage:
            locator: "occs/list_doc.html: accepted_no/name; identified_name/modifiers; max_ma/min_ma; collection fields; env, strat and ctaph output blocks; taxa/list_doc.html: parent and app fields."
            accessedAt: 2026-10-02
            scope:
              zh: 解释数据库出现、采集、年代与层位字段，不替代原论文或标本复核。
              en: Interpret database occurrence, collection, age and strata fields; not a substitute for original papers or specimen review.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
            - accessedAt
            - scope
    limitations:
      zh:
        markdown: page.zh.md
        field: /records/catalogue-profile/limitations/zh
      en:
        markdown: page.en.md
        field: /records/catalogue-profile/limitations/en
---

# Rhynchocephalia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Rhynchocephalia is represented as a formerly diverse sampled radiation with Sphenodon as its sole living lineage; quantitative disparity results do not make the tuatara an unchanged ancestor or a proxy for every fossil member.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study directly compiles diversity and morphological-disparity data through time. High confidence applies to the sampled pattern and living relict status, not to complete fossil coverage.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The time-scaled Rhynchocephalia dataset spans Late Triassic fossils to living Sphenodon, supporting a rounded 238 Ma–present study-sample window rather than an exact global FAD or unchanged lineage claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Rhynchocephalia time-scaled study sample: the cited primary study or systematic review directly supports the stated sample, calibration or withholding boundary at the supplied locator. Confidence is medium and does not extend to a global FAD, LAD, direct ancestor or unsampled interval.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究直接汇编了随时间变化的多样性与形态差异数据。高置信度仅适用于取样格局和现生孑遗状态，不代表化石记录完整。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
Rhynchocephalia time-scaled study sample：所引一手研究或高质量系统综述在给定页码、图表或章节处直接支持此处的样本、校准或暂缓边界。置信度为中等。该置信度不外推至全球首现、全球末现、直接祖先或未采样区间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
喙头目在此表示为一个曾经多样化的取样辐射，现仅剩楔齿蜥支系；定量形态差异结果并不把楔齿蜥视为不变祖先或所有化石成员的替身。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
喙头类时间标定数据集从晚三叠世化石延伸到现生楔齿蜥，支持取整的 2.38 亿年前至今研究样本窗口，而非精确全球首现或“未变化谱系”主张。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older edge is a stage-rounded boundary for the study’s time-scaled sample, not a global FAD.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The route spans sampled fossils to living Sphenodon while rejecting the unchanged living-fossil narrative.
<!-- /evo:text -->
