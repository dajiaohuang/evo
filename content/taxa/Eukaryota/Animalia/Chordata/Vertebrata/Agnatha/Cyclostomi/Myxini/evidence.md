---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Myxini
    commonName: Hagfishes
    commonNameZh: 盲鳗纲
    rank: class
    taxonId: txn:401644
    firstAppearance: 100.5
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Myxini
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Miyashita et al. 2019 DOI 10.1073/pnas.1814794116; PubMed PMID 30670644 abstract
      referenceLinks:
        - referenceId: miyashita-2019-tethymyxine
          relation: supports
          pages: 2146–2151
          quoteLocator: "Abstract: soft tissue anatomy, barbel cartilages, postcranial branchial apparatus and chemical traces of slime glands"
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Myxini
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
      reviewedAgainstReferenceVersion: Miyashita et al. 2019 DOI 10.1073/pnas.1814794116
      referenceLinks:
        - relation: supports
          referenceId: miyashita-2019-tethymyxine
          pages: 2146–2151
          figure: Figures 1–3; Supplementary Figures S1–S4
          quoteLocator: "Systematic palaeontology: holotype, horizon and locality; morphology-based phylogenetic results"
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
    - entityPath: content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Myxini
      rangeKind: global-composite
      taxonomicConcept: Myxini crown group; Myxinikela is excluded from this endpoint
      geographicScope: Global crown-group display bound
      olderMa: 100.5
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
        - content/taxa/Eukaryota/Animalia/Chordata/Vertebrata/Agnatha/Cyclostomi/Myxini/evidence.md#/records/claims/1
      referenceLocators:
        - referenceId: miyashita-2019-tethymyxine
          locator: pp. 2146–2151; Figures 1–3; systematic and phylogenetic results
      reviewStatus: not-reviewed
      evidenceLevel: literature-synthesized
---

# Myxini

## claims / statement

<!-- evo:text /records/claims/0/statement -->
The Cretaceous hagfish Tethymyxine preserves barbel cartilages, a branchial apparatus behind the skull and chemical traces interpreted as slime glands. These fossil features document similarities to living hagfish, not directly observed slime production or a universal description of every Myxini species.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary-study abstract identifies the preserved anatomy and chemical traces. The slime-gland interpretation is distinguished from observed secretion, and the fossil specimen does not establish every living species' anatomy.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
The complete body fossil Tethymyxine tapirostrum holotype BHI 6445 from the Cenomanian Hâdjoula Lagerstätte of Lebanon, displayed as 100.5–93.9 Ma, was recovered within crown Myxini; this specimen supports a crown-hagfish fossil bound but not a global FAD, and the older stem hagfish Myxinikela is excluded from the crown range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The primary study directly documents the complete holotype, Cenomanian locality, diagnostic anatomy and phylogenetic placement among living hagfish lineages. Medium confidence preserves stage-scale numerical display, model sensitivity and sampling dependence rather than treating one specimen as the origin of crown Myxini.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
主研究摘要明确列出了保存的解剖结构和化学痕迹。黏液腺的解释不等于直接观察到分泌行为；该化石标本也不能确定所有现生物种的解剖特征。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
一手研究直接记录了完整正模、森诺曼期地点、诊断解剖及其在现生盲鳗谱系中的系统位置。中等置信度保留阶级尺度数值显示、模型敏感性与采样依赖性，不把单个标本当作盲鳗纲冠群起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
白垩纪盲鳗 Tethymyxine 保存了触须软骨、位于头骨后方的鳃器，以及被解释为黏液腺的化学痕迹。这些化石特征记录了与现生盲鳗的相似性，并非直接观察到的黏液分泌，也不代表每个盲鳗物种的通用形态。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
黎巴嫩森诺曼期 Hâdjoula 特异埋藏群的 Tethymyxine tapirostrum 完整躯体正模 BHI 6445（显示区间 100.5–93.9 Ma）在分析中位于盲鳗纲冠群内部；该标本支持冠群盲鳗的化石界限，但不是全球首现，且更老的盲鳗干群 Myxinikela 不计入冠群延限。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The older endpoint is rounded from a Cenomanian crown-hagfish occurrence and remains sampling-dependent.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
Tethymyxine tapirostrum was recovered within crown Myxini; the stem hagfish Myxinikela is not used to extend this crown-group display range.
<!-- /evo:text -->
