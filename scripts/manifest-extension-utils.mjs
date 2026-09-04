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

// Some authorities include source-only shards in files; others list them separately.
// Count each canonical path once, without adding it to an already inclusive total.
export function summarizeExtensions(extensions) {
  const files = extensions.flatMap((extension) => [...new Map(
    [...(extension.files ?? []), ...(extension.upstreamOnlyFiles ?? [])]
      .map((file) => [file.path, file]),
  ).values()])
  return {
    extensionCount: extensions.length,
    extensionFileCount: files.length,
    extensionCompressedBytes: files.reduce((sum, file) => sum + (file.bytes ?? 0), 0),
    extensionSourceBytes: files.reduce((sum, file) => sum + (file.sourceBytes ?? 0), 0),
  }
}
