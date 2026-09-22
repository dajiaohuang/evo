# Discovering evidence in Evo 0.21

The reading edition now offers three editorial entry trails, a chronological
period navigator, and a complete collection directory. Trail titles, durations
and steps come from already published stories. The Cambrian preview reuses the
checksum-verified CAO2024 frame and its explicit model/source attribution. The
period labels, boundaries and colors come from the pinned time scale; equal
widths are navigational and do not represent equal durations.

## Directory search

All ten bilingual collection indexes retain their complete HTML lists. Optional
`directory-controls.js` searches both language titles, metadata and record paths
already present in that page. It does not call an API, download scientific
shards, use local storage, or send search text to an analytics service. All
whitespace-separated terms must match. Case/accent normalization is only a
discovery aid; it never changes scientific names or source comparison rules.

Users can sort by source order or localized name order, copy the `q` / `sort`
URL, reload it, and switch languages while keeping the query. Clear restores
the original order and focuses the search field. Input composition finishes
before filtering. Explicit labels, a live count, and an empty-state message
make the behavior accessible. Without JavaScript the controls stay hidden and
all entries remain readable; URL filters require the optional enhancement.

Examples after deployment:

- [Chinese and scientific name](https://dajiaohuang.github.io/evo/zh/taxa/?q=%E5%A5%87%E8%B9%84%20Perissodactyla)
- [Devonian period](https://dajiaohuang.github.io/evo/intervals/?q=Devonian%20period)
- [Reference names in descending order](https://dajiaohuang.github.io/evo/references/?sort=name-desc)

The script is limited to 8 KiB and allowed only on the 20 collection-index
pages. The homepage and evidence pages require no executable script. The
existing 64 MiB reading-site budget and canonical metadata equality check
remain enforced.

## Full application search

Slash or Ctrl/Cmd-K opens search; slash leaves editable controls alone.
Arrow keys select results, Home/End move between result endpoints, Enter opens
the focused result (or first result from the query field), and Escape closes.
Tab stays in the dialog and closing restores the invoking focus. Composition
keystrokes are not interpreted as navigation or close commands.

Content and registry results retain independent errors and loading states.
Registry lookup starts at three characters. Failed requests expose a real
retry action; typing a new query aborts the old search and late responses
cannot overwrite it. Backend name requests now receive the cancellation
signal. Search results still disclose source release, nomenclatural status
and scientific maturity; a catalogue name is not an Atlas evidence dossier.

## Verification boundary

Interaction tests cover no-script reading, real source destinations, mixed
language/Unicode queries, literal hostile text, sorting/reset, reload and
language preservation, narrow layouts, composition, keyboard focus, retry,
backend routing and delayed responses. Real browser tests exercise retry after
restoring a blocked registry request. These engineering checks do not promote
scientific maturity, source license rights or human review status.

The RC148 release envelope changes version metadata only. Scientific archives,
claims, ownership and reviews retain their existing values. The separate real
[COL26.8 to COL26.9 report](catalogue-release-comparison.md) does not silently
adopt COL26.9 into the application registry.
