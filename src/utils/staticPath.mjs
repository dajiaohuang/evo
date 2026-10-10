// Keep one URL segment valid as a directory name on every supported platform.
export function staticPathSegment(id) {
  return encodeURIComponent(id).replaceAll('~', '%7E').replaceAll('%', '~')
}

export function idFromStaticPathSegment(segment) {
  return decodeURIComponent(segment.replace(/~([0-9A-F]{2})/g, '%$1'))
}
