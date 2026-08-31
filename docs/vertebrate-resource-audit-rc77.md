# Vertebrate resource audit — rc77

## Scope

This audit covers the non-Perissodactyla vertebrate packages on `origin/main` rc76: Actinopterygii, Amphibia, Chondrichthyes, early fishes, tetrapod transition, marine reptiles and pterosaurs, turtles and lepidosaurs, crocodylomorphs and birds, Dinosauria, and the remaining Mammalia packages. Package records, source profiles, range ledgers, references, claim links, and bilingual catalog coverage were inspected together; no Pages row shards were added.

The authority sidecars already provide the complete COL26.8 accepted-species routing boundary for these packages. The remaining high-value gap was dossier depth rather than another species-name source: the tetrapod-transition package contained one profile even though its committed ontology and evidence ledger already exposed three named, primary-study-backed fossils.

## rc77 implementation

The tetrapod-transition package now exposes source-linked profiles for:

- **Elpistostege** — the Miguasha specimen MHNM 06-2067 and its CT-resolved pectoral-fin mosaic, with digit homology and sister-group placement kept analysis-dependent.
- **Acanthostega** — the East Greenland limb sample and its directly described eight-digit forelimb; digit number is not promoted to observed terrestrial walking.
- **Ichthyostega** — the East Greenland three-dimensional joint-mobility reconstruction; modeled feasible motion is kept separate from observed behaviour.

Each profile has an explicit taxon-range sample, geography, morphology, ecology boundary, evidence summary, reference locator, and generated field-to-claim links. Twelve taxon claims (taxonomy, biogeography, morphology and ecology for each profile) were added to the canonical evidence ledger, with Chinese rationales and runtime translation coverage. The three sample ranges use `taxon-range` rather than a global duration and retain the existing specimen-bounded uncertainty language.

Primary sources:

- Cloutier et al. 2020, *Nature*, DOI [`10.1038/s41586-020-2100-8`](https://doi.org/10.1038/s41586-020-2100-8).
- Coates & Clack 1990, *Nature*, DOI [`10.1038/347066a0`](https://doi.org/10.1038/347066a0).
- Pierce, Clack & Hutchinson 2012, *Nature*, DOI [`10.1038/nature11124`](https://doi.org/10.1038/nature11124).

## Delivery and limits

The generated profile, claim, range and locale projections are part of the same canonical data graph used by all clients. The existing `web-light` build therefore publishes only the existing summary descriptors and hashes, while the existing `native-full` build carries the complete new profile and claim records for both Android and iOS. No content-validation subsystem was introduced.

The new dossiers remain `source-linked` and are not expert-reviewed or `published` scientific conclusions. Regional envelopes are study-sample context, not global FAD/LAD, direct ancestry, complete ecology, or a universal tetrapod transition sequence. Diet and behaviour remain unavailable where the cited primary paper does not directly establish them.
