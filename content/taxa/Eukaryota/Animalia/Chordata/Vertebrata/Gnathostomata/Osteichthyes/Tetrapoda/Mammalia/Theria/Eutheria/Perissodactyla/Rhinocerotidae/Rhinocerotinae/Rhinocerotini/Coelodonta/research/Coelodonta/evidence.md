---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:43197
    scientificName: Coelodonta
    commonName: Woolly rhinoceros
    commonNameZh: 披毛犀
    rank: genus
    parentName: Rhinocerotidae
    extinct: true
    geography:
      - Tibetan Plateau and East Asia
      - Northern Eurasia
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
    confidence: high
    referenceIds:
      - ma-2024-coelodonta-paleoecology
      - gudjonsdottir-2026-coelodonta
      - liu-2021-rhinoceros-genomes
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ma-2024-coelodonta-paleoecology + gudjonsdottir-2026-coelodonta locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ma-2024-coelodonta-paleoecology
          relation: supports
          pages: 1–12
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Evolutionary-history review and species-specific diet sections distinguish C. antiquitatis from C. nihowanensis
        - referenceId: gudjonsdottir-2026-coelodonta
          relation: supports
          pages: 1–8
          figure: Figures 1–3; Supplementary Tables
          quoteLocator: Directly dated 14.4 ka specimen, genome-wide diversity and runs-of-homozygosity results
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
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
      reviewedAgainstReferenceVersion: ma-2024-coelodonta-paleoecology locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ma-2024-coelodonta-paleoecology
          relation: supports
          pages: 1–12
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Evolutionary-history review and species-specific diet sections distinguish C. antiquitatis from C. nihowanensis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ma-2024-coelodonta-paleoecology locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ma-2024-coelodonta-paleoecology
          relation: supports
          pages: 1–12
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Evolutionary-history review and species-specific diet sections distinguish C. antiquitatis from C. nihowanensis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ma-2024-coelodonta-paleoecology locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ma-2024-coelodonta-paleoecology
          relation: supports
          pages: 1–12
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Evolutionary-history review and species-specific diet sections distinguish C. antiquitatis from C. nihowanensis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
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
      reviewedAgainstReferenceVersion: ma-2024-coelodonta-paleoecology locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ma-2024-coelodonta-paleoecology
          relation: supports
          pages: 1–12
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Evolutionary-history review and species-specific diet sections distinguish C. antiquitatis from C. nihowanensis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
      claimType: fossil-range
      claimKind: scientific
      statement:
        markdown: evidence.md
        field: /records/claims/5/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/5/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: ma-2024 + gudjonsdottir-2026 locator audit at 2026-08-31
      referenceLinks:
        - referenceId: ma-2024-coelodonta-paleoecology
          relation: supports
          pages: 1–15
          figure: Figures 1–6; Tables 1–2
          quoteLocator: Evolutionary-history review identifies C. thibetana at 5.08 Ma as the earliest known genus record
        - referenceId: gudjonsdottir-2026-coelodonta
          relation: supports
          pages: 1–8
          figure: Figures 1–3; Supplementary Tables
          quoteLocator: Directly dated 14.4 ka C. antiquitatis individual
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta
      rangeKind: global-composite
      taxonomicConcept: Coelodonta earliest-reviewed occurrence to directly dated late-individual navigation envelope
      geographicScope: Tibetan Plateau earliest record and directly dated Siberian late individual
      olderMa: 5.08
      youngerMa: 0.0144
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/Rhinocerotidae/Rhinocerotinae/Rhinocerotini/Coelodonta/research/Coelodonta/evidence.md#/records/claims/5
      referenceLocators:
        - referenceId: ma-2024-coelodonta-paleoecology
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
        - referenceId: gudjonsdottir-2026-coelodonta
          locator: pp. 1–8; Figures 1–3 and Supplementary Tables; directly dated 14.4 ka C. antiquitatis individual
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Coelodonta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A directly dated 14.4 ka Coelodonta antiquitatis genome constrains one late northern Eurasian individual and its population metrics; it does not establish the genus-wide or global fossil last appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The genome study directly dates and analyzes one late individual. High confidence applies to that bounded result, while the wording explicitly separates it from a genus-wide or global extinction boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Coelodonta is treated as a rhinocerotid genus whose species include ecologically distinct Tibetan, East Asian and northern Eurasian samples.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The systematic review explicitly compares multiple Coelodonta species, preventing C. antiquitatis from standing for the entire genus.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
For C. antiquitatis, long hair and dense underwool, a low head posture, long nasal horn and high-crowned teeth are reviewed as cold and grazing adaptations; they are not assigned unchanged to every Coelodonta species.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The review ties the morphological suite to C. antiquitatis and comparative literature, so the claim retains that species boundary.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
Northern Eurasian C. antiquitatis is supported as a typical cold-adapted grazer, whereas some C. nihowanensis isotope samples indicate mixed feeding; genus ecology is therefore variable.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The review integrates multiple isotope and morphology studies and explicitly reports the contrasting species and locality signals.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
The review traces Coelodonta from the Tibetan Plateau and East Asia into northern Eurasia; this is a study synthesis, not a claim that every species occupied the full range simultaneously.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The source’s spatiotemporal review and maps directly support the bounded biogeographic wording.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/5/statement -->
The 5.08–0.0144 Ma Coelodonta display connects the reviewed earliest known C. thibetana occurrence to one directly dated 14.4 ka C. antiquitatis individual and is not a global genus FAD/LAD.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/5/confidenceRationale -->
The systematic review and directly dated genomic specimen independently support the two represented records, while neither proves exact genus-wide origination or extinction.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
基因组研究直接测年并分析了一个晚期个体。高置信度适用于这一有边界的结果；措辞明确把它与属级或全球灭绝边界分开。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
分类主张以所引主研究或系统综述中的明确分类与样本为界，不把导航父级写成直接祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
形态主张只保留引文图表或诊断直接支持的骨骼、牙齿性状，并把软组织、姿势或功能解释明确标为推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
生态主张区分直接测得的磨耗或同位素信号与栖息地、行为推断，并保留物种、地点和时代边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
生物地理主张按论文实际覆盖的地点和区域表述，不把区域样本扩写为完整全球分布。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/5 -->
系统综述与直接测年的基因组标本分别支持两个代表记录，但均不能证明属级精确起源或灭绝。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
披毛犀属按所引系统研究采用当前分类层级；导航父级仅表示分类关联，不表示直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
披毛犀属的形态档案仅记录所引研究直接描述或测量的牙齿、颅骨或肢骨性状，功能解释另行标注。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
披毛犀属的生态档案按取样物种、地点与方法限定食性和运动推断，不把局部结果推广为整个类群的固定生态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
披毛犀属的地理档案只覆盖所引研究明确讨论的区域与地点，并非完整的全球产出分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
一件直接测年为 1.44 万年前的披毛犀基因组约束了一个北欧亚晚期个体及其种群指标；它不能确定属级或全球化石末次出现。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/5 -->
5.08–0.0144 Ma 的披毛犀属显示连接综述中的最早已知西藏披毛犀记录与一个直接测年为 14.4 ka 的披毛犀个体，并非该属全球首现或末现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The 14.4 ka individual is not asserted to be the global last appearance of the genus.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A systematic review identifies Coelodonta thibetana at 5.08 Ma as the earliest known genus record, while a genomic primary study directly dates a Coelodonta antiquitatis individual to 14.4 ka.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 1–15; Introduction and evolutionary-history review; Figures 1–6; Tables 1–2; earliest known C. thibetana record at 5.08 Ma
<!-- /evo:text -->
