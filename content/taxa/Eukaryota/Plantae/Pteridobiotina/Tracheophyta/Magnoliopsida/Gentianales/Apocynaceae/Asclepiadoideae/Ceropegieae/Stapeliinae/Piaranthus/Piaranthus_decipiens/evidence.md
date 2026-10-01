---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Piaranthus decipiens (N.E.Br.) Bruyns
    rank: species
    sourceDatasetId: "1141"
    checkedAt: 2026-09-23
    identity:
      method:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/method
      scope:
        markdown: evidence.md
        field: /records/catalogue-dossier/identity/scope
    lifeStatusScope:
      wild:
        markdown: evidence.md
        field: /records/catalogue-dossier/lifeStatusScope/wild
      domesticated: Domestication and cultivar history have not been assessed.
      fossil: Fossil occurrence and geological age have not been assessed; extant records are not used to infer fossils.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/4HPLB
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage 4HPLB
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0001254180-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL 4HPLB / WFO wfo-0001254180
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
            licenseAssessment: identity-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
        - referenceId: ref-2d424a9c-827c-8df3-afc5-320d2a3cfd07
          metadataVariant: 0
          sourceKey: sanbi_10485_0
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
            licenseAssessment: aggregate-declaration-only
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
            - licenseAssessment
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            sourceIds:
              - sanbi_10485_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
            translationStatus: untranslated
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/textZh
            sourceIds:
              - sanbi_10485_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/morphology/gaps/0
      lifeHistory:
        status: not-assessed
      ecology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/text
            sourceIds:
              - sanbi_10485_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
            translationStatus: untranslated
        gaps:
          - markdown: evidence.md
            field: /records/catalogue-dossier/facets/ecology/gaps/0
      evolution:
        status: not-assessed
      distribution:
        status: not-assessed
      fossil:
        status: not-assessed
      conservation:
        status: not-assessed
    completeness:
      status: incomplete
      reasons:
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/0
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/1
        - markdown: evidence.md
          field: /records/catalogue-dossier/completeness/reasons/2
    expertReview:
      status: not-reviewed
---

# Piaranthus decipiens

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage 4HPLB, name, authorship, rank, status and source dataset verified against pinned registry; WFO 2026-06 maps the same COL ID by exact accepted name/authorship, and SANBI archive records the matching WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage 4HPLB; retain the cited source's regional and publication scope and do not assume full concept equivalence from name alone.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional account statements retain source scope; native, naturalised, and cultivated occurrences are distinguished only where stated.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 1141
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/scope -->
Accepted name, authorship, rank, status, and source dataset identity only.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/title -->
World Flora Online Plant List, version 2026-06, exact COL crosswalk
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/1/usage/scope -->
Exact accepted name and authorship identity link only, not biological evidence.
<!-- /evo:text -->

## referenceBindings / usage / locator

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/locator -->
Piaranthus decipiens (N.E.Br.) Bruyns account; archive rows 67585 (Morphology), 66944 (Habitat), 65950 (Diagnostic), source identifier 10485.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Stems 20-150 mm long, 8-20 mm thick, dull green to grey often mottled with purple; tubercles ± rectangular, laterally flattened, joined into 4 (very rarely 5) angles up stem, each bearing towards apex a narrowly deltoid leaf-rudiment 3-6 mm long with 2 stipular denticles at its base, leaf-rudiments soon drying out, often persisting as weak whitish spinescent husk. Inflorescences usually 1 per stem, arising in upper half, of 1-3 flowers developing in gradual succession, occasionally with small peduncle up to 5 mm long with several lanceolate laterally toothed bracts 1.5-3.0 mm long; pedicel 2-6 mm long, 2 mm thick, ascending, pinkish; sepals 6-8 mm long, ±2 mm broad at base, lanceolate, acuminate, spreading to descending in upper half, pale grey-green. Corolla 20-30 mm diam., shallowly campanulate; outside spotted and longitudinally streaked with dull purple on grey-green; inside brown-red or brown becoming finely mottled with yellow in base of tube, sometimes conspicuously mottled with yellow all over, sometimes faintly transversely rugulose, with low rounded papillae each with a small apical bristle; tube 4-10 mm long, 7-10 mm broad at mouth, cupular, pentagonal, with corolla thickened around mouth beneath sinuses of lobes; lobes 7-12 mm long, 6-8 mm broad at base, deltate-ovate, acute, ascending to recurved, convex above with margins slightly recurved, with clavate purplish vibratile cilia 1.5-2.2 mm long along margins near bases. Corona 7-10 mm tall, 6-7 mm broad, seated on very short stipe, purple to pink or pale brown, exterior usually with sweat-like droplets secreted over surface; outer lobes <1 mm long, spreading, forming shallow pouch joining ‘bases’ of inner lobes; inner lobes 3-6 mm long, initially incumbent on backs of anthers then erect and connivent above them, dorsiventrally flattened and somewhat broadened below, ± terete and narrower above, parts above anthers very closely laterally adpressed to one another, acute to obtuse.
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 67585; source 10485.0; publication: Bruyns, PV. 2005. Stapeliads of southern Africa and Madagascar, Vol. 2. Umdaus Press, Hatfield. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
Plants of H. decipiens form diffuse mats which are normally 150-300 mm across but may reach 1 m in diameter. Although the stems are occasionally up to 150 mm long, they are mostly less than 50 mm tall and so are comparatively small, though typical for the genus. They are decumbent, often with a distinctly narrow base and this makes them fairly clavate in outline. The tubercles are mostly joined into four angles along the stems. Initially each is tipped with a small, narrowly deltoid leaf-rudiment with two quite obvious, though small, stipular denticles at its base. This leaf-rudiment rapidly dries out but persists for a while as a whitish husk and only gradually wears away. Flowers are produced in small numbers towards the tips of the younger stems. In cultivation in Cape Town they have usually opened in the afternoon, remained open that night, the next day and night and then closed during the following morning. They therefore remain open for a total of about 40-42 hours and this corresponds exactly to the observations in this regard by N.E. Brown. They emit a faint odour of excrement. In P. decipiens flowers are at most 30 mm across, usually brown becoming paler in the tube and finely papillate-rugulose. Occasionally the whole flower is prettily mottled with yellow on brown. The lobes usually spread out and have a small patch of purplish vibratile cilia along the margins near the base. The mouth of the tube is conspicuously thickened to project inwards just below the sinuses of the lobes. This gives the tube a prominently pentagonal shape, where it is narrower behind the inner corona lobes and broader opposite the guide-rails. The corona is almost contained in the tube and appears to consist mainly of the relatively large inner lobes with the outer lobes merely filling the space between them. Detailed studies of the development of these corona lobes has shown that the outer series contributes the lower part to these large, apparent ‘inner lobes’. The small outer lobes conceal a relatively large nectarial cavity beneath the guide-rails which descends nearly to the base of the gynostegium. The inner lobes are tightly adpressed to each other along their sides and rise in the centre to form a cone above the anthers. They usually have plenty of sweat-like droplets of nectar on their outer surface. These secretions were observed to be sweet first by N.E. Brown but nothing is known about their chemical composition.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了该种的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 65950; source 10485.0; publication: Bruyns, PV. 2005. Stapeliads of southern Africa and Madagascar, Vol. 2. Umdaus Press, Hatfield. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only regional morphology and diagnostic descriptions have been assessed; developmental and population-level variation remains unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Over this vast area P. decipiens is occasionally found at the foot of large shrubs or trees. More usually it grows in overgrazed situations under small bushes, which are often greatly reduced specimens of Acacia tortilis or, in some places around Schweizer-Reinecke, shrublets of Ruschia spinosa. Plants generally grow on firm, loamy ground and often on calcrete, but only rarely in sandy places.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 66944; source 10485.0; publication: Bruyns, PV. 2005. Stapeliads of southern Africa and Madagascar, Vol. 2. Umdaus Press, Hatfield. [All rights reserved]
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year appears in the cited reference. The excerpt gives no dated sampling frame or population frequency.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; wild, naturalised, cultivated, and domesticated status are not inferred beyond explicit source statements.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
Habitat excerpt does not establish seasonality, observation localities, interactions, or ecology across the full range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
Only source-supported morphology/diagnostics and habitat have been assessed; life history, evolution, full distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
Systematic literature review and comparison of the regional account with the complete COL26.8 concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
