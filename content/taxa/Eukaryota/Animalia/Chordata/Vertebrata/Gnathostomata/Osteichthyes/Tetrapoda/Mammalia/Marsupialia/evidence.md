---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Marsupialia
    commonName: Marsupials
    commonNameZh: 有袋类
    rank: infraclass
    taxonId: txn:247806
    firstAppearance: 65.18
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      referenceLinks:
        - referenceId: horovitz-2009-earliest-marsupials
          relation: supports
          pages: 4:e8278
          figure: Figures 1–5; Tables 1–2; Supporting Information
          quoteLocator: Cranial anatomy; cladistic analysis; fossil record and calibration discussion
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia
      rangeKind: global-composite
      taxonomicConcept: Marsupialia sampled crown minimum and living continuation
      geographicScope: Early Paleocene North American Peradectes record; living global continuation
      olderMa: 65.18
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: horovitz-2009-earliest-marsupials
          locator: Article e8278; Figures 1–5; Tables 1–2; Supporting Information
      evidenceLevel: literature-synthesized
  catalogue-profile:
    scientificName: Marsupialia
    rank: infraclass
    sourceDatasetId: null
    name:
      zh: Marsupialia
      en: Marsupialia
    checkedAt: 2026-10-02
    sections:
      - topic: overview
        sourceIds:
          - pbdbMammaliaTaxonomy20261002
          - pbdbMammaliaOccurrences20261002
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
          - pbdbMammaliaOccurrences20261002
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
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaTaxonomy20261002
          usage:
            title: PBDB classification — Marsupialia
            url: https://paleobiodb.org/data1.2/taxa/single.json?id=247806
            locator: Recorded PBDB parent closure beneath the already documented Mammalia COL-compatible storage anchor.
          originalFields:
            - id
            - title
            - url
            - version
            - license
            - locator
        - referenceId: ref-d9daed02-7dc5-41b7-9cb9-616d52f8b19a
          metadataVariant: 0
          sourceKey: pbdbMammaliaOccurrences20261002
          usage:
            locator: 2026-10-02 recorded hierarchy and this batch’s selected member occurrence rows.
            accessedAt: 2026-10-02
            pbdbTaxonId: txn:247806
            readingTargets:
              - name: Wirunodon chanku
                pbdbTaxonId: txn:276032
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia/Wirunodon/Wirunodon_chanku
              - name: Pilkipildra taylori
                pbdbTaxonId: txn:247824
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia/Diprotodonta/Petauroidea/Pilkipildridae/Pilkipildra/Pilkipildra_taylori
              - name: Djilgaringa gillespiei
                pbdbTaxonId: txn:247820
                canonicalPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Marsupialia/Diprotodonta/Petauroidea/Pilkipildridae/Djilgaringa/Djilgaringa_gillespiei
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

# Marsupialia

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Peradectes-based analyses place a sampled crown-marsupial record by about 65.18 Ma, anchoring the 65.18–0 Ma Marsupialia route; crown placement and biogeographic inferences are analysis-dependent and not an origin date.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary study combines new cranial anatomy with a broad cladistic analysis and states the calibration consequence. The route uses that sampled minimum while withholding a crown-origination claim.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手研究把新的头骨解剖与广泛支序分析结合，并明确说明校准意义；路线采用该取样最低记录，同时不提出冠群起源主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
基于 Peradectes 的分析把所取样有袋类冠群记录置于约 65.18 Ma，从而锚定 65.18–0 Ma 的有袋类路线；冠群位置及生物地理推断依赖分析，并非起源日期。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Approximately 65.18 Ma depends on Peradectes crown placement in the cited morphology analysis; it is a sampled minimum, not a crown-origin date.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Cranial anatomy and a broad cladistic analysis place peradectids near living opossums and expose the resulting crown calibration.
<!-- /evo:text -->
