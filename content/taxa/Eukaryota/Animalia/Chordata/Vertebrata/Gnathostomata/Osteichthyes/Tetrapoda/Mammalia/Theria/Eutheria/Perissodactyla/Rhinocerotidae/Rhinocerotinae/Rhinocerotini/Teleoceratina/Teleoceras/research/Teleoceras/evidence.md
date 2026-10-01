---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:43226
    scientificName: Teleoceras
    commonName: Barrel-bodied rhino
    commonNameZh: 短腿犀
    rank: genus
    parentName: Rhinocerotidae
    extinct: true
    geography:
      - Florida (studied populations)
      - Ashfall, Nebraska (T. major sample)
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
      - markdown: page.en.md
        field: /records/atlas-profile/traits/3
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: contested
    referenceIds:
      - macfadden-1998-teleoceras
      - ward-2024-teleoceras
      - ward-2025-teleoceras
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: contested
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: macfadden-1998-teleoceras + ward-2025-teleoceras locator audit at 2026-08-31
      referenceLinks:
        - referenceId: macfadden-1998-teleoceras
          relation: supports
          pages: 274–286
          figure: Figures 1–5; Tables 1–3
          quoteLocator: Florida enamel-isotope results and discussion of principally terrestrial Teleoceras populations
        - referenceId: ward-2025-teleoceras
          relation: supports
          pages: 1–10
          figure: Figures 1–6; Supplementary Data
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/0/referenceLinks/1/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: macfadden-1998-teleoceras + ward-2025-teleoceras locator audit at 2026-08-31
      referenceLinks:
        - referenceId: macfadden-1998-teleoceras
          relation: supports
          pages: 274–286
          figure: Figures 1–5; Tables 1–3
          quoteLocator: Florida enamel-isotope results and discussion of principally terrestrial Teleoceras populations
        - referenceId: ward-2025-teleoceras
          relation: supports
          pages: 1–10
          figure: Figures 1–6; Supplementary Data
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/1/referenceLinks/1/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ward-2025-teleoceras locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ward-2025-teleoceras
          relation: supports
          pages: 1–10
          figure: Figures 1–6; Supplementary Data
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/2/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ward-2025-teleoceras locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ward-2025-teleoceras
          relation: supports
          pages: 1–10
          figure: Figures 1–6; Supplementary Data
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/3/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: macfadden-1998-teleoceras + ward-2025-teleoceras locator audit at 2026-08-31
      referenceLinks:
        - referenceId: macfadden-1998-teleoceras
          relation: supports
          pages: 274–286
          figure: Figures 1–5; Tables 1–3
          quoteLocator: Florida enamel-isotope results and discussion of principally terrestrial Teleoceras populations
        - referenceId: ward-2025-teleoceras
          relation: supports
          pages: 1–10
          figure: Figures 1–6; Supplementary Data
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/4/referenceLinks/1/quoteLocator
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras
      rangeKind: global-composite
      taxonomicConcept: Teleoceras major North American Clarendonian occurrence envelope
      geographicScope: North America, including Ashfall Fossil Beds
      olderMa: 12.5
      youngerMa: 10
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Teleoceratina/Teleoceras/research/Teleoceras/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: ward-2025-teleoceras
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Teleoceras

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Teleoceras ecology is locality- and species-dependent: Florida isotope data favor principally terrestrial populations, whereas the 11.86 Ma Ashfall T. major sample shows limited mobility and supports wet-habitat or semi-aquatic interpretation.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Independent primary studies produce a genuine regional contrast. Contested confidence records that contrast and avoids choosing genus-wide behavior from barrel-shaped proportions alone.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/0/referenceLinks/1/quoteLocator -->
Abstract; Teleoceras major morphology and 12.5–10 Ma regional context; 13-adult isotope sample and limited-mobility results
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Teleoceras is treated as a North American rhinocerotid genus, while the strongest Ashfall conclusions are restricted to T. major.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary Florida and Ashfall studies identify genus and species samples explicitly.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/1/referenceLinks/1/quoteLocator -->
Abstract; Teleoceras major morphology and 12.5–10 Ma regional context; 13-adult isotope sample and limited-mobility results
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The atlas displays a 12.5–10 Ma North American Clarendonian occurrence envelope for Teleoceras major, including the 11.86 ± 0.13 Ma Ashfall sample, rather than a global genus range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary study directly states the regional species interval and sampled-site age, while the geographic and taxonomic qualifiers prevent genus-wide extrapolation.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/2/referenceLinks/0/quoteLocator -->
Abstract; Teleoceras major morphology and 12.5–10 Ma regional context; 13-adult isotope sample and limited-mobility results
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Teleoceras is characterized by shortened limb and foot bones and hypsodont molars; the Ashfall T. major sample is short-legged and barrel-bodied, while a universal small nasal horn is not asserted.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The cited primary study states these genus and sample characters; unsupported horn generalization was removed.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/3/referenceLinks/0/quoteLocator -->
Abstract; Teleoceras major morphology and 12.5–10 Ma regional context; 13-adult isotope sample and limited-mobility results
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The evidence profile represents North American Florida and Nebraska study populations rather than a complete occurrence map for Teleoceras.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The two isotope studies directly establish those localities and the intentionally bounded scope.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/4/referenceLinks/1/quoteLocator -->
Abstract; Teleoceras major morphology and 12.5–10 Ma regional context; 13-adult isotope sample and limited-mobility results
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
独立主研究产生了真实的区域差异。争议置信度记录这种差异，并避免仅凭桶状体形为整个属选择一种生态。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
分类主张以所引主研究或系统综述中的明确分类与样本为界，不把导航父级写成直接祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
主研究直接给出区域物种区间与采样地点年龄；地域和分类限定避免外推为全球属级范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
形态主张只保留引文图表或诊断直接支持的骨骼、牙齿性状，并把软组织、姿势或功能解释明确标为推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
生物地理主张按论文实际覆盖的地点和区域表述，不把区域样本扩写为完整全球分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
短腿犀的生态随地点和物种而异：佛罗里达同位素数据倾向于主要陆生，而距今 1186 万年的 Ashfall 大短腿犀样本显示活动范围有限，并支持湿地或半水生解释。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
短腿犀属按所引系统研究采用当前分类层级；导航父级仅表示分类关联，不表示直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
短腿犀属的形态档案仅记录所引研究直接描述或测量的牙齿、颅骨或肢骨性状，功能解释另行标注。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
短腿犀属的地理档案只覆盖所引研究明确讨论的区域与地点，并非完整的全球产出分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
图集显示北美 Clarendonian 阶段 12.5–10 Ma 的 Teleoceras major 区域记录包络，其中包含 11.86 ± 0.13 Ma 的 Ashfall 样本，而非该属的全球范围。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a regional species envelope; the Ashfall site itself is dated to 11.86 ± 0.13 Ma.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The primary isotope study places North American Teleoceras major within the Clarendonian at 12.5–10 Ma and directly dates the sampled Ashfall site to 11.86 ± 0.13 Ma.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 1–10; Abstract and Predictions of mobility; Figures 1–6 and Supplementary Data; T. major 12.5–10 Ma regional context and 11.86 ± 0.13 Ma Ashfall site
<!-- /evo:text -->
