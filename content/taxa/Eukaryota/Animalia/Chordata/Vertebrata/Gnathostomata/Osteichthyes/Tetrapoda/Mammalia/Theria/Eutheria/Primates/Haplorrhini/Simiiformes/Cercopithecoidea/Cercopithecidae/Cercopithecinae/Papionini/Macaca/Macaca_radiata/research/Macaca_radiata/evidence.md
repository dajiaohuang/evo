---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: null
    scientificName: Macaca radiata
    commonName: Bonnet Macaque
    commonNameZh: 冠猕猴
    rank: species
    parentName: Macaca
    extinct: false
    geography:
      - Mysore-connected roadside transects, Karnataka, India (comparative counts, 2003 and 2015; study site)
      - Parambikulam landscape, Kerala, India (one forest occupancy survey)
      - Southern Indian temple/tourist locations (historical site-status comparison)
      - markdown: evidence.md
        field: /records/atlas-profile/geography/3
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
    traits: []
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    readerLanguageStatus:
      en: draft-ready
      zh: draft-ready
    readerSections:
      - id: reading-introduction
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
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/0/text/zh
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/0/text/en
        sourceIds:
          - grunstra2018
          - erinjery2017
      - id: study-scope
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
          - col
          - erinjery2017
          - grunstra2018
      - id: forest-occupancy
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
          - erinjery2017
      - id: road-counts
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/3/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/3/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/3/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/3/text/zh
        sourceIds:
          - erinjery2017
      - id: human-use-sites
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/4/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/4/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/4/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/4/text/zh
        sourceIds:
          - erinjery2017
      - id: craniodental-comparison
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/5/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/5/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/5/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/5/text/zh
        sourceIds:
          - grunstra2018
      - id: remaining-questions
        title:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/6/title/en
            format: heading
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/6/title/zh
            format: heading
        text:
          en:
            markdown: page.en.md
            field: /records/atlas-profile/readerSections/6/text/en
          zh:
            markdown: page.zh.md
            field: /records/atlas-profile/readerSections/6/text/zh
        sourceIds:
          - erinjery2017
    readerSources:
      referenceBindings:
        - referenceId: ref-ab4fe3e2-5f4e-8db8-a130-e3c2a8c5023a
          metadataVariant: 2
          sourceKey: col
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
        - referenceId: erinjery-kumar-kumara-2017-bonnet-macaque-roadside
          metadataVariant: 0
          sourceKey: erinjery2017
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/1/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/1/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
        - referenceId: ref-50af144b-dba6-8939-ac97-7a548e4fcc55
          metadataVariant: 1
          sourceKey: grunstra2018
          usage:
            scope:
              en:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/2/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/atlas-profile/readerSources/referenceBindings/2/usage/scope/zh
          originalFields:
            - id
            - title
            - url
            - scope
    readerRelatedPages:
      - targetId: macaca_mulatta
        label:
          en: Rhesus macaque
          zh: 恒河猴
        context:
          en: Compare another Macaca species page.
          zh: 对照另一篇猕猴属物种页。
      - targetId: macaca_silenus
        label:
          en: Lion-tailed macaque
          zh: 狮尾猕猴
        context:
          en: Compare another Macaca species page.
          zh: 对照另一篇猕猴属物种页。
    readerLimitations:
      en:
        markdown: page.en.md
        field: /records/atlas-profile/readerLimitations/en
      zh:
        markdown: page.zh.md
        field: /records/atlas-profile/readerLimitations/zh
    confidence: medium
    referenceIds:
      - col-2026-checklistbank-316115
      - erinjery-kumar-kumara-2017-bonnet-macaque-roadside
      - dixit-zachariah-2018-bonnet-macaque-phylogeography
    traitsAssessmentStatus: not-assessed
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: erinjery-kumar-kumara-2017-bonnet-macaque-roadside
          relation: supports
          quoteLocator: Methods §2.6 Roadside survey; Results §3.5.1 Population dynamics.
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      referenceLinks:
        - referenceId: erinjery-kumar-kumara-2017-bonnet-macaque-roadside
          relation: supports
          quoteLocator: Methods §§2.3–2.4; Results §3.2 Occupancy modelling of bonnet macaques in forest areas.
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      referenceLinks:
        - referenceId: erinjery-kumar-kumara-2017-bonnet-macaque-roadside
          relation: supports
          quoteLocator: Methods §2.5 Survey of temple sites/tourist spots; Results §3.4.
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      referenceLinks:
        - referenceId: erinjery-kumar-kumara-2017-bonnet-macaque-roadside
          relation: supports
          quoteLocator: Results §3.5.1; Discussion, conservation recommendation for hillocks and selected temple/tourist locations.
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      referenceLinks:
        - referenceId: col-2026-checklistbank-316115
          relation: supports
          quoteLocator: Accepted species usage 3WWP2; accepted status, sourceDatasetId 2144 and parentId 5HYC.
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      referenceLinks:
        - referenceId: erinjery-kumar-kumara-2017-bonnet-macaque-roadside
          relation: supports
          quoteLocator: Methods §§2.3, 2.5–2.6; Results §§3.2, 3.4–3.5.
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      claimKind: scientific
      claimType: evolution
      statement:
        markdown: evidence.md
        field: /records/claims/6/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/6/confidenceRationale
      referenceLinks:
        - referenceId: dixit-zachariah-2018-bonnet-macaque-phylogeography
          relation: supports
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/6/referenceLinks/0/quoteLocator
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata
      rangeKind: global-composite
      taxonomicConcept: Macaca radiata accepted usage 3WWP2; numerical temporal range withheld
      geographicScope: No numerical geographic-temporal range exposed
      olderMa: 0
      youngerMa: 0
      status: withheld-pending-provenance
      uncertainty:
        olderMa: null
        youngerMa: null
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: col-2026-checklistbank-316115
          locator: COL26.8 dataset 316115; accepted usage 3WWP2 and parent classification (identity/classification only)
  field-claim-overrides:
    - firstAppearance:
        status: not-assessed
      lastAppearance:
        status: not-assessed
      geography:
        claimPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata/evidence.md#/records/claims/5
      overview:
        claimId: claim:taxon:macaca_radiata:biogeography-study-sites-2017
      evidenceSummary:
        claimId: claim:taxon:macaca_radiata:biogeography-study-sites-2017
      confidence:
        claimPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata/evidence.md#/records/claims/5
      ecology.diet:
        status: not-assessed
      ecology.habitat:
        claimPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Primates/Haplorrhini/Simiiformes/Cercopithecoidea/Cercopithecidae/Cercopithecinae/Papionini/Macaca/Macaca_radiata/research/Macaca_radiata/evidence.md#/records/claims/1
      ecology.locomotion:
        status: not-assessed
      ecology.bodySize:
        status: not-assessed
      ecology.guild:
        status: not-assessed
---

# Macaca radiata

## atlas-profile / geography

<!-- evo:text /records/atlas-profile/geography/3 -->
Southern India (82 fecal-derived host mtDNA D-loop sequences from 16 sampled locations; collected 2014–15; study sampling frame, not a range boundary)
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/en -->
Pinned accepted-name record only; not evidence for current distribution or status.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/0/usage/scope/zh -->
仅为固定版本接受名记录，不作为当前分布或保育状态的证据。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/1/usage/scope/en -->
Bounded local surveys and historical site comparisons; not a species-wide current census.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/1/usage/scope/zh -->
范围有限的地方调查与历史地点比较，不是全物种当前普查。
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/2/usage/scope/en -->
Interspecific comparison of 711 museum specimens across 12 species; 79 were M. radiata.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/atlas-profile/readerSources/referenceBindings/2/usage/scope/zh -->
12 种猕猴 711 件博物馆标本的种间比较；其中 79 件为 M. radiata。
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Along the surveyed roadsides connecting Mysore, India, reported total counts fell from 889 bonnet macaques in 2003 to 407 in 2015 (46% of the earlier count). The January–February 2015 resurvey covered 464 km, and roadside strips were defined within 15 m from the road centre on each side. These local roadside counts are not a species-wide abundance estimate or a causal test.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary paper reports the roadside counts, survey interval and route distance directly. The sample is local and habitat-specific, so it does not estimate the full species population or independently establish why counts changed.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
In the Parambikulam landscape of Kerala, the study detected 54 bonnet macaque groups in 33 of 64 sampled grid cells. A single-season occupancy model estimated mean cell occupancy at 0.51 ± 0.08 (SE) and detection probability at 0.25 ± 0.05 (SE). These are modelled results for one forest survey, not species-wide forest occupancy or abundance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The paper directly reports detections, the sampled grid count and model estimates. The estimate is limited to one forest landscape and its sampling/model frame.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
In its 2009–2015 temple/tourist-site comparison and historical site records, the study reported bonnet macaques at about 31% of assessed locations, reappearance after translocation in about 20% of cases, and elimination or disappearance at more than 48%. This is a historical site-status summary, not current range-wide occupancy or abundance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The article reports these proportions from its temple/tourist-site comparison, but the evidence is a historical site-status and encounter-rate sample rather than a current population survey across the species range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
For the surveyed southern Indian landscapes, the authors proposed selected vegetated hillocks and temple/tourist locations as possible conservation reserves, based partly on local roadside persistence at Chamundi Hill and declines on other monitored roads. This is a 2017 study recommendation, not a statutory designation, current threat category or range-wide recovery plan.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The paper explicitly makes this recommendation from monitored Mysore roadside sites. Its local evidence and 2017 date do not establish current formal status, legal designation or a range-wide conservation plan.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
COL26.8 ChecklistBank dataset 316115 accepts Macaca radiata (É. Geoffroy Saint-Hilaire, 1812) as species usage 3WWP2 (source dataset 2144), with accepted parent Macaca usage 5HYC. This identifies the pinned checklist usage; it does not independently review biological circumscription.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
Pinned COL26.8 dataset records this accepted species usage, source checklist and accepted parent directly. The claim is limited to that checklist classification.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The selected 2017 study sampled roads connected to Mysore, Karnataka, forest grid cells in the Parambikulam landscape of Kerala, and temple/tourist locations in southern India. These are locations from bounded sampling contexts, not a full current species-range boundary.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The article names these local sampling contexts. It does not inventory the present or historical full species range.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/6/statement -->
In a 2018 phylogeographic analysis of 82 fecal-derived Macaca radiata mitochondrial D-loop sequences sampled across 16 southern Indian locations, sampled wet-zone and dry-zone individuals did not form separate mtDNA clades, haplotypes showed no geographic clustering, and isolation by distance was weak and not significant (r = 0.298, p = 0.09). This single mitochondrial-marker result does not represent nuclear or genome-wide variation; the authors' proposed human-mediated translocation explanation is a hypothesis, not a demonstrated cause.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/6/confidenceRationale -->
The peer-reviewed paper reports the host D-loop sampling frame and these population-structure results. Confidence is bounded to that mitochondrial marker and sample: it does not establish nuclear or genome-wide structure, a full range-wide pattern, or the authors' proposed human-mediated cause.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/6/referenceLinks/0/quoteLocator -->
Methods—Host molecular data using fecal samples; Results—Phylogenetic analysis of host and Host haplotype network and IBD model; Discussion—Phylogeography of M. radiata.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
论文直接报告了特定道路路段的局地计数与复查距离；该范围受地点和栖息环境限制，不能作为全物种种群估计或单独的因果检验。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
论文直接报告单一森林景观中的网格检测与占域模型结果；该估计受局地采样及模型范围限制，不代表全物种森林占域或丰度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
论文报告的是历史寺庙/旅游点地点状态比例，不是当前调查或全分布区占域与丰度估计。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
这是 2017 年研究基于迈索尔监测路段提出的局地建议，不等于现行正式保护等级、法定保护地或全分布区恢复计划。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
固定版 COL26.8 ChecklistBank 数据集 316115 将 Macaca radiata（É. Geoffroy Saint-Hilaire，1812）接受为物种用名 3WWP2（来源清单 2144），其已接受父级为 Macaca 用名 5HYC。该声明标识固定清单中的分类用名，不独立评估生物学 circumscription。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
所选 2017 年研究在印度卡纳塔克邦迈索尔相连道路、喀拉拉邦 Parambikulam 景观的森林网格，以及南印度寺庙/旅游点取样。这些是有界调查样区，不是当前物种完整分布边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/6 -->
同行评审论文报告了宿主 D-loop 的取样范围及相应种群结构结果。结论仅限于该线粒体标记和样本，不能证明核基因组或全基因组结构、全分布区格局，也不能证明作者提出的人为转移因果解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在印度迈索尔相连道路的调查路段，路旁总计数从 2003 年的 889 只降至 2015 年的 407 只（为早期计数的 46%）。2015 年 1 月至 2 月的复查覆盖 464 公里；路旁调查带按道路中心线两侧各 15 米界定。这些局地计数不是全物种丰度估计，也不能单独检验下降原因。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
在喀拉拉邦 Parambikulam 景观，研究者在 64 个抽样网格中的 33 个网格检测到 54 个冠猕猴群体。单季占域模型估计网格平均占域率为 0.51 ± 0.08（标准误），检测概率为 0.25 ± 0.05（标准误）。这些是一个森林调查的模型结果，不代表全物种森林占域或丰度。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
在其 2009–2015 年寺庙/旅游点比较及历史地点记录中，研究报告约 31% 的调查地点发现冠猕猴；转移后约 20% 的地点重新出现，超过 48% 的地点则被清除或消失。这是历史地点状态汇总，不是当前全分布区占域或丰度。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
针对所调查的南印度景观，作者建议将部分植被良好的小山丘和寺庙/旅游点作为潜在保护地；建议部分依据是 Chamundi Hill 局地路边种群持续存在、其他受监测道路出现下降。这是 2017 年研究建议，不是法定保护地、现行威胁等级或全分布区恢复计划。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
固定版 COL26.8 ChecklistBank 数据集 316115 将 Macaca radiata（É. Geoffroy Saint-Hilaire，1812）接受为物种用名 3WWP2（来源清单 2144），其已接受父级为 Macaca 用名 5HYC。该声明标识固定清单中的分类用名，不独立评估物种的生物学界定。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
所选 2017 年研究在印度卡纳塔克邦迈索尔相连道路、喀拉拉邦 Parambikulam 景观的森林网格，以及南印度寺庙/旅游点取样。这些是有界调查样区，不是当前物种完整分布边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/6 -->
在一项 2018 年的系统地理研究中，研究者分析了来自印度南部 16 个地点的 82 份冠猕猴粪便样本衍生线粒体 D-loop 序列；样本中的湿区和旱区个体没有形成分开的 mtDNA 支系，单倍型未见地理聚集，隔离随距离关系较弱且不显著（r = 0.298，p = 0.09）。这项单一线粒体标记研究不能代表核基因组或全基因组变异；作者提出的人为转移解释仍是假说，研究并未证明其因果。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Zero values are non-display placeholders; no audited fossil-range endpoint is asserted for this selected living-taxon route.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The pinned COL26.8 checklist supports accepted identity and classification only; the selected local roadside study does not establish a fossil range or a wild-distribution inventory.
<!-- /evo:text -->
