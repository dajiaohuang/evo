# Scientific review protocol

Scientific review is a recorded human decision about a defined content scope. It is separate from schema, linkage, checksum, translation and build validation.

## Maturity ladder

1. `generated-scaffold` — identity, hierarchy and bilingual structure are present; scientific narrative remains provisional.
2. `curator-draft` — the project curator has linked visible claims to sources and exposed known gaps.
3. `source-complete` — every required claim type has an appropriate source role, fitness category and concrete locator.
4. `expert-reviewed` — a named domain specialist has reviewed a stated scope against an exact dataset version and recorded an acceptance decision and conflict statement.
5. `published-featured` — the expert-reviewed scope also passes public narrative, reproducibility, accessibility and stable-URL gates.

## Required review record

A human review record must include:

- reviewer name and identity type;
- relevant expertise;
- ORCID when available (required for `published-featured`);
- exact review scope, including entity, field and claim IDs where partial;
- reviewed dataset version and review date;
- one decision: `accepted`, `accepted-with-reservations` or `changes-requested`;
- decision notes and unresolved disputes;
- conflict-of-interest disclosure.

An automated record uses `automated-audit-only`, sets `scientificPeerReview` to `false` and cannot advance scientific maturity.

## Claim and field checks

For each reviewed visible field, confirm its content origin (`source-derived-fact`, `editorial-synthesis`, `automated-text` or `unavailable`), claim type, supporting or contradicting relation, source fitness and locator. Shared broad bibliographies are insufficient when a claim-specific source is available.

## Partial and disputed reviews

Record the narrowest accepted scope. A reviewer may accept taxonomy while requesting changes to ecology; the unresolved scope stays unreviewed. Contradictory evidence remains visible and should use contested confidence or an explicit rationale.

## Perissodactyla exit criteria

- All 17 package entities have their concept, parent relationship and scope checked.
- All ten profiles have visible-field origin and claim mappings checked.
- Required taxonomy, range, morphology, ecology and biogeography claims have fit sources and concrete locators.
- The flagship story is checked step by step through claim, reference and Explorer state.
- The exact package review record is signed by a qualified human reviewer.
