export function replaceOwnedExtensions(existing, owned, owns) {
  const replacements = new Map(owned.map((extension) => [extension.id, extension]))
  const result = []
  for (const extension of existing) {
    if (owns(extension)) {
      const replacement = replacements.get(extension.id)
      if (replacement) result.push(replacement)
      replacements.delete(extension.id)
    } else {
      result.push(extension)
    }
  }
  for (const extension of owned) {
    if (replacements.has(extension.id)) {
      result.push(extension)
      replacements.delete(extension.id)
    }
  }
  return result
}
