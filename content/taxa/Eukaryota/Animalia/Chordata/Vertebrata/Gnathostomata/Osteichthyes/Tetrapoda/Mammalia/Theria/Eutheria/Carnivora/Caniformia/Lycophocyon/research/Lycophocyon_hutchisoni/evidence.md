---
schemaVersion: 1
kind: evidence
records:
  atlas-profile:
    pbdbTaxonId: txn:240059
    scientificName: Lycophocyon hutchisoni
    commonName: Lycophocyon
    commonNameZh: 狼形兽
    rank: genus
    parentName: Carnivoraformes dossier route
    extinct: true
    geography:
      - Santiago Formation, member C
      - San Diego County, California
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
      - tomiya-2011-lycophocyon
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Lycophocyon/research/Lycophocyon_hutchisoni
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
      reviewedAgainstReferenceVersion: tomiya-2011-lycophocyon concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: tomiya-2011-lycophocyon
          pages: Article e24146
          figure: Figures 2–7
          quoteLocator: Holotype and paratypes; Phylogenetic analysis
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Lycophocyon/research/Lycophocyon_hutchisoni
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: tomiya-2011-lycophocyon primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: tomiya-2011-lycophocyon
          relation: supports
          pages: 13–16
          figure: Figure 8; Appendix S3
          quoteLocator: Cladistic Analysis; 50-taxon and Paleogene-only analyses
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Lycophocyon/research/Lycophocyon_hutchisoni
      claimKind: scientific
      claimType: biogeography
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: tomiya-2011-lycophocyon primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: tomiya-2011-lycophocyon
          relation: supports
          pages: 2–3
          quoteLocator: Distribution; Holotype locality; Paratypes
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Lycophocyon/research/Lycophocyon_hutchisoni
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/3/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/3/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: tomiya-2011-lycophocyon primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: tomiya-2011-lycophocyon
          relation: supports
          pages: 2–3
          figure: Figures 2–6
          quoteLocator: Holotype; Paratypes
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Lycophocyon/research/Lycophocyon_hutchisoni
      claimKind: scientific
      claimType: ecology
      statement:
        markdown: evidence.md
        field: /records/claims/4/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/4/confidenceRationale
      reviewedBy: Evo Atlas data maintenance
      reviewedAt: 2026-09-01
      reviewedAgainstReferenceVersion: tomiya-2011-lycophocyon primary-study locator checked for 2026.09 carnivora profile expansion
      referenceLinks:
        - referenceId: tomiya-2011-lycophocyon
          relation: supports
          pages: 13–14
          figure: Figure 7; Table 3
          quoteLocator: Dietary Inference
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Gnathostomata/Osteichthyes/Tetrapoda/Mammalia/Theria/Eutheria/Carnivora/Caniformia/Lycophocyon/research/Lycophocyon_hutchisoni
      rangeKind: global-composite
      taxonomicConcept: Lycophocyon hutchisoni sampled occurrence
      geographicScope: Southern California, USA
      olderMa: 46.2
      youngerMa: 42
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
        - content/events/Lycophocyon_holotype_and_basal-caniform_test/evidence.md#/records/claims/0
      referenceLocators:
        - referenceId: tomiya-2011-lycophocyon
          locator: e24146; Figures 2–7; Tables 1–3; Appendices S1–S3; Holotype and paratypes; Phylogenetic analysis; Dietary habits
      reviewStatus: automated-audit-passed
---

# Lycophocyon hutchisoni

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Lycophocyon hutchisoni is bounded by holotype cranium UCMP 85202 and associated paratype skeletons from southern California within an approximately 46.2–42 Ma sample envelope; this is not a direct ancestry date or complete genus duration.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Named specimens and comparative anatomy are direct; the basal caniform position and dietary interpretation remain matrix- and proxy-dependent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Tomiya's Paleogene-only morphology subset recovers Lycophocyon hutchisoni on the caniform branch outside crown Canoidea, whereas the broader analysis does not resolve its nearby carnivoramorphan relationships.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The named specimens and both analytical outcomes are explicit; placement is matrix- and sample-dependent.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
The named Lycophocyon material is reported from member C of the Santiago Formation in San Diego County, California; these localities do not establish a genus-wide North American distribution.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
The formation, county and specimen localities are directly listed, without extrapolating their geographic scope.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/3/statement -->
UCMP 85202 preserves craniodental material, while associated SDSNH specimens include cranial, mandibular and selected postcranial elements.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/3/confidenceRationale -->
This is limited to the specimen list and does not infer whole-body performance.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/4/statement -->
A six-variable discriminant classifier predicts carnivory for the holotype with 83% posterior probability, but this comparative model does not observe feeding, habitat, locomotion or an ecological guild.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/4/confidenceRationale -->
The paper reports the model and its probability, while the profile preserves its observational limits.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
具名标本和两项分析结果均有明确记录；系统位置依赖矩阵与取样。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
产地、地层与标本地点由原始研究直接列出，且未外推其地理范围。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
形态陈述限于已列出的颅齿、下颌和颅后标本，不推断整体运动能力。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/3 -->
论文报告模型及其概率，而档案保留其非观察性限制。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/4 -->
具名标本与比较解剖属于直接证据；基干犬型类位置和食性解释仍依赖矩阵与代理指标。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Lycophocyon hutchisoni 由南加州的正模头骨 UCMP 85202 与关联副模骨架约束，处于约 4620 万—4200 万年前的样本区间；这不是直接祖先日期或完整属级延续。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
Tomiya 的古近纪限定形态子集将 Lycophocyon hutchisoni 恢复在犬型类支系、犬总科冠群之外，而更广泛的分析未能解析其邻近的食肉形类关系。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
具名 Lycophocyon 材料报道自美国加利福尼亚州圣迭戈县圣地亚哥组 C 段；这些地点不能确立该属覆盖北美的完整分布。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/3 -->
UCMP 85202 保存颅齿材料，相关 SDSNH 标本则包括颅骨、下颌和若干颅后骨骼。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/4 -->
六变量判别分类器以 83% 后验概率预测正模为食肉性，但该比较模型并未观察取食、栖息地、运动或生态类群。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
This is a study-level sampled occurrence envelope, not a direct date on ancestry or a guaranteed global first or last appearance.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Holotype UCMP 85202 supplies the cranium and dentition; associated paratypes SDSNH 107446 and SDSNH 107447 add postcranial anatomy.
<!-- /evo:text -->
