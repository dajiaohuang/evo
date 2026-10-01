---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Ancylopoda
    commonName: Chalicothere-line Perissodactyls
    commonNameZh: 爪兽形奇蹄类
    rank: suborder
    taxonId: ""
    firstAppearance: 52
    lastAppearance: 1.8
    extinct: true
    entityKind: taxon
    contentLevel: dossier
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Ancylopoda
      claimKind: scientific
      claimType: topology
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: medium
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: "Evo Atlas issue #87 evidence audit"
      reviewedAt: 2026-08-31
      reviewedAgainstReferenceVersion: froehlich-1999-basal-perissodactyls concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: froehlich-1999-basal-perissodactyls
          pages: 140–159
          quoteLocator: Character matrix; phylogenetic results for Tapiromorpha, Hippomorpha and Ancylopoda
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Ancylopoda
      rangeKind: global-composite
      taxonomicConcept: Ancylopoda numerical range withheld pending direct range evidence
      geographicScope: No defensible global numerical scope established
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
      claimPaths: []
      referenceLocators:
        - referenceId: froehlich-1999-basal-perissodactyls
          locator: pp. 140–159; morphological matrix and cladistic topology; no complete Ancylopoda range synthesis
      reviewStatus: automated-audit-passed
      evidenceLevel: withheld-no-range-evidence
---

# Ancylopoda

## claims / statement

<!-- evo:text /records/claims/0/statement -->
A cladistic analysis of basal perissodactyls includes ancylopods among the sampled early branches and tests their relationship to tapiromorph and hippomorph taxa; their placement is a character-matrix hypothesis, not a direct-ancestor or global-range statement.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The primary analysis supplies explicit basal taxon and character sampling. The claim avoids choosing a universal rank or turning topology into time.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
一手分析提供明确的基干类群与性状取样；主张不选择普适等级，也不把拓扑转化为时间。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
一项基干奇蹄类支序分析把 Ancylopoda 纳入取样的早期分支，并检验其与貘型类和马型类类群的关系；其位置是性状矩阵假说，不是直接祖先或全球范围陈述。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The cited cladistic matrix supports topology and morphology, not a temporal range.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
The former 52–1.8 Ma display is withheld because the available primary study is a morphology-based phylogenetic analysis and does not establish Ancylopoda range endpoints.
<!-- /evo:text -->
