export function isCandidateIdentityHeld(nodeId, item, url, heldItem, heldUrl) {
  return Boolean((item && heldItem?.(nodeId, item)) || (url && heldUrl?.(nodeId, url)))
}
