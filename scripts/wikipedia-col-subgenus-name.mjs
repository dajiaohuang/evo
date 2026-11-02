// An abbreviated name is a search candidate, not proof of taxon identity.
export function withoutSubgenus(name) {
  return name.replace(/^([A-Z][a-z]+) \([A-Z][a-z]+\) (?=[a-z])/, '$1 ')
}
