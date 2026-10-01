---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Bryophyta
    commonName: Mosses (Bryophyta sensu stricto)
    commonNameZh: 藓类（狭义苔藓植物门）
    rank: phylum
    taxonId: txn:55134
    firstAppearance: 470
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Bryophyta
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated primary-source review
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Hübers and Kerp 2012 DOI 10.1130/G33122.1; author-uploaded full text inspected 2026-09-05
      referenceLinks:
        - referenceId: hubers-kerp-2012-oldest-mosses
          relation: supports
          figure: Figure 3A–B
          quoteLocator: "Moss remains from the Glösa flora: Type I description and concluding identification limitation; Figure 3 caption"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Plantae/Bryobiotina/Bryophyta
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Hübers and Kerp 2012 DOI 10.1130/G33122.1 checked for 2026.08-static-v5-rc39
      referenceLinks:
        - referenceId: hubers-kerp-2012-oldest-mosses
          relation: supports
          pages: 755–758
          figure: Figures 1–3
          quoteLocator: Abstract; geological setting and material; descriptions of three late Visean moss morphotypes
        - referenceId: ics-2026-06
          relation: contextualizes
          quoteLocator: Mississippian and Visean numerical boundaries used only to round the display anchor
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
    - entityPath: content/taxa/Eukaryota/Plantae/Bryobiotina/Bryophyta
      rangeKind: global-composite
      taxonomicConcept: Bryophyta sensu stricto (mosses)
      geographicScope: Eastern German late Visean moss sample to living mosses
      olderMa: 335
      youngerMa: 0
      status: available
      uncertainty:
        olderMa: 5
        youngerMa: 0
        note:
          markdown: evidence.md
          field: /records/ranges/0/uncertainty/note
      evidenceBasis:
        markdown: evidence.md
        field: /records/ranges/0/evidenceBasis
      confidence: medium
      claimPaths:
        - content/taxa/Eukaryota/Plantae/Bryobiotina/Bryophyta/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: hubers-kerp-2012-oldest-mosses
          locator: pp. 755–758; Figures 1–3
        - referenceId: ics-2026-06
          locator: Mississippian and Visean numerical boundary context
      reviewStatus: automated-audit-passed
      evidenceLevel: literature-synthesized
---

# Bryophyta

## claims / statement

<!-- evo:text /records/claims/0/statement -->
In the late Visean Glösa moss assemblage, Type I specimen KS27–074 is a nearly complete single-layered leaf with a central band of narrower cells and small pores in the periclinal walls; this fragmentary assemblage does not document complete plants or securely identify living moss taxa.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The Type I description and Figure 3A directly document leaf cellular anatomy, while the authors explicitly withhold further identification because the material is incomplete and limited.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
For Bryophyta sensu stricto, the root display begins with the late Visean moss remains described from eastern Germany, rounded to 335 Ma, and continues to living mosses; older cryptospores are not treated as crown-moss fossils.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary study directly documents three moss morphotypes and their late Visean setting, while fragmentary preservation and stage-to-number conversion limit precision. The 335 Ma endpoint is a rounded sampled anchor, not the origin of mosses.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
I 型描述及图 3A 直接记录了叶片的细胞解剖结构；作者因材料不完整且数量有限，明确未作进一步鉴定。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
主研究直接记录三种藓类形态型及其晚维宪期层位，但材料零碎且地层数值换算存在精度限制；3.35 亿年前是取整的采样锚点，不是藓类起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
在晚维宪期 Glösa 苔藓化石组合中，I 型标本 KS27–074 是一片近乎完整的单层细胞叶片，中央具有较窄细胞组成的带状区域，平周壁上有小孔；这一碎片化石组合未记录完整植株，也不能可靠地鉴定为现生苔藓分类单元。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
对严格意义的苔藓植物门（藓类），根范围从德国东部晚维宪期藓类遗存开始，显示值取整为 3.35 亿年前，并延伸到现生藓类；更早的隐孢子不被当作冠群藓类化石。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is a rounded late Visean sample; fragmentary preservation and numerical stage conversion limit precision.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Three late Visean moss morphotypes provide the direct fossil anchor; older cryptospores are not promoted to crown-moss records.
<!-- /evo:text -->
