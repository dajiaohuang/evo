---
schemaVersion: 1
kind: evidence
records:
  atlas-node:
    name: Pinnipedimorpha
    commonName: Pinniped-line carnivorans
    commonNameZh: 鳍足形类
    rank: clade
    firstAppearance: 29
    lastAppearance: 0
    extinct: false
    entityKind: taxon
    contentLevel: dossier
    taxonId: txn:71879
  claims:
    - subject:
        kind: taxon
        path: content/topics/atlas/Pinnipedimorpha
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
      reviewedAgainstReferenceVersion: nyakatura-2012-carnivora-supertree concrete locators audited 2026-08-31
      referenceLinks:
        - relation: supports
          referenceId: nyakatura-2012-carnivora-supertree
          pages: Article 12
          figure: Figure 2
          quoteLocator: Caniformia family topology including extant pinniped families
  claim-rationales.zh:
    - markdown: evidence.md
      field: /records/claim-rationales.zh/0
  claim-statements.zh:
    - markdown: evidence.md
      field: /records/claim-statements.zh/0
  ranges:
    - entityPath: content/topics/atlas/Pinnipedimorpha
      rangeKind: global-composite
      taxonomicConcept: Pinnipedimorpha navigation display — source-bounded sample window — numerical range withheld
      geographicScope: No numerical geographic-temporal range exposed
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
      evidenceLevel: withheld-no-range-evidence
      confidence: low
      claimPaths: []
      referenceLocators:
        - referenceId: nyakatura-2012-carnivora-supertree
          locator: Article 12; Caniformia family topology including extant pinniped families
      reviewStatus: automated-audit-passed
---

# Pinnipedimorpha

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Pinnipedimorpha is used as the atlas route joining fossil pinniped-line evidence to the living seal, sea-lion and walrus branches represented in the carnivoran supertree; the extant tree does not itself resolve all stem pinnipeds or their first appearance.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
The source supports the living family branches, while the statement labels the broader atlas route and fossil exclusion explicitly.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
来源支持现生科分支；表述明确标示更广的图谱路线和化石排除项。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
图谱以 Pinnipedimorpha 路线连接化石鳍足型类证据与食肉类超级树中的现生海豹、海狮和海象分支；现生树本身不解析所有干群鳍足类或其首现。
<!-- /evo:text -->

## ranges / uncertainty / note

<!-- evo:text /records/ranges/0/uncertainty/note -->
The former navigation numbers are withdrawn because the extant-carnivoran supertree does not directly sample stem pinnipeds or furnish a fossil range. Zero values are non-display placeholders required by the schema.
<!-- /evo:text -->

## ranges / evidenceBasis

<!-- evo:text /records/ranges/0/evidenceBasis -->
A source audit of Updating the evolutionary history of Carnivora (Mammalia): a new species-level supertree complete with divergence time estimates found relationship or taxonomic evidence but no range-fit support for the former numerical display.
<!-- /evo:text -->
