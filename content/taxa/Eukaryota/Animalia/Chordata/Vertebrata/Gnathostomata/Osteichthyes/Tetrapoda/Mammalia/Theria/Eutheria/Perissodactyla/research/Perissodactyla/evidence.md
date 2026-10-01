---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:106418
    scientificName: Perissodactyla
    commonName: Odd-toed ungulates
    commonNameZh: 奇蹄目
    rank: order
    parentName: Laurasiatheria
    extinct: false
    geography:
      - Holarctic continents (early fossil record)
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
    evidenceSummary:
      markdown: page.en.md
      field: /records/atlas-profile/evidenceSummary
    confidence: medium
    referenceIds:
      - pnas-2026-perissodactyls
      - prothero-2009-hoofed-transitions
      - amnh-perissodactyl-evolution
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: pnas-2026-perissodactyls + prothero-2009-hoofed-transitions locator audit at 2026-08-31
      referenceLinks:
        - referenceId: pnas-2026-perissodactyls
          relation: supports
          pages: 1–6 of 8
          figure: Figures 1 and 3; Dataset S2
          quoteLocator: Abstract and Introduction (p. 1), stem placements (p. 4), occurrence calibration and unresolved origin (p. 6)
        - referenceId: prothero-2009-hoofed-transitions
          relation: supports
          pages: 290–294
          figure: Figure 1
          quoteLocator: “The Perissodactyls” and early-radiation synthesis; family divergence is traced from dental and cranial comparisons
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
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
      reviewedAgainstReferenceVersion: pnas-2026-perissodactyls + prothero-2009-hoofed-transitions locator audit at 2026-08-31
      referenceLinks:
        - referenceId: pnas-2026-perissodactyls
          relation: supports
          pages: 1–6 of 8
          figure: Figures 1 and 3; Dataset S2
          quoteLocator: Abstract and Introduction (p. 1), stem placements (p. 4), occurrence calibration and unresolved origin (p. 6)
        - referenceId: prothero-2009-hoofed-transitions
          relation: supports
          pages: 290–294
          figure: Figure 1
          quoteLocator: “The Perissodactyls” and early-radiation synthesis; family divergence is traced from dental and cranial comparisons
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Tissier and Smith 2026 DOI 10.1073/pnas.2519690122; audited for 2026.08-static-v5-rc42
      referenceLinks:
        - referenceId: pnas-2026-perissodactyls
          relation: supports
          pages: 1–6 of 8
          figure: Figures 1 and 3; Dataset S2
          quoteLocator:
            markdown: evidence.md
            field: /records/claims/2/referenceLinks/0/quoteLocator
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
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
      reviewedAgainstReferenceVersion: prothero-2009-hoofed-transitions locator audit at 2026-08-31
      referenceLinks:
        - referenceId: prothero-2009-hoofed-transitions
          relation: supports
          pages: 290–294
          figure: Figure 1
          quoteLocator: “The Perissodactyls” and early-radiation synthesis; family divergence is traced from dental and cranial comparisons
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas maintainer source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: prothero-2009-hoofed-transitions locator audit at 2026-08-31
      referenceLinks:
        - referenceId: prothero-2009-hoofed-transitions
          relation: supports
          pages: 290–294
          figure: Figure 1
          quoteLocator: “The Perissodactyls” and early-radiation synthesis; family divergence is traced from dental and cranial comparisons
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
  editorial-decisions:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
      decisionType: content-scope
      statement:
        markdown: evidence.md
        field: /records/editorial-decisions/0/statement
      rationale:
        markdown: evidence.md
        field: /records/editorial-decisions/0/rationale
      decidedAt: 2026-08-19
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla
      rangeKind: global-composite
      taxonomicConcept: Perissodactyla total-group sampled fossil-to-living navigation envelope
      geographicScope: PETM occurrences across North America, Europe and Asia; living global continuation
      olderMa: 56
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Perissodactyla/research/Perissodactyla/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: pnas-2026-perissodactyls
          locator:
            markdown: evidence.md
            field: /records/ranges/0/referenceLocators/0/locator
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Perissodactyla

## claims / statement

<!-- evo:text /records/claims/0/statement -->
PETM perissodactyl records imply rapid dispersal among northern landmasses, while sparse sampling and analysis-dependent stem placements leave the order’s place of origin unresolved.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary analysis directly constrains the earliest sample and geographic pattern. Medium confidence retains its unresolved-origin conclusion and the sensitivity of basal placements to sampling and character analysis.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Perissodactyla is treated as the order containing living horses, tapirs and rhinoceroses plus diverse extinct branches; basal fossil placements remain analysis-dependent.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary matrix and synthesis support the order concept and its major branches, while both caution against a simple linear ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The Perissodactyla navigation envelope uses the earliest-known basal and stem-perissodactyl records during the PETM at approximately 56 Ma as its older evidence anchor and living horses, tapirs and rhinoceroses at 0 Ma as its younger edge; it is a total-group navigation span, not a crown-node date, precisely observed origin or divergence, complete global first appearance or ancestral lineage.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The primary study analyzes 71 terminals and 102 morphological characters, plots the earliest known occurrences from 56 to 54 Ma and identifies stem-perissodactyl placements while stating that the order's origin remains unresolved. Medium confidence preserves the analysis-dependent placement of basal taxa, the already-diverse first sample and geographic sampling limits.
<!-- /evo:text -->

## claims / referenceLinks / quoteLocator

<!-- evo:text /records/claims/2/referenceLinks/0/quoteLocator -->
p. 1 Abstract and Introduction: PETM first sample; p. 4: stem-perissodactyl placement; p. 6: occurrence calibration, ghost lineages and unresolved origin
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
The order-level profile records early dental and cranial similarity followed by strong lineage-specific divergence; it does not assert one foot, tooth or digestive condition for every fossil branch.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
The synthesis directly compares early teeth and skulls and then documents divergent lineage histories. Medium confidence reflects the breadth of the order.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
Perissodactyls were terrestrial herbivores spanning small early forms to giant rhinocerotoids and later browsing, mixed-feeding and grazing lineages; these states evolved in separate branches rather than as one progression.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The systematic synthesis supports broad ecological disparity, but an order-wide profile cannot substitute for species-level paleoecology.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究直接约束最早样本和地理格局。中等置信度保留其起源未决的结论，以及基部位置对取样和字符分析的敏感性。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
分类主张以所引主研究或系统综述中的明确分类与样本为界，不把导航父级写成直接祖先。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
主研究分析了 71 个末端和 102 个形态字符，绘制了约 5600 万至 5400 万年前的最早已知记录，并识别出若干干群奇蹄类位置，同时明确指出奇蹄目的起源仍未解决。中等置信度保留了基部类群位置随分析而变、首次取样时已经多样化以及地理取样有限等边界。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
形态主张只保留引文图表或诊断直接支持的骨骼、牙齿性状，并把软组织、姿势或功能解释明确标为推断。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
生态主张区分直接测得的磨耗或同位素信号与栖息地、行为推断，并保留物种、地点和时代边界。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
奇蹄目导航范围以约 5600 万年前古新世—始新世界线极热事件期间最早已知的基干与干群奇蹄类记录作为老端证据锚点，以 0 Ma 的现生马、貘和犀牛作为年轻端；这是总群导航跨度，不是冠群节点年代、被直接观测的精确起源或分化、完整全球首现或祖先谱系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
奇蹄目按所引系统研究采用当前分类层级；导航父级仅表示分类关联，不表示直接祖先。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
奇蹄目的形态档案仅记录所引研究直接描述或测量的牙齿、颅骨或肢骨性状，功能解释另行标注。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
奇蹄目的生态档案按取样物种、地点与方法限定食性和运动推断，不把局部结果推广为整个类群的固定生态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
PETM 时期的奇蹄类记录提示它们在北方大陆间快速扩散；但取样稀疏且干群位置随分析而变，奇蹄目的起源地仍未解决。
<!-- /evo:text -->

## editorial-decisions / statement

<!-- evo:text /records/editorial-decisions/0/statement -->
Perissodactyla is the first curated flagship evidence package; this does not imply equivalent profile coverage for the full navigation ontology.
<!-- /evo:text -->

## editorial-decisions / rationale

<!-- evo:text /records/editorial-decisions/0/rationale -->
The package has scoped topology, calibration and profile evidence that is not yet available for every atlas branch.
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
56 Ma is the rounded PETM age of the earliest sampled perissodactyl record in the cited analysis. It is not a crown-node age, total-group origin, molecular divergence estimate or complete global first-appearance survey.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A 71-terminal, 102-character analysis and its occurrence chart document diverse basal perissodactyls at the PETM; living horses, tapirs and rhinoceroses supply the present-day navigation endpoint.
<!-- /evo:text -->

## ranges / referenceLocators / locator

<!-- evo:text /records/ranges/0/referenceLocators/0/locator -->
pp. 1–6 of 8; p. 1 Abstract and Introduction; Figure 1; p. 4 stem-perissodactyl discussion; Figure 3; p. 6 unresolved-origin discussion; Dataset S2
<!-- /evo:text -->
