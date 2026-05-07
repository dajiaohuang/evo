import type { FossilOccurrence } from '../types'

import cambrianRaw from '../../data/fossils/cambrian.json'
import ordovicianRaw from '../../data/fossils/ordovician.json'
import silurianRaw from '../../data/fossils/silurian.json'
import devonianRaw from '../../data/fossils/devonian.json'
import carboniferousRaw from '../../data/fossils/carboniferous.json'
import permianRaw from '../../data/fossils/permian.json'
import triassicRaw from '../../data/fossils/triassic.json'
import jurassicRaw from '../../data/fossils/jurassic.json'
import cretaceousRaw from '../../data/fossils/cretaceous.json'
import paleogeneRaw from '../../data/fossils/paleogene.json'
import neogeneRaw from '../../data/fossils/neogene.json'
import quaternaryRaw from '../../data/fossils/quaternary.json'

const asFossils = (arr: unknown): FossilOccurrence[] => arr as FossilOccurrence[]

const fossilStore: Record<string, FossilOccurrence[]> = {
  Cambrian: asFossils(cambrianRaw),
  Ordovician: asFossils(ordovicianRaw),
  Silurian: asFossils(silurianRaw),
  Devonian: asFossils(devonianRaw),
  Carboniferous: asFossils(carboniferousRaw),
  Permian: asFossils(permianRaw),
  Triassic: asFossils(triassicRaw),
  Jurassic: asFossils(jurassicRaw),
  Cretaceous: asFossils(cretaceousRaw),
  Paleogene: asFossils(paleogeneRaw),
  Neogene: asFossils(neogeneRaw),
  Quaternary: asFossils(quaternaryRaw),
}

const taxonIndex: Record<string, FossilOccurrence[]> = {}
let indexBuilt = false

function buildTaxonIndex(): void {
  if (indexBuilt) return
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
  indexBuilt = true
}

export function getFossilsByInterval(period: string): FossilOccurrence[] {
  return fossilStore[period] ?? []
}

export function getFossilsByTaxon(taxonId: string): FossilOccurrence[] {
  buildTaxonIndex()
  return taxonIndex[taxonId] ?? []
}

export function getFossilTotal(period: string): number {
  return fossilStore[period]?.length ?? 0
}
