import { rc77TetrapodProfilesZh } from './rc77TetrapodProfilesZh'

/** Exact-key lookup for the rc77 tetrapod profile and claim translations. */
export const rc77TetrapodProfilesZhKeys = {
  has(english: string): boolean {
    return Object.hasOwn(rc77TetrapodProfilesZh, english)
  },
}
