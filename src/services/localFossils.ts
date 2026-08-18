import type { FossilOccurrence } from '../types'

const asFossils = (arr: unknown): FossilOccurrence[] => arr as FossilOccurrence[]

type FossilModule = { default: unknown }

const fossilLoaders: Record<string, () => Promise<FossilModule>> = {
  Cambrian: () => import('../../data/fossils/cambrian.json'),
  Ordovician: () => import('../../data/fossils/ordovician.json'),
  Silurian: () => import('../../data/fossils/silurian.json'),
  Devonian: () => import('../../data/fossils/devonian.json'),
  Carboniferous: () => import('../../data/fossils/carboniferous.json'),
  Permian: () => import('../../data/fossils/permian.json'),
  Triassic: () => import('../../data/fossils/triassic.json'),
  Jurassic: () => import('../../data/fossils/jurassic.json'),
  Cretaceous: () => import('../../data/fossils/cretaceous.json'),
  Paleogene: () => import('../../data/fossils/paleogene.json'),
  Neogene: () => import('../../data/fossils/neogene.json'),
  Quaternary: () => import('../../data/fossils/quaternary.json'),
}

export const FOSSIL_PERIODS = Object.freeze(Object.keys(fossilLoaders))

const fossilStore: Record<string, FossilOccurrence[]> = {}
const loadingPeriods = new Map<string, Promise<FossilOccurrence[]>>()
const taxonIndex: Record<string, FossilOccurrence[]> = {}
let indexPromise: Promise<void> | null = null

async function buildTaxonIndex(): Promise<void> {
  if (indexPromise) return indexPromise
  indexPromise = (async () => {
    await Promise.all(Object.keys(fossilLoaders).map(getFossilsByInterval))
    for (const records of Object.values(fossilStore)) {
      for (const occ of records) {
        if (occ.tid) {
          if (!taxonIndex[occ.tid]) taxonIndex[occ.tid] = []
          if (taxonIndex[occ.tid].length < 100) {
            taxonIndex[occ.tid].push(occ)
          }
        }
      }
    }
  })()
  return indexPromise
}

export async function getFossilsByInterval(period: string): Promise<FossilOccurrence[]> {
  if (fossilStore[period]) return fossilStore[period]
  if (loadingPeriods.has(period)) return loadingPeriods.get(period)!
  const loader = fossilLoaders[period]
  if (!loader) return []

  const promise = loader().then((module) => {
    const records = asFossils(module.default)
    fossilStore[period] = records
    loadingPeriods.delete(period)
    return records
  })
  loadingPeriods.set(period, promise)
  return promise
}

export async function getFossilsByTaxon(taxonId: string): Promise<FossilOccurrence[]> {
  await buildTaxonIndex()
  return taxonIndex[taxonId] ?? []
}

export async function getAllFossils(): Promise<FossilOccurrence[]> {
  const chunks = await Promise.all(FOSSIL_PERIODS.map(getFossilsByInterval))
  return chunks.flat()
}

export function getLoadedFossilTotal(period: string): number {
  return fossilStore[period]?.length ?? 0
}
