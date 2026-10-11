# Reader content

## Audiences and entry points

Main chapters address readers who know basic biological classification. They
connect a biological or evolutionary question to concrete specimens, animals,
places and studies. Explain concepts such as crown groups when they first
matter; keep scientific names and distinctions that help the argument.

Species details address knowledgeable enthusiasts. Prioritize identity and
classification, morphology, ecology and distribution, evolutionary relationships,
and specific studies. Keep study location, sample and period beside the finding.
Put identifiers, retrieval statistics and technical ledgers behind disclosures.

The redesign uses the large paleomap dashboard as the starting point for all
content. Search, classification browsing, geological time, events, stories and
tools open from this dashboard rather than as parallel top-level destinations.
Existing direct links still resolve to their content and can restore map state.
This is the agreed design direction; the complete dashboard redesign is pending.

## Agreed page interactions

- The dashboard defaults to selected place and organism stories, with a switch
  to the complete fossil-record view. A short bubble opens into a reading window
  while the map remains alongside or behind it.
- Species reading proceeds through body structure, life habits, evolutionary
  relationships and then detailed research cases.
- Group pages emphasize branches and morphology comparison.
- Events unfold along a selectable timeline of source-supported stages.
- Stories use continuous scrolling with chapter-linked map scenes. Manual map
  exploration pauses following; returning restores the chapter and reading position.
- Place pages provide both fossil-discovery and stratigraphic-section views.
  Switching preserves each view's selection; material and layer selections link
  when their correspondence is documented.

Page titles and subtitles introduce the science itself. Interactions reveal
specimens, structures, comparisons and places; navigation instructions belong
in controls rather than the narrative introduction.

## Chapters

`data/reading-guides.json` is a small, manually authored editorial source, not
a generated projection or another classification system. The application and
static publisher use the same bilingual title, introduction, section prose,
term explanation, source reference IDs and related taxon ID. Reference metadata
comes from the shared bibliography. Static publication rejects missing sources.

The first five chapters explain fins and limbs, flowering-plant time estimates,
perissodactyl branches, a chimpanzee habitat study and marmoset parenting.
These are a first editorial collection, not complete coverage of the tree of life.
Selected-core editions include only chapters with an included detail page.

## Writing a page

1. Ask a concrete question and answer its starting point in the introduction.
2. Describe the organism or material before interpreting its significance.
3. Explain the scientific connection in short, connected paragraphs.
4. Place a relevant limitation next to the conclusion it limits.
5. End with related reading and the studies used in the article.

Avoid package codes, coverage counters, release identifiers and assertion types
in the main narrative. Do not turn a specimen into a direct ancestor, a model
age into a fossil occurrence, or a local study into species-wide biology.
Never manufacture natural-history prose to fill an empty field.

Existing taxon, event and story Markdown remains authored in `content/`.
Changing the display template does not certify that every existing paragraph
has been rewritten for these audiences. Further editorial batches should revise
that canonical prose, retain its citation bindings and rebuild its projections.
