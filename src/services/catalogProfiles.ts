import profilesData from '../../data/registry/taxon-profiles.json'
import type { TaxonProfile } from '../types/catalog'
import { isPagesPreview, isPreviewTaxonAllowed } from '../config/pagesPreview'

// Profile lookup does not initialise event claims, stories, references or phylogeny.
const allTaxonProfiles = profilesData as TaxonProfile[]
export const taxonProfiles = isPagesPreview ? allTaxonProfiles.filter((profile) => isPreviewTaxonAllowed(profile.id)) : allTaxonProfiles
const taxonById = new Map(taxonProfiles.map((profile) => [profile.id, profile]))
export function getTaxonProfile(id: string | null): TaxonProfile | null {
  return id ? taxonById.get(id) ?? null : null
}
export function hasPublishedRange(profile: TaxonProfile): boolean {
  return profile.rangeEvidenceLevel !== 'withheld-no-range-evidence'
}
