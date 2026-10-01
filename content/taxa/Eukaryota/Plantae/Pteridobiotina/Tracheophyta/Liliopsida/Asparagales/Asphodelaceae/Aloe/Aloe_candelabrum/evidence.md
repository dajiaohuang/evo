---
schemaVersion: 1
kind: evidence
records:
  catalogue-dossier:
    scientificName: Aloe candelabrum A.Berger
    rank: species
    sourceDatasetId: "2232"
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
      fossil: Fossil occurrence and geological age have not been assessed; extant floras are not used to infer fossil records.
    sources:
      referenceBindings:
        - referenceId: ref-d9d915ca-9251-8cd0-a6d6-0b5d4b1aaf23
          metadataVariant: 22
          sourceKey: col
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/title
            url: https://www.checklistbank.org/dataset/316115/taxon/C3GK
            version: COL26.8 released 2026-08-20; ChecklistBank dataset 316115
            locator: Accepted species usage C3GK
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/0/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-7508b1f1-d459-8c35-a5cc-032ae23afbe8
          metadataVariant: 0
          sourceKey: wfo
          usage:
            title:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/title
            url: https://list.worldfloraonline.org/wfo-0000757983-2026-06
            version: WFO 2026-06, issued 2026-06-21; version DOI 10.5281/zenodo.20782718
            locator: Crosswalk row COL C3GK / WFO wfo-0000757983
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/1/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-4e1f793f-f50b-865d-ac17-a11eeda46a6e
          metadataVariant: 0
          sourceKey: sanbi_13236_0
          usage:
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/locator
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/2/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
        - referenceId: ref-55eecb00-6d8a-8475-a913-896c24ba8843
          metadataVariant: 0
          sourceKey: sanbi_15648_0
          usage:
            locator: Aloe candelabrum A.Berger account; SANBI/WFO archive rows 78942 (Habitat), 78116 (Diagnostic), source identifier 15648.0
            scope:
              markdown: evidence.md
              field: /records/catalogue-dossier/sources/referenceBindings/3/usage/scope
          originalFields:
            - id
            - title
            - url
            - version
            - locator
            - license
            - scope
    facets:
      morphology:
        status: partially-supported
        claims:
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/textZh
            sourceIds:
              - sanbi_13236_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/textZh
            sourceIds:
              - sanbi_13236_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus
          - text:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/text
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/textZh
            sourceIds:
              - sanbi_15648_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/morphology/claims/2/lifeStatus
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
            textZh:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/textZh
            sourceIds:
              - sanbi_15648_0
            locator:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/locator
            placeTimeScope:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope
            lifeStatus:
              markdown: evidence.md
              field: /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus
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

# Aloe candelabrum

## catalogue-dossier / identity / method

<!-- evo:text /records/catalogue-dossier/identity/method -->
Exact COL26.8 accepted species usage C3GK, scientific name, authorship, rank, status and source dataset checked against both the pinned registry and the 2026-06 WFO crosswalk; SANBI archive has the same COL ID and WFO ID.
<!-- /evo:text -->

## catalogue-dossier / identity / scope

<!-- evo:text /records/catalogue-dossier/identity/scope -->
Nominal species as represented by COL26.8 usage C3GK; the cited South African regional source concept is retained and not presumed globally coextensive based on name alone.
<!-- /evo:text -->

## catalogue-dossier / lifeStatusScope / wild

<!-- evo:text /records/catalogue-dossier/lifeStatusScope/wild -->
Regional account statements retain their source scope; wild, naturalised, and cultivated occurrences are separated only when stated in the cited text.
<!-- /evo:text -->

## referenceBindings / usage / title

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/0/usage/title -->
Catalogue of Life COL26.8 / ChecklistBank dataset 316115; source checklist dataset 2232
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
Aloe candelabrum A.Berger account; SANBI/WFO archive rows 79259 (Morphology), 78115 (Diagnostic), source identifier 13236.0
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/2/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## referenceBindings / usage / scope

<!-- evo:text /records/catalogue-dossier/sources/referenceBindings/3/usage/scope -->
Regional South African flora treatment; it does not establish global representativeness or population frequencies.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/text -->
Plants solitary, with stem simple, 2-4 met. high, densely bearded with the remains of old dried leaves. Leaves densely rosulate, dull green to glaucous, spreading to slightly recurved, about 1 met. long, 15 cm broad near base, gradually tapering to the apex; upper surface usually rather deeply channelled and without scattered spines; lower surface convex, without spines except for a few in median line near apex, but sometimes with several irregularly scattered spines throughout; margins with a reddish cartilaginous edge, armed with small reddish to reddish-brown pungent deltoid teeth, about 3 mm long, 15-20 mm distant. Inflorescence a divaricately branched panicle, usually 1 only, about 1 met, high, branched low down and producing 6-12 racemes, the terminal raceme usually longer and standing out higher than the others. Peduncle stout, somewhat sulcate, laterally compressed low down, the branches below racemes with several sterile bracts. Racemes densely multiflowered, cylindric, slightly acuminate, 50-80 cm long, 10 cm diam., the terminal frequently the longest, the buds and flowers horizontally disposed, or spreading slightly downwards. Bracts ovate-deltoid, thin, scarious, white, 10 mm long, 5 mm broad at base, about 5-7-nerved, Pedicels 6 mm long. Perianth cylindric-clavate, roundly trigonous, sometimes slightly ventricose, averaging 32 mm long, narrower at base, enlarging towards the throat and with the mouth slightly upturned, usually scarlet, sometimes rose-pink or orange; outer segments free for half to two-thirds their length (tube about 15-I8 mm), with 3 greenish to orange nerves confluent at apex, the 2 upper segment apices falcately connivent; inner segments free, but dorsally adnate to the outer for one-third their length, broader than the outer (10 mm broad at middle), with thin white marginal border and 3 congested nerves, the central nerve raised and forming an orange to brownish keel, the lateral nerves not raised, green, the apices clear white, and more obtuse and more spreading to revolute than the outer. Filaments filiform-flattened, the 3 inner narrower and lengthening in advance of the 3 outer, the included part lemon, the exserted portion deep orange. Anthers the 3 inner and 3 outer in turn exserted 20 mm Style lemon within the perianth, the exserted part yellow. Stigma at length exserted 20 mm. Ovary 6 mm long, 3 mm diam., finely 6-grooved, green.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/textZh -->
Aloe candelabrum A.Berger 的 SANBI 物种条目记录了形态特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/locator -->
SANBI/WFO archive Morphology row 79259; source identifier 13236.0; cited publication: Reynolds, GW. 1974. Aloes of South Africa, 3rd ed. A.A. Balkema, Cape Town. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/text -->
Although nearest allied to A. ferox Mill. (non Berger) in general appearance, A. candelabrum is nevertheless specifically distinct, and differs well in many characters. Compared with A. ferox, A. candelabrum differs in having larger rosettes, larger and longer spreading to recurved deeply channelled leaves, a more divaricately branched inflorescence, comparatively longer racemes, with the terminal raceme usually longer and standing out higher than the lateral ones. The flowers are also different, especially the inner segment apices which are clear white, whereas in A. ferox they are mostly deep brown. No matter what flower colour variations may occur in A. candelabrum, the white inner segment apices always give the mouth a white appearance.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/textZh -->
SANBI 条目提供了 Aloe candelabrum A.Berger 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/locator -->
SANBI/WFO archive Diagnostic row 78115; source identifier 13236.0; cited publication: Reynolds, GW. 1974. Aloes of South Africa, 3rd ed. A.A. Balkema, Cape Town. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/1/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## morphology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/text -->
Aloe candelabrum is characterised by its tall [2-4(-8)m high], erect, unbranched stem covered in a `beard' of persistent, dried leaves, with a terminal rosette of long (ca. 100 x 15 cm), spreading to often recurved, deeply channelled leaves that sometimes bear a few scattered spines on the lower surface, especially at the tip of the keel. The reddish to reddish-brown marginal teeth are pungent and ca. 3 mm long. The candelabrum-like inflorescence is 5- to 12- branched with erect, very dense, cylindrical, slightly acuminate racemes 50-80 cm long, with the terminal raceme sometimes slightly longer than the lateral ones. Flowers are scarlet, sometimes rose-pink, orange-red to orange, and ca. 32 mm long, always with white inner segment tips. Very rarely they [flowers] are white. The closest relative of Aloe candelabrum is Aloe ferox. It is similarly distinguished by a tall [2-3(-5)m] erect, unbranched stem with persistent dried leaves and a terminal rosette. The leaves of Aloe ferox are typically erect to erectly spreading (rarely up to 100 cm), with marginal teeth of ca. 6 mm long and both surfaces either smooth or with irregularly scattered, pungent spines. The lower surface bears a few spines in the median line near the apex. The candelabrum-like inflorescence is 5- to 8-branched, generally with all racemes of approximately equal length, although one may be prominently taller. Flowers are mostly scarlet to orange, rarely white, and ca. 33 mm long with the inner segments tips brown to deep brown, or at least more intensely coloured than the rest of the corolla. The inner tepal apices typically do not flare. Whereas the inner segment tips of A. candelabrum tepals flare and are the same colour to the margin (in some herbarium specimens the white margins are still clearly evident), in A. ferox the inner tepal tips barely spread and are distinctly dark. It is only in old herbarium specimens presenting flowers dried very dark (with colour deepening perhaps heightened by pretreatment with a petroleum product) that this character is indistinct. In Aloe candelabrum the teeth on the leaf margins are quite short and stout, about 3 mm long, and spaced 15-20 mm apart, while in A. ferox the teeth are generally larger and more prominent, up 6 mm long, and often more closely spaced at 10-20 mm distant.
<!-- /evo:text -->

## morphology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/textZh -->
SANBI 条目提供了 Aloe candelabrum A.Berger 的鉴别特征。
<!-- /evo:text -->

## morphology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/locator -->
SANBI/WFO archive Diagnostic row 78116; source identifier 15648.0; cited publication: Smith, GF; Klopper, RR; Crouch, NR; Figueiredo, E. 2016. Reinstatement of Aloe candelabrum A.Berger (Asphodelaceae: Alooideae), a tree-like aloe of KwaZulu-Natal province, South Africa. Bradleya 34: 59 - 69. [All rights reserved]
<!-- /evo:text -->

## morphology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## morphology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/morphology/claims/2/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / morphology / gaps

<!-- evo:text /records/catalogue-dossier/facets/morphology/gaps/0 -->
Only the cited regional morphology and available diagnostic descriptions have been assessed; developmental and population variation remain unreviewed.
<!-- /evo:text -->

## ecology / claims / text

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/text -->
Northern and western aspects of valleys of all river systems from the Mtamvuna northwards to the Mngeni.
<!-- /evo:text -->

## ecology / claims / textZh

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/textZh -->
该 SANBI 区域物种条目记录的生境：Northern and western aspects of valleys of all river systems from the Mtamvuna northwards to the Mngeni.
<!-- /evo:text -->

## ecology / claims / locator

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/locator -->
SANBI/WFO archive Habitat row 78942; source identifier 15648.0; cited publication: Smith, GF; Klopper, RR; Crouch, NR; Figueiredo, E. 2016. Reinstatement of Aloe candelabrum A.Berger (Asphodelaceae: Alooideae), a tree-like aloe of KwaZulu-Natal province, South Africa. Bradleya 34: 59 - 69. [All rights reserved]
<!-- /evo:text -->

## ecology / claims / placeTimeScope

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/placeTimeScope -->
Regional species account; publication year is preserved in the cited reference and archive locator. The excerpt does not give a dated sampling frame or population frequency.
<!-- /evo:text -->

## ecology / claims / lifeStatus

<!-- evo:text /records/catalogue-dossier/facets/ecology/claims/0/lifeStatus -->
Regional flora account; native, naturalised, cultivated, or domesticated status is not inferred beyond explicit statements in the cited source.
<!-- /evo:text -->

## facets / ecology / gaps

<!-- evo:text /records/catalogue-dossier/facets/ecology/gaps/0 -->
The cited habitat excerpt does not establish seasonality, localities, interaction networks, or ecology across the full species range.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/0 -->
This dossier has source-backed morphology/diagnostics and habitat only; life history, evolution, full distribution, fossil evidence and conservation remain unassessed.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/1 -->
A systematic literature search and comparison of the regional source concept against the complete COL26.8 species concept remain incomplete.
<!-- /evo:text -->

## catalogue-dossier / completeness / reasons

<!-- evo:text /records/catalogue-dossier/completeness/reasons/2 -->
No independent expert review has been completed.
<!-- /evo:text -->
