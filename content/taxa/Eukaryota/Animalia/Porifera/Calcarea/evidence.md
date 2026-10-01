---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Calcarea
    commonName: Calcareous Sponges
    commonNameZh: 钙质海绵
    rank: class
    taxonId: txn:3603
    firstAppearance: 535
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Calcarea
      claimKind: scientific
      claimType: morphology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Codex automated primary-source review
      reviewedAt: 2026-09-05
      reviewedAgainstReferenceVersion: Voigt et al. 2012 DOI 10.1371/journal.pone.0033417; publisher full text inspected 2026-09-05
      referenceLinks:
        - referenceId: voigt-2012-calcarea-phylogeny
          relation: supports
          figure: Figure 1
          quoteLocator: Introduction; The aquiferous system of Calcarea; Figure 1 caption
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Calcarea
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: voigt-2012-calcarea-phylogeny
      referenceLinks:
        - referenceId: voigt-2012-calcarea-phylogeny
          relation: supports
          pages: e33417
          quoteLocator: Figures 1–7; phylogenetic tests and character reconstructions
    - subject:
        kind: taxon
        path: content/taxa/Eukaryota/Animalia/Porifera/Calcarea
      claimKind: scientific
      claimType: fossil-range
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: low
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: voigt-2012-calcarea-phylogeny locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: voigt-2012-calcarea-phylogeny
          pages: Article e33417
          figure: Figures 1–7
          quoteLocator: Extant sampling, phylogenetic tests and character reconstructions
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
    - markdown: evidence.md
      field: /records/claim-rationales.zh/1
    - markdown: evidence.md
      field: /records/claim-rationales.zh/2
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
    - markdown: evidence.md
      field: /records/claim-statements.zh/1
    - markdown: evidence.md
      field: /records/claim-statements.zh/2
  ranges:
    - entityPath: content/taxa/Eukaryota/Animalia/Porifera/Calcarea
      rangeKind: global-composite
      taxonomicConcept: Crown Calcarea temporal range
      geographicScope: Temporal interval pending fossil-range evidence
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
      confidence: low
      claimPaths:
        - content/taxa/Eukaryota/Animalia/Porifera/Calcarea/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: voigt-2012-calcarea-phylogeny
          locator: Article e33417; Figures 1–7; extant sampling, phylogenetic tests and character reconstructions
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Calcarea

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Calcarea build calcite spicules and exhibit varied aquiferous-system organization; Voigt and colleagues illustrate asconoid, syconoid, sylleibid and leuconoid examples, rather than one body plan shared unchanged by every species.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The paper explicitly describes calcite spicules and illustrates contrasting aquiferous systems in named examples; no single illustrated organization is generalized to every species.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Expanded ribosomal-gene sampling rejects several traditional internal Calcarea groups and tests character evolution; the recovered trees are sample-dependent and do not date the class.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
The study explicitly compares classifications against molecular trees, while marker and taxon sampling limit deep resolution.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Calcarea has no supported scalar temporal range in the cited evidence: the sampled extant phylogeny does not establish a 535 Ma fossil occurrence or crown boundary, so the former 535–0 Ma display is withheld.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Voigt et al. (2012) directly supports relationships among sampled living Calcarea, not a fossil-age boundary. Low confidence records the absence of range-fit support for 535 Ma.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
论文明确描述了方解石骨针，并以具名实例展示不同水沟系；未将其中任何一种组织方式推广至所有物种。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
研究明确以分子树检验分类方案，但标记与类群取样限制了深层解析度。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Voigt 等（2012）直接支持所采样现生钙质海绵的关系，而非化石年代边界。低置信度表示 535 Ma 缺少适合范围用途的证据。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
钙质海绵形成方解石骨针，水沟系组织方式多样；Voigt 及同事展示了 asconoid、syconoid、sylleibid 和 leuconoid 等类型的实例，而非所有物种均以不变形式共享的一种体制。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
扩展的核糖体基因取样否定了若干传统钙质海绵内部类群并检验性状演化；所得系统树依赖样本，不能为该纲定年。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
现有引证不支持 Calcarea 的单一时间范围：现生样本系统树不能确立 535 Ma 化石出现或冠群边界，因此旧有 535–0 Ma 展示被暂缓。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited extant phylogeny resolves sampled calcareous-sponge relationships but does not establish a 535 Ma fossil boundary.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 535–0 Ma display is withheld because an extant molecular topology cannot be converted into a fossil FAD.
<!-- /evo:text -->
