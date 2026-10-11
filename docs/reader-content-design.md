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
- Comparison, fossil filtering and result export open inside the dashboard.
  SQL, local data import and query notes remain available in collapsed advanced
  tools and retain the active query context. They are not separate top-level
  destinations. Dataset release comparison belongs with source information.
- Sources and methods share one dashboard reading window with three sections:
  scientific explanations, sources and downloads, and about the atlas. Contextual
  source links open the relevant material without discarding the map or article.
- A corner icon switches between the paleomap and the large species-tree view.
  Hovering or focusing the icon shows “前往物种树”; the tree offers a matching
  return-to-map control. Switching retains age, map camera and content context.
- Content windows with a documented tree position contain a collapsed local-tree
  section. Opening it reveals actual branches using the same renderer, drag,
  zoom, selection and branch-folding controls as the large tree. Terminal taxa
  include their parent and siblings; selecting locally does not replace the text.
  “在完整树中定位” opens the same representation, expands the target's ancestors
  and centres it. Unmapped objects do not receive an invented position. Source
  classification, navigation grouping and scoped phylogenetic hypotheses keep
  their separate meanings in both sizes.
- Opening search content with a documented time and place synchronizes the map
  to that scene, retaining a way to return to the previous map view. This is the
  user's latest choice, replacing manual-only map location. Content without a
  supported location retains the map; a name or a broad range is not a point.

The current search includes a bounded set of named fossil-record scenes (at
most one sourced record per curated extinct genus or species). Selecting one
locates its reconstructed coordinates, uses the midpoint of its recorded age
interval and opens the occurrence inspector. A return link restores the map
snapshot from before the search. These records are labelled separately from
articles: a fossil occurrence is not assumed to locate a study's specimen or
an organism's entire distribution. Article-linked scenes and the expanded
dashboard reading windows remain part of the pending redesign.

Page titles and subtitles introduce the science itself. Interactions reveal
specimens, structures, comparisons and places; navigation instructions belong
in controls rather than the narrative introduction.

## Reading window families

The following structures apply to the existing page types. A directory opens
inside the dashboard; choosing an entry opens its reading or material window.

### Main reading

| Page family | Narrative sequence | Main interaction |
| --- | --- | --- |
| Species | Body, life habits and habitats, evolutionary relationships, specific studies | Inspect structures and specimens; open a comparison from the current organism |
| Groups | Recognizable members, distinguishing structures, branches, changes through time | Select branches and compare corresponding morphology |
| Events | What changed, source-supported stages, organisms and places involved, unresolved explanations | Expand stages on a timeline and inspect the material for each stage |
| Stories and reading chapters | A concrete question, connected observations or research cases, scientific explanation, related reading | Scroll through chapters with linked map scenes; manual exploration pauses following |
| Places | What was found, the organisms or materials, local environmental context where supported, the relevant strata | Switch fossil-discovery and stratigraphic-section views without losing their selections |

### Lookup and context

| Page family | Content organization | Main interaction |
| --- | --- | --- |
| Geological time units | Time interval, supported environmental or biological context, associated places and reading | Choose intervals and open their material from the dashboard timeline |
| Formations | Named rock unit, documented rock and fossil material, actual localities, source studies | Explore the documented section and materials; enter a linked locality |
| Catalogue-only names | Name and synonyms, source classification position, available references, related complete articles | Browse the source hierarchy and follow available content; do not fabricate a species biography |
| Traits | The particular structure or ecological feature, organisms with corresponding material, relevant studies | Compare the same feature across supported objects, keeping missing material explicit |

### Source material and supporting information

| Page family | Content organization | Main interaction |
| --- | --- | --- |
| References | Title, authors and year, source locator, the article passages or materials using it | Follow citation bindings back to reading; show a research summary only when authored from the study |
| Media | Large image, represented object and caption, associated reading, creator and rights | Inspect the image and related material; distinguish specimen photographs from reconstructions |
| Datasets and releases | Named source, represented objects and scope, actual download and offline options, version information | Open the relevant files or retained-release comparison from the source section |
| Sources, methods and about | Scientific explanations; context-specific sources and downloads; a short account of the atlas and its content | Switch the three sections in one reading window and use the explanation's relevant demonstration |

Scientific explanations begin with questions about reconstructed places, age
intervals, tree representations and the unit represented by a fossil point.
Demonstrations use a clearly scoped real record or label schematic material as
such. They retain source fields and model identities rather than manufacturing
exact ages, calibrated branches or a complete biological census.

## Dashboard and reading state

A bubble starts with a short scientific introduction and a relevant object or
material. It expands into a reading window. Comparisons and source material
open from that content; closing them returns to the same reading position.

Preserve the map camera, projection, age, visible layers, active query, selected
material, article chapter and scroll position across window switches. Local
query notes are reader-authored notes, not an expert-review maintenance system.
Load full articles, source inventories and advanced computation when opened.
Keep normal reading free of release inventories and technical coverage walls.

Existing identifiers and direct links continue to identify their content. The
interactive application resolves them inside the dashboard. Static publication
uses the same authored prose and source bindings, with a contextual route back
to the map appropriate to the edition's available data.

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
