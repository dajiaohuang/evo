const normalize = name => name.normalize('NFKC').toLocaleLowerCase('en-US').replaceAll(/\s+/g, ' ').trim()
function oneEditApart(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false
  let i = 0, j = 0, edits = 0
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue }
    if (++edits > 1) return false
    if (a.length > b.length) i++
    else if (b.length > a.length) j++
    else { i++; j++ }
  }
  return edits + Number(i < a.length || j < b.length) <= 1
}
export function similarTaxonNames(source, target) {
  if (typeof source !== 'string' || typeof target !== 'string') return false
  const a = normalize(source), b = normalize(target)
  if (!a || !b) return false
  if (oneEditApart(a, b)) return true
  const stem = name => name.replace(/(?:aceae|oidea)$/, '')
  return stem(a) !== a && stem(b) !== b && stem(a) === stem(b)
}

// A grammatical ending can change across taxonomic treatments. This only
// nominates a candidate; it does not establish that the taxa are identical.
export function similarSpeciesInflection(source, target) {
  if (typeof source !== 'string' || typeof target !== 'string') return false
  const a = normalize(source).split(' '), b = normalize(target).split(' ')
  if (a.length !== 2 || b.length !== 2 || a[0] !== b[0]) return false
  const stem = word => word.replace(/(?:um|a)$/, '')
  return stem(a[1]).length >= 5 && stem(a[1]) === stem(b[1]) && stem(a[1]) !== a[1] && stem(b[1]) !== b[1]
}
