---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Homoscleromorpha
    commonName: Homoscleromorph Sponges
    commonNameZh: 同骨海绵
    rank: class
    taxonId: ""
    firstAppearance: 0
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    parentRelationshipKind: navigation-parent
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Homoscleromorpha
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
      reviewedAgainstReferenceVersion: Gazave et al. 2010 DOI 10.1371/journal.pone.0014290; publisher full text inspected 2026-09-05
      referenceLinks:
        - referenceId: gazave-2010-homoscleromorph-subdivision
          relation: supports
          figure: Figure 6
          quoteLocator: "Discussion: subdivision into two clades; revised diagnoses and key for Plakinidae and Oscarellidae"
    - subject:
        kind: taxon
        path: content/topics/atlas/Homoscleromorpha
      claimKind: scientific
      claimType: taxonomy
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: gazave-2012-homoscleromorpha
      referenceLinks:
        - referenceId: gazave-2012-homoscleromorpha
          relation: supports
          pages: 3–10
          quoteLocator: Evidence synthesis; formal class nomination; diagnosis
    - subject:
        kind: taxon
        path: content/topics/atlas/Homoscleromorpha
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
      reviewedAgainstReferenceVersion: gazave-2012-homoscleromorpha locator checked for rc50
      referenceLinks:
        - relation: supports
          referenceId: gazave-2012-homoscleromorpha
          pages: 3–10
          figure: Formal diagnosis
          quoteLocator: Evidence synthesis and formal class nomination
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
    - entityPath: content/topics/atlas/Homoscleromorpha
      rangeKind: global-composite
      taxonomicConcept: Homoscleromorpha temporal range
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
        - content/topics/atlas/Homoscleromorpha/evidence.md#/records/claims/2
      referenceLocators:
        - referenceId: gazave-2012-homoscleromorpha
          locator: 3–10; evidence synthesis, formal class nomination and diagnosis
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Homoscleromorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Gazave and colleagues distinguish Homoscleromorpha with small skeletal spicules (Plakinidae) from those without spicules (Oscarellidae); their revised diagnoses describe varied aquiferous organization, not a mineral skeleton shared by every member of the class.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The study's revised family diagnoses explicitly contrast spicule presence and absence, supported by the sampled molecular groups; the description does not infer a date or direction of skeletal evolution.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Molecular and morphological evidence supports recognizing Homoscleromorpha as a fourth sponge class rather than retaining it within Demospongiae; this taxonomic revision is not an origin-time claim.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
Independent character systems converge on the class-level revision, though rank assignment does not itself establish age or ancestry.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Homoscleromorpha has no supported scalar temporal range in the cited evidence: formal recognition of the living class supplies taxonomy but no fossil boundary, so the former 0–0 placeholder is withheld rather than presented as a range.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
Gazave et al. (2012) supports class recognition and diagnosis, not temporal endpoints. Low confidence prevents a living-only taxonomic source from being misread as a 0 Ma origin.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
研究修订的科级诊断明确区分骨针的有无，并得到所采样分子分组的支持；该描述不推断骨骼演化的年代或方向。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
独立性状系统共同支持纲级修订，但等级划分本身不确定年代或祖先关系。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
Gazave 等（2012）支持纲的建立与鉴定，而不支持时间端点。低置信度避免把仅涉及现生类群的分类来源误读为 0 Ma 起源。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
Gazave 及同事区分了具有小型骨针的同骨海绵（Plakinidae）与没有骨针的同骨海绵（Oscarellidae）；其修订诊断描述了不同的水沟系组织方式，并不认为该纲所有成员都具有矿物骨骼。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
分子与形态证据支持把同骨海绵识别为海绵动物第四个纲，而不再置于寻常海绵纲；这一分类修订不是起源时间主张。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
现有引证不支持 Homoscleromorpha 的单一时间范围：现生纲的正式建立只提供分类学信息，没有化石边界，因此旧有 0–0 占位值被暂缓而不再作为范围展示。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
Formal recognition and diagnosis of the living class do not supply a fossil first appearance or species-duration record.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The 0–0 placeholder is converted to explicit withholding rather than presenting an undated living taxon as a numerical range.
<!-- /evo:text -->
