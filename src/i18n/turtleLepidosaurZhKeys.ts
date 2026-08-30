const exactKeys = new Set([
  'Hidden-necked turtles',
  'Side-necked turtles',
  'Tuatara lineage',
  'Squamate total group',
  'Snakes',
  'Pan-Testudines',
  'Pan-Squamata',
  'Testudines',
  'Pleurodira',
  'Neodiapsida',
])

const markers = [
  'Eunotosaurus', 'NHM PV R 4949', 'SAM K 1133', 'Beaufort Group',
  'Pappochelys', 'Vellberg', 'SMNS 91356', 'SMNS 91360', 'gastralia',
  'Odontochelys', 'IVPP V 15639', 'developed plastron', 'plastron-first', 'Shell elements',
  'Caribemys', 'MNHNCu P-3209', 'crown-Testudines', 'fossil minimum', 'posterior node age',
  'Taytalura', 'PVSJ 698', 'Ischigualasto Formation', 'lepidosauromorph', 'scan volume',
  'Megachirella', 'PZO 628', 'Dont Formation', 'morphology and molecules', 'molecular constraint',
  'Bellairsia', 'NMS G.2022.1.1', 'Kilmaluag Formation', 'near-complete skeleton',
  'Cryptovaranoides', 'NHMUK PV R36822', 'Slickstones Quarry', 'same block supports',
  'COL26.8 assigns 12,622', 'named bones and CT volumes',
  'Guanling Formation', 'Jagua Formation', 'Lepidosauromorpha',
  'Stem-squamate placement', 'same holotype and disputed',
  'rib section tests', 'Separate preserved tissue', 'complete plastron and incomplete',
  'fossil sets a minimum', 'three-dimensional skull enters', 'Completeness improves',
]

export function hasTurtleLepidosaurTranslation(english: string): boolean {
  return exactKeys.has(english) || markers.some((marker) => english.includes(marker))
}
