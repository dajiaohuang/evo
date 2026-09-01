const exactCopy = new Set<string>([
  'Thirteen dossiers across molluscan and brachiopod body plans',
  'Move from named fossils to living genomes and experiments while keeping observation, homology, topology and nomenclature separate.',
  'White Sea, Russia', 'Burgess Shale, British Columbia, Canada',
  'Cambrian Series 2 localities in Siberia and Australia',
  'Transcriptome and genome sample across living Mollusca',
  'Fifteen new transcriptomes plus published living-mollusc data',
  'Laboratory embryos of Lottia gigantea and Biomphalaria glabrata',
  'Single male Octopus bimaculoides genome and twelve tissue transcriptomes',
  'Early Cambrian Arrowie Basin, South Australia',
  'Chengjiang Lagerstätte, Yunnan, China',
  'Kasari Bay, Amami Island, Japan; laboratory multi-omics sample',
  'Molluscan origin dossier route', 'Problematic early molluscan evidence',
  'Brachiopod origin dossier route', 'Stem and early brachiopod evidence',
  'Spiny molluscs', 'Chitons', 'Aplacophorans', 'Monoplacophorans', 'Tusk shells',
  'Duck-bill lamp shell', 'California two-spot octopus', 'Chengjiang Kutorgina',
  'A 189-specimen sample reveals repeated tooth rows, a broad foot and mantle-groove structures.',
  'Bivalvia', 'Coleoidea', 'Rhynchonelliformea', 'Lophophorata',
  'Diagenesis and structural analogy limit mineral and homology claims; the paper explicitly withholds undisputed Cambrian nacre.',
  'Ninety newly prepared specimens reveal a funnel, fins, eyes and two tentacles but no diagnostic hard-part series.',
  'The expanded sample repeatedly preserves paired camera-like eyes, lateral fins, an axial cavity and a ventral funnel-like structure.',
  'Deep conchiferan nodes vary among matrices and contemporary studies; the published corrigendum means corrected supplementary figures are the controlling visual record.',
  'Across referred specimens, the reconstruction combines a lophophoral chamber between paired agglutinated valves with a collar, conical tube and long pedicle with inferred coelomic space; no individual fossil is asserted to preserve every feature.',
  'A second matrix adds every major living group',
  'Conflicting deep nodes and corrected supplementary figures are retained rather than averaged into false certainty.',
  'Articulation and valve homology are reconstructions, not a preserved whole organism or settled stem topology.',
  'Wilkawillina Limestone', 'Arrowie Basin', 'South Australia',
  'Not directly preserved; feeding mode is unresolved',
  'Sessile marine carbonate setting inferred from the reconstructed attachment',
  'Sessile interpretation; locomotion is not observed',
  'Sessile benthic ecology is inferred from reconstruction, not directly observed',
  'Heilinpu Formation', 'Attached interpretation inferred from the pedicle; movement is not observed',
  'Millimetre-scale tubular fossil body',
  'Suspension-feeding interpretation is limited to the reconstructed specimen anatomy',
  'Paired agglutinated valves around a lophophoral chamber',
  'Bipartite tube with a median collar', 'Long pedicle with an inferred coelomic space',
  'Ajax Limestone, South Australia', 'Erkeket Formation, South Australia',
  'Shallow-marine Cambrian carbonate setting inferred from the sampled formations',
  'Foliated-aragonite comparison', 'Chengjiang Lagerstätte', 'Early Cambrian calcareous beds',
  'Pedicle attachment inferred from the preserved pedicle; movement is not observed',
  'Articulated calcareous valves', 'Digestive tract and pedicle',
])

const dossierMarkers = [
  'kimberella', 'odontogriphus', 'orthrozanclus', 'pojetaia', 'nectocaris',
  'aculifera', 'polyplacophora', 'aplacophora', 'monoplacophora', 'scaphopoda',
  'lottia', 'biomphalaria', 'octopus bimaculoides', 'micrina', 'kutorgina',
  'lingula', 'yuganotheca', 'radula', 'nodal', 'pitx', 'halwaxiida',
  'mollusc', 'bivalve', 'cephalopod', 'gastropod', 'brachiopod', 'sclerite',
  'lophophore', 'shell', 'genome', 'phylogenomic', 'ediacaran',
  '159,801 accepted', 'thirteen dossiers',
]

export const molluscsBrachiopodsZhKeys = {
  has(english: string): boolean {
    const normalized = english.toLocaleLowerCase()
    return exactCopy.has(english) || dossierMarkers.some((marker) => normalized.includes(marker))
  },
}
