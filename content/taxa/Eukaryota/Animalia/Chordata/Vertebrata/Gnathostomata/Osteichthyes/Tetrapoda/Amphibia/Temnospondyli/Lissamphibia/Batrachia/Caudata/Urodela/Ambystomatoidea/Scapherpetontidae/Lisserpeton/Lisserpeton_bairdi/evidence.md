---
schemaVersion: 1
kind: evidence
records:
  pbdb-fossil-reader:
    scientificName: Lisserpeton bairdi
    rank: species
    sourceTaxonId: txn:67756
    name:
      en: Lisserpeton bairdi
      zh: Lisserpeton bairdi
    reviewStatus: source-linked
    checkedAt: 2026-10-02
    sections:
      - topic: taxonomy
        title:
          en: Recorded fossil concept
          zh: 来源记载的化石概念
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/0/text/zh
        sourceIds:
          - pbdb
      - topic: fossil
        title:
          en: Fossil occurrence evidence
          zh: 化石出现记录
        text:
          en:
            markdown: page.en.md
            field: /records/pbdb-fossil-reader/sections/1/text/en
          zh:
            markdown: page.zh.md
            field: /records/pbdb-fossil-reader/sections/1/text/zh
        sourceIds:
          - pbdb
      - topic: overview
        readerSectionKind: amphibia-collection-placeholder
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
        sourceIds:
          - amphibia-collection-status
    sources:
      referenceBindings:
        - referenceId: ref-f1e3d50c-c9eb-48f1-8ba8-098589af8953
          metadataVariant: 0
          sourceKey: pbdb
          usage:
            locator:
              markdown: evidence.md
              field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator
            scope:
              en:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en
              zh:
                markdown: evidence.md
                field: /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh
          originalFields:
            - id
            - title
            - authors
            - version
            - url
            - accessedAt
            - license
            - licenseAssessment
            - rightsEvidenceUrl
            - licenseAppliesTo
            - attribution
            - locator
            - scope
        - referenceId: ref-amphibia-collection-index-2026-10-03
          metadataVariant: 0
          sourceKey: amphibia-collection-status
          usage:
            locator: docs/amphibia-content/reference-index.md
          originalFields:
            - id
            - title
            - url
            - locator
            - scope
    originalBibliography: R. Estes. 1965. A new fossil salamander from Montana and Wyoming. Copeia 1965(1):90-95
    occurrenceEvidence:
      - occurrenceId: occ:148939
        collectionId: col:13142
        acceptedTaxonId: txn:67756
        identifiedName: Lisserpeton bairdi n. gen. n. sp.
        taxonomicDifference: null
        referenceId: ref:4377
        bibliography: R. Estes. 1965. A new fossil salamander from Montana and Wyoming. Copeia 1965(1):90-95
        locality:
          countryCode: US
          stateProvince: Montana
          county: McCone County
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:291025
        collectionId: col:14640
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:717
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography
        locality:
          countryCode: US
          stateProvince: Colorado
          county: Weld
        stratigraphy:
          group: null
          formation: Laramie
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:464130
        collectionId: col:14585
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:4381
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Niobrara
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:464355
        collectionId: col:14514
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:1129
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Sweetwater
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:480370
        collectionId: col:14458
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:17857
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Natrona
        stratigraphy:
          group: null
          formation: Mesaverde
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:483636
        collectionId: col:14505
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:4377
        bibliography: R. Estes. 1965. A new fossil salamander from Montana and Wyoming. Copeia 1965(1):90-95
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Niobrara
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:488075
        collectionId: col:14549
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:820
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: Upper
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:520519
        collectionId: col:14912
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:14358
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Park
        stratigraphy:
          group: null
          formation: null
          member: null
        olderAgeMa: 63.4
        youngerAgeMa: 60.9
      - occurrenceId: occ:520522
        collectionId: col:15017
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:14358
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Big Horn
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 60.9
        youngerAgeMa: 57.5
      - occurrenceId: occ:521028
        collectionId: col:14621
        acceptedTaxonId: txn:67756
        identifiedName: Lisserpeton cf. bairdi
        taxonomicDifference: null
        referenceId: ref:1921
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Morton
        stratigraphy:
          group: Montana
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:521324
        collectionId: col:14766
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:3489
        bibliography: L. M. Van Valen and R. E. Sloan. 1965. The earliest primates. Science 150(3697):743-745
        locality:
          countryCode: US
          stateProvince: Montana
          county: McCone
        stratigraphy:
          group: null
          formation: Tullock
          member: Collins Ranch
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:649696
        collectionId: col:14874
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:23573
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Carter
        stratigraphy:
          group: null
          formation: Fort Union
          member: Ekalaka
        olderAgeMa: 63.4
        youngerAgeMa: 60.9
      - occurrenceId: occ:796334
        collectionId: col:14519
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:4377
        bibliography: R. Estes. 1965. A new fossil salamander from Montana and Wyoming. Copeia 1965(1):90-95
        locality:
          countryCode: US
          stateProvince: Wyoming
          county: Niobrara
        stratigraphy:
          group: null
          formation: Lance
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395719
        collectionId: col:14798
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Fort Union
          member: Tullock
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395724
        collectionId: col:14666
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:820
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Fort Union
          member: Tullock
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395732
        collectionId: col:141585
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Slope
        stratigraphy:
          group: null
          formation: Fort Union
          member: null
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1395758
        collectionId: col:144499
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395779
        collectionId: col:144503
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395780
        collectionId: col:144501
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395781
        collectionId: col:192242
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Hell Creek
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1395835
        collectionId: col:14463
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography
        locality:
          countryCode: CA
          stateProvince: Alberta
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1525657
        collectionId: col:213589
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Logan
        stratigraphy:
          group: null
          formation: Fox Hills
          member: null
        olderAgeMa: 72.2
        youngerAgeMa: 66
      - occurrenceId: occ:1548608
        collectionId: col:218649
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:65027
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography
        locality:
          countryCode: US
          stateProvince: Montana
          county: Garfield
        stratigraphy:
          group: null
          formation: Fort Union
          member: Tullock
        olderAgeMa: 66
        youngerAgeMa: 63.4
      - occurrenceId: occ:1625129
        collectionId: col:229975
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:84522
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography
        locality:
          countryCode: CA
          stateProvince: Saskatchewan
          county: null
        stratigraphy:
          group: Belly River
          formation: Dinosaur Park
          member: null
        olderAgeMa: 83.6
        youngerAgeMa: 72.2
      - occurrenceId: occ:1633246
        collectionId: col:231469
        acceptedTaxonId: txn:67756
        taxonomicDifference: null
        referenceId: ref:85695
        bibliography:
          markdown: evidence.md
          field: /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography
        locality:
          countryCode: US
          stateProvince: North Dakota
          county: Logan
        stratigraphy:
          group: Montana
          formation: Fox Hills
          member: Timber Lake
        olderAgeMa: 72.2
        youngerAgeMa: 66
    limitations:
      en:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/en
      zh:
        markdown: evidence.md
        field: /records/pbdb-fossil-reader/limitations/zh
  amphibia-collection-placeholder:
    name:
      en: Lisserpeton bairdi
      zh: Lisserpeton bairdi
    sections:
      - topic: overview
        title:
          en: Research text pending
          zh: 研究正文待整理
        text:
          en:
            markdown: page.en.md
            field: /records/amphibia-collection-placeholder/sections/0/text/en
          zh:
            markdown: page.zh.md
            field: /records/amphibia-collection-placeholder/sections/0/text/zh
    collectionLedgerPath: docs/amphibia-content/full-roster-literature-collection.json
    concepts:
      - authority: PBDB snapshot2026-10-02
        id: txn:67756
        rank: species
    placeholder: true
    biologicalSynthesisComplete: false
    referenceDiscovery:
      manifestPath: data/sources/snapshots/amphibia-reference-index-2026-10-03/manifest.json
      manifestSha256: d5227da702ed5e82e19f4aa185861dfd63b3338019ae771f4a141d7811edb0ec
      documentationPath: docs/amphibia-content/reference-index.md
      queryBindings:
        - file: data/sources/snapshots/amphibia-reference-index-2026-10-03/query-bindings-00019.json.gz
          field: /records/152
          queryName: Lisserpeton bairdi
          queryKind: accepted-name
          queryComplete: true
          referenceCount: 2
          biologicalClaimsAssigned: false
      additionalReferenceIndexes:
        - data/sources/snapshots/amphibia-cited-reference-index-2026-10-03/manifest.json
      indexPhaseComplete: true
      biologicalClaimsAssigned: false
      conceptEquivalenceCertified: false
    sourceCollectionComplete: true
---

# Lisserpeton bairdi

## referenceBindings / usage / locator

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/locator -->
Taxon txn:67756; exact tid occurrence rows in data/sources/snapshots/amphibia-content-scope-2026-10-02/pbdb-fossil-occurrences.json
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/en -->
PBDB-recorded taxon concept, parent chain and database occurrence summaries. Not a synthesis of the original publications.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/pbdb-fossil-reader/sources/referenceBindings/0/usage/scope/zh -->
PBDB 记载的分类概念、父链及数据库出现记录概括；未综合原出版物的研究内容。
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/1/bibliography -->
K. Carpenter. 1979. Vertebrate fauna of the Laramie Formation (Maestrichtian), Weld County, Colorado. Contributions to Geology, University of Wyoming 17(1):37-49
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/2/bibliography -->
R. Estes, P. Berberian, and C. A. M. Meszoely. 1969. Lower vertebrates from the Late Cretaceous Hell Creek Formation, McCone County, Montana. Breviora 337:1-33
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/3/bibliography -->
B. H. Breithaupt. 1982. Paleontology and paleoecology of the Lance Formation (Maastrichtian), east flank of Rock Springs Uplift, Sweetwater County, Wyoming. Contributions to Geology, University of Wyoming 21(2):123-151
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/4/bibliography -->
D. G. DeMar, Jr. and B. H. Breithaupt. 2006. The nonmammalian vertebrate microfossil assemblages of the Mesaverde Formation (Upper Cretaceous, Campanian) of the Wind River and Bighorn Basins, Wyoming.  In S. G. Lucas and R. M. Sullivan (eds.), Late Cretaceous Vertebrates from the Western Interior. New Mexico Museum of Natural History and Science Bulletin 35:33-54
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/6/bibliography -->
L. J. Bryant. 1989. Non-dinosaurian lower vertebrates across the Cretaceous-Tertiary boundary in northeastern Montana. University of California Publications in Geological Sciences 134:1-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/7/bibliography -->
D. W. Krause. 1980. Early Tertiary amphibians from the Bighorn Basin, Wyoming. University of Michigan Papers on Paleontology 243:69-71
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/8/bibliography -->
D. W. Krause. 1980. Early Tertiary amphibians from the Bighorn Basin, Wyoming. University of Michigan Papers on Paleontology 243:69-71
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/9/bibliography -->
J. W. Hoganson, J. M. Campbell, and E. C. Murphy. 1994. Stratigraphy and paleontology of the Cretaceous Hell Creek Formation, Stumpf site, Morton County, North Dakota. Proceedings of the North Dakota Academy of Sciences 48:95
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/11/bibliography -->
R. Estes. 1976. Middle Paleocene lower vertebrates from the Tongue River Formation, southeastern Montana. Journal of Paleontology 50(3):500-520
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/13/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/14/bibliography -->
L. J. Bryant. 1989. Non-dinosaurian lower vertebrates across the Cretaceous-Tertiary boundary in northeastern Montana. University of California Publications in Geological Sciences 134:1-107
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/15/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/16/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/17/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/18/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/19/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/20/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/21/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/22/bibliography -->
J. D. Gardner and D. G. DeMar. 2013. Mesozoic and Palaeocene lissamphibian assemblages of North America: a comprehensive review. Palaeobiodiversity and Palaeoenvironments 93:459-515
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/23/bibliography -->
M. M. Gilbert, E. L. Bamforth, and L. A. Buatois, R. W. Renaut. 2018. Paleoecology and sedimentology of a vertebrate microfossil assemblage from the easternmost Dinosaur Park Formation (Late Cretaceous, Upper Campanian,) Saskatchewan, Canada: reconstructing diversity in a coastal ecosystem. Palaeogeography, Palaeoclimatology, Palaeoecology 495:227-244
<!-- /evo:text -->

## pbdb-fossil-reader / occurrenceEvidence / bibliography

<!-- evo:text /records/pbdb-fossil-reader/occurrenceEvidence/24/bibliography -->
J. W. Hoganson, J. M. Erickson, and F. D. Holland. 2007. Amphibian, reptilian, and avian remains from the Fox Hills Formation (Maastrichtian): shoreline and estuarine deposits of the Pierre Sea in south-central North Dakota.  In J. E. Martin & J. C. Parris (ed.), The Geology and Paleontology of the Late Cretaceous Marine Deposits of the Dakotas. Geological Society of America Special Paper. Geological Society of America. 427:239-256
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/en -->
A source-bounded fossil database reader. Morphology, life history, ecology and phylogenetic claims from original publications remain to be reviewed; no external expert review is claimed.
<!-- /evo:text -->

## pbdb-fossil-reader / limitations

<!-- evo:text /records/pbdb-fossil-reader/limitations/zh -->
本页是限定来源范围的化石数据库读本。原出版物中的形态、生活史、生态及系统发育主张仍待核对；没有外部专家审评。
<!-- /evo:text -->
