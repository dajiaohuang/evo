---
schemaVersion: 1
kind: evidence
records:
  event:
    title:
      markdown: page.en.md
      field: /records/event/title
      format: heading
    titleZh:
      markdown: page.zh.md
      field: /records/event/titleZh
      format: heading
    category: extinction
    startAge: 66.1
    endAge: 65.9
    regions:
      - Global
    clades:
      - Non-avian Dinosauria
      - Ammonitida
      - marine plankton
      - Mammalia
      - Aves
    summary:
      markdown: page.en.md
      field: /records/event/summary
    claimPaths:
      - content/events/K–Pg_mass_extinction/evidence.md#/records/claims/0
      - content/events/K–Pg_mass_extinction/evidence.md#/records/claims/1
      - content/events/K–Pg_mass_extinction/evidence.md#/records/claims/2
    evidenceItems:
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/0/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/relation
            referenceId: alvarez-1980-kpg
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/0/referenceLinks/0/pages
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/1/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/1/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/1/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/1/referenceLinks/0/relation
            referenceId: schulte-2010-chicxulub
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/1/referenceLinks/0/quoteLocator
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/2/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/2/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/2/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/2/referenceLinks/0/relation
            referenceId: schulte-2010-chicxulub
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/2/referenceLinks/0/quoteLocator
      - statement:
          markdown: evidence.md
          field: /records/event/evidenceItems/3/statement
        relation:
          markdown: evidence.md
          field: /records/event/evidenceItems/3/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/evidenceItems/3/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/evidenceItems/3/referenceLinks/0/relation
            referenceId: renne-2013-kpg-timescale
            pages:
              markdown: evidence.md
              field: /records/event/evidenceItems/3/referenceLinks/0/pages
            figure:
              markdown: evidence.md
              field: /records/event/evidenceItems/3/referenceLinks/0/figure
            quoteLocator:
              markdown: evidence.md
              field: /records/event/evidenceItems/3/referenceLinks/0/quoteLocator
    uncertaintyItems:
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/0/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/0/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/relation
            referenceId: alvarez-1980-kpg
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/0/referenceLinks/0/pages
      - statement:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/1/statement
        relation:
          markdown: evidence.md
          field: /records/event/uncertaintyItems/1/relation
        claimIds:
          - markdown: evidence.md
            field: /records/event/uncertaintyItems/1/claimIds/0
        referenceLinks:
          - relation:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/relation
            referenceId: alvarez-1980-kpg
            pages:
              markdown: evidence.md
              field: /records/event/uncertaintyItems/1/referenceLinks/0/pages
  claims:
    - subject:
        kind: event
        path: content/events/K–Pg_mass_extinction
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/0/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/0/confidenceRationale
      reviewedBy: Evo Atlas maintainer primary-source audit
      reviewedAt: 2026-08-30
      reviewedAgainstReferenceVersion: Renne et al. 2013 DOI 10.1126/science.1230492
      referenceLinks:
        - relation: supports
          referenceId: alvarez-1980-kpg
          pages: 1095–1108
          figure: Figures 1–5
          quoteLocator: Iridium measurements and impact hypothesis
        - relation: supports
          referenceId: renne-2013-kpg-timescale
          pages: 684–687
          figure: Figures 1–3
          quoteLocator: 40Ar/39Ar results; synchrony calculation; supplementary materials
    - subject:
        kind: event
        path: content/events/K–Pg_mass_extinction
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/1/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/1/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-20
      reviewedAgainstReferenceVersion: schulte-2010-chicxulub @ DOI 10.1126/science.1177265
      referenceLinks:
        - relation: supports
          referenceId: schulte-2010-chicxulub
          pages: 1214–1218
          figure: Figures 1–4
          quoteLocator: Global boundary-evidence synthesis
    - subject:
        kind: event
        path: content/events/K–Pg_mass_extinction
      claimKind: scientific
      claimType: event-mechanism
      statement:
        markdown: evidence.md
        field: /records/claims/2/statement
      confidence: high
      confidenceRationale:
        markdown: evidence.md
        field: /records/claims/2/confidenceRationale
      reviewedBy: Codex automated evidence audit
      reviewedAt: 2026-08-20
      reviewedAgainstReferenceVersion: schulte-2010-chicxulub @ DOI 10.1126/science.1177265
      referenceLinks:
        - relation: supports
          referenceId: schulte-2010-chicxulub
          pages: 1214–1218
          figure: Figures 1–4
          quoteLocator: Global boundary-evidence synthesis
        - relation: supports
          referenceId: renne-2013-kpg-timescale
          pages: 684–687
          figure: Figures 1–3
          quoteLocator: 40Ar/39Ar results; synchrony calculation; supplementary materials
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
---

# K–Pg mass extinction

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/0/statement -->
Iridium-rich boundary layer
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/0/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/0/claimIds/0 -->
claim:event:k-pg-extinction
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/0/referenceLinks/0/pages -->
1095–1108
<!-- /evo:text -->

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/1/statement -->
Chicxulub crater
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/1/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/1/claimIds/0 -->
claim:event:k-pg-chicxulub
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/1/referenceLinks/0/quoteLocator -->
Science 327 synthesis, pp. 1214–1218
<!-- /evo:text -->

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/2/statement -->
Abrupt fossil turnover
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/2/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/2/claimIds/0 -->
claim:event:k-pg-turnover
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/2/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/2/referenceLinks/0/quoteLocator -->
Science 327 synthesis, pp. 1214–1218
<!-- /evo:text -->

## event / evidenceItems / statement

<!-- evo:text /records/event/evidenceItems/3/statement -->
High-precision 40Ar/39Ar ages resolve impact and boundary extinction as synchronous within about 32 kyr
<!-- /evo:text -->

## event / evidenceItems / relation

<!-- evo:text /records/event/evidenceItems/3/relation -->
supports
<!-- /evo:text -->

## event / evidenceItems / claimIds

<!-- evo:text /records/event/evidenceItems/3/claimIds/0 -->
claim:event:k-pg-extinction
<!-- /evo:text -->

## evidenceItems / referenceLinks / relation

<!-- evo:text /records/event/evidenceItems/3/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## evidenceItems / referenceLinks / pages

<!-- evo:text /records/event/evidenceItems/3/referenceLinks/0/pages -->
684–687
<!-- /evo:text -->

## evidenceItems / referenceLinks / figure

<!-- evo:text /records/event/evidenceItems/3/referenceLinks/0/figure -->
Figures 1–3
<!-- /evo:text -->

## evidenceItems / referenceLinks / quoteLocator

<!-- evo:text /records/event/evidenceItems/3/referenceLinks/0/quoteLocator -->
40Ar/39Ar results and synchrony calculation
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/0/statement -->
Deccan volcanism contributed background environmental stress
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/0/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/0/claimIds/0 -->
claim:event:k-pg-extinction
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/0/referenceLinks/0/pages -->
1095–1108
<!-- /evo:text -->

## event / uncertaintyItems / statement

<!-- evo:text /records/event/uncertaintyItems/1/statement -->
Survival and recovery patterns varied among regions and clades
<!-- /evo:text -->

## event / uncertaintyItems / relation

<!-- evo:text /records/event/uncertaintyItems/1/relation -->
contextualizes
<!-- /evo:text -->

## event / uncertaintyItems / claimIds

<!-- evo:text /records/event/uncertaintyItems/1/claimIds/0 -->
claim:event:k-pg-extinction
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / relation

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/relation -->
supports
<!-- /evo:text -->

## uncertaintyItems / referenceLinks / pages

<!-- evo:text /records/event/uncertaintyItems/1/referenceLinks/0/pages -->
1095–1108
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/0/statement -->
Boundary clay iridium and impact ejecta support an extraterrestrial impact, while high-precision 40Ar/39Ar ages place the K–Pg boundary at 66.043 ± 0.043 Ma and resolve impact and extinction as synchronous within about 32 kyr.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/0/confidenceRationale -->
Independent geochemical observations and high-precision radioisotopic comparison converge on impact-boundary synchrony. High confidence does not make every taxon disappearance instantaneous or eliminate regional Signor–Lipps effects.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/1/statement -->
Multiple stratigraphic, geochemical and geophysical lines of evidence identify Chicxulub as the source crater for the K–Pg impact.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/1/confidenceRationale -->
High confidence follows the cited synthesis linking crater age, ejecta, boundary deposits and global stratigraphy rather than retroactively attributing the crater to the 1980 iridium paper.
<!-- /evo:text -->

## claims / statement

<!-- evo:text /records/claims/2/statement -->
Abrupt fossil turnover at the K–Pg boundary is temporally associated with impact ejecta and the Chicxulub event.
<!-- /evo:text -->

## claims / confidenceRationale

<!-- evo:text /records/claims/2/confidenceRationale -->
High confidence applies to the boundary-scale association documented across stratigraphic records; clade-specific extinction and recovery patterns remain heterogeneous.
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/0 -->
独立的边界黏土地球化学与高精度氩氩年代比较共同支持撞击—界线同步；高置信度不表示每个类群都在同一瞬间消失，也不消除区域辛格—利普斯效应。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/1 -->
高置信度来自综合撞击坑年代、喷出物、界线沉积与全球地层记录的研究，而不是把 1991 年后确认的撞击坑错误归入 1980 年铱异常论文。
<!-- /evo:text -->

## claim-rationales.zh

<!-- evo:text /records/claim-rationales.zh/2 -->
高置信度适用于多套地层记录中界线尺度的化石更替与撞击喷出物关联；不同类群的灭绝和恢复模式仍具有异质性。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/0 -->
界线黏土中的铱与撞击喷出物支持地外撞击，高精度氩氩年龄则把 K–Pg 界线定为 66.043 ± 0.043 Ma，并在约 3.2 万年的分辨率内将撞击与灭绝判为同步。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/1 -->
多种地层学、地球化学和地球物理证据共同确认希克苏鲁伯是白垩纪—古近纪撞击事件的源陨石坑。
<!-- /evo:text -->

## claim-statements.zh

<!-- evo:text /records/claim-statements.zh/2 -->
白垩纪—古近纪界线处骤然的化石更替，在时间上与撞击喷出物及希克苏鲁伯事件相关联。
<!-- /evo:text -->
