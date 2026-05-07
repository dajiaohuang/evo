import { writeFileSync } from 'fs'

const BASE = 'https://paleobiodb.org/data1.2'

const PERIOD_EPOCHS = {
  Cambrian: ['Furongian', 'Miaolingian', 'Series 2', 'Terreneuvian'],
  Ordovician: ['Late Ordovician', 'Middle Ordovician', 'Early Ordovician'],
  Silurian: ['Pridoli', 'Ludlow', 'Wenlock', 'Llandovery'],
  Devonian: ['Late Devonian', 'Middle Devonian', 'Early Devonian'],
  Carboniferous: ['Pennsylvanian', 'Mississippian'],
  Permian: ['Lopingian', 'Guadalupian', 'Cisuralian'],
  Triassic: ['Late Triassic', 'Middle Triassic', 'Early Triassic'],
  Jurassic: ['Late Jurassic', 'Middle Jurassic', 'Early Jurassic'],
  Cretaceous: ['Late Cretaceous', 'Early Cretaceous'],
  Paleogene: ['Oligocene', 'Eocene', 'Paleocene'],
  Neogene: ['Pliocene', 'Miocene'],
  Quaternary: ['Holocene', 'Pleistocene'],
}

async function fetchEpoch(epoch, limit, offset) {
  const url = `${BASE}/occs/list.json?interval=${encodeURIComponent(epoch)}&show=coords,paleoloc,loc,time&limit=${limit}&offset=${offset}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  return (data.records || []).map((r) => ({
    oid: r.oid,
    tna: r.tna,
    idn: r.idn ?? '',
    tid: r.tid,
    rnk: r.rnk,
    lng: r.lng,
    lat: r.lat,
    paleolng: typeof r.pln === 'number' ? r.pln : null,
    paleolat: typeof r.pla === 'number' ? r.pla : null,
    eag: r.eag,
    lag: r.lag,
    cid: r.cid,
    oei: r.oei,
    cc2: r.cc2 ?? '',
    stp: r.stp ?? '',
  }))
}

async function fetchPeriod(period, epochs) {
  const all = []
  const seen = new Set()
  for (const epoch of epochs) {
    for (const offset of [0, 200]) {
      try {
        const records = await fetchEpoch(epoch, 200, offset)
        for (const r of records) {
          if (!seen.has(r.oid)) {
            seen.add(r.oid)
            all.push(r)
          }
        }
        console.log(`  ${epoch} offset=${offset}: ${records.length} records`)
        await new Promise((r) => setTimeout(r, 300))
      } catch (err) {
        console.error(`  ${epoch} offset=${offset}: ${err.message}`)
      }
    }
  }
  return all
}

async function main() {
  let grandTotal = 0
  for (const [period, epochs] of Object.entries(PERIOD_EPOCHS)) {
    console.log(`\nFetching ${period} (${epochs.length} epochs)...`)
    try {
      const records = await fetchPeriod(period, epochs)
      const file = `data/fossils/${period.toLowerCase()}.json`
      writeFileSync(file, JSON.stringify(records))
      // Log coordinate stats
      const hasPaleo = records.filter((r) => r.paleolng != null).length
      const countries = [...new Set(records.map((r) => r.cc2).filter(Boolean))]
      console.log(`  -> ${records.length} total (${hasPaleo} with paleo-coords), countries: ${countries.join(', ')}`)
      grandTotal += records.length
    } catch (err) {
      console.error(`Failed ${period}:`, err.message)
    }
  }
  console.log(`\nDone. ${grandTotal} total fossil records.`)
}

main()
