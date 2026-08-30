import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const comfyUrl = (process.env.COMFYUI_URL ?? 'http://127.0.0.1:8188').replace(/\/$/, '')

export const workflow = {
  comfyUiCommit: '6f7cd7fceaaf60d2669b554936394a7412c6fde5',
  width: 1280,
  height: 800,
  steps: 8,
  cfg: 1,
  sampler: 'euler',
  scheduler: 'simple',
  denoise: 1,
  model: {
    filename: 'krea2_turbo_nvfp4.safetensors',
    sha256: '61527003b2d537055494d01bc8efe51d6e86e64192ba23e3721a5647231fe394',
  },
  textEncoder: {
    filename: 'qwen3vl_4b_fp8_scaled.safetensors',
    sha256: '54bd5144df0bbc25dd6ccadfcb826b521445a1b06ae5a42570bdd2974ca87094',
  },
  vae: {
    filename: 'qwen_image_vae.safetensors',
    sha256: 'a70580f0213e67967ee9c95f05bb400e8fb08307e017a924bf3441223e023d1f',
  },
}

export const reconstructions = [
  {
    id: 'asteroxylon-interpretive-reconstruction',
    seed: 5601012,
    prompt: 'Scientific educational reconstruction plate on a light neutral background. Depict one evidence-bounded Asteroxylon mackiei plant as a very small early Devonian vascular plant, not a modern shrub: a horizontal creeping root-bearing axis partly exposed at the soil surface, several short downward rooting axes without modern branched roots, and only a few upright dichotomously forked aerial axes. Put sparse tiny triangular leaf-like enations only on the upper aerial axes; keep the lower and rooting axes smooth and leafless. Show wet bare mineral ground only as a narrow base. Restrained olive and earth-brown museum illustration, clean side view, crisp anatomical silhouette. No dense foliage, no needles, no fern fronds, no flowers, no broad leaves, no woody trunk, no coral shape, no labels, no text, no watermark, no scale bar, no animals. Do not imply a photograph, exact color, a universal lycophyte body plan, or direct ancestry.',
  },
  {
    id: 'eocyathispongia-interpretive-reconstruction',
    seed: 5602002,
    prompt: 'Diagram-like scientific reconstruction plate on a light neutral background, not a photograph. Depict only the documented outer geometry of the single millimetre-scale Eocyathispongia qiania holotype: exactly three short smooth-walled connected tubes growing from one compact rounded base, each tube ending in one simple funnel-like open top. The continuous outer surface must be plain and unperforated because a replicated canal system and spicules are not preserved. Pale beige matte tissue, clean specimen-centered three-quarter view, a thin patch of plain marine sediment beneath. No sponge pores, no holes in the walls, no coral texture, no spicules, no branching colony, no tentacles, no eyes, no mouth, no labels, no text, no watermark, no scale bar, no other organisms. Do not imply confirmed sponge affinity, preserved soft tissue, observed ecology, or multiple specimens.',
  },
  {
    id: 'kimberella-interpretive-reconstruction',
    seed: 5603001,
    prompt: 'Scientific educational natural-history plate, one conservative evidence-bounded interpretive reconstruction of Kimberella quadrata on a shallow Ediacaran seafloor, centimetre-scale low bilateral oval soft-bodied animal, gently domed non-mineralized dorsal cover with subtle transverse zones, broad muscular foot-like underside contacting the sediment, anterior and posterior ends distinguishable but no invented face, neutral museum reconstruction illustration, specimen-centered three-quarter side view, restrained tan grey and muted mauve palette, soft underwater light, sparse microbial mat texture, no shell, no radula, no teeth, no eyes, no tentacles, no labels, no text, no watermark, no scale bar, no feeding trace, no other animals, no fantasy, do not imply a photograph, crown-mollusc membership, direct ancestry, observed feeding behaviour, or known color.',
  },
  {
    id: 'waptia-interpretive-reconstruction',
    seed: 5604014,
    prompt: 'Diagram-like Burgess Shale life reconstruction on a plain light neutral background, exactly one Waptia fieldensis in clean strict side view. Make the anatomy unlike a modern shrimp. A large smooth paired bivalved carapace forms two thin oval valves around the head and front third of the body; show both valves by a clear offset ventral rim, without a pointed rostrum. The two valves stop abruptly, leaving the rear two-thirds as a free, slender, clearly segmented flexible trunk. The head has two modest stalked eyes and two long thin antennae, with compact mouthparts and no claws. Beneath the first trunk segments place a few short walking limbs. Beneath the posterior trunk place a separate sequence of broad flat leaf-shaped lamellate swimming appendages, close to the body and clearly different from walking legs. End the trunk in a small paired tail fan. Restrained russet-grey scientific line-and-wash, no photorealism, generous empty space. Absolutely no modern shrimp or prawn silhouette, no decapod body plan, no giant chelae, no serrated rostrum, no long series of identical walking legs, no lobster armor, labels, text, watermark, scale bar, prey or action. Do not imply exact color, exact swimming posture, direct ancestry or a universal mandibulate body plan.',
  },
  {
    id: 'shenacanthus-interpretive-reconstruction',
    seed: 5605002,
    prompt: 'Diagram-like scientific reconstruction plate on a light neutral background. Depict exactly one Shenacanthus vermiformis in strict lateral view, a small early Silurian jawed fish known from one near-complete holotype. Give it a short broad head and anterior trunk wrapped in a few conspicuously large overlapping thoracic armor plates, followed by a long slender vermiform tail region covered with minute scales. Keep the branchial region behind the head compact and chondrichthyan-like; keep paired fins and the simple tail anatomically restrained. Subdued charcoal-olive and sand museum illustration, crisp body-plan silhouette. No barbels, no modern bony-fish operculum, no school of fish, no generic salmon body, no displayed shark teeth, no invented spines, no labels, no text, no watermark, no scale bar, no prey. Do not imply a photograph, direct ancestry, exact ecology, exact color, exact placement, or population variation.',
  },
  {
    id: 'tiktaalik-interpretive-reconstruction',
    seed: 5606017,
    prompt: 'Evidence-bounded natural-history reconstruction of exactly one Tiktaalik roseae, fully underwater and swimming horizontally in a clean side view with a slight view from above. Make the front unmistakable: a broad low flattened skull wider than the neck, blunt shallow snout, and two small eyes raised on the dorsal top surface. Behind the skull show a short mobile neck notch with no opercular plate, then a robust ribcage and long scaled fish trunk leading to a continuous fish tail. The paired pectoral fins must have short thick fleshy lobed bases close to the chest, bent subtly at an elbow-like region, then taper into only a modest narrow fringe of distal fin rays; they are not giant fans. Keep every fin off the sediment and the whole animal submerged. Use a restrained olive-brown museum plate, soft underwater light, anatomy legible. Keep the dorsal body outline low and uninterrupted: no tall dorsal fins and no ordinary generic-fish fin template. No giant ray fans, no crocodile scutes, no legs, hands, feet, toes or fingers, no walking, propping, dry land, labels, text, watermark, scale bar or prey. Do not imply terrestrial locomotion, direct ancestry, exact internal fin anatomy, exact behavior, or exact color.',
  },
  {
    id: 'ambulocetus-interpretive-reconstruction',
    seed: 5607004,
    prompt: 'Detailed natural-history watercolor reconstruction of one extinct amphibious quadrupedal mammal from the Eocene, corresponding to the partial Ambulocetus skeleton, standing calmly on a bare riverbank in strict side view. Its body is long and robust like a large low-slung land mammal, with a long narrow toothed rostrum, flexible neck, substantial shoulder and pelvis, and a long round muscular tail tapering smoothly to a point. Show exactly four weight-bearing mammalian legs: two forelegs with distinct elbows and broad five-toed hands, and two large hind legs with distinct knees and very broad five-toed feet. Restrained umber-grey palette, soft diffuse light, anatomically legible realistic museum illustration. This is not a modern whale: no dorsal fin, no tail fluke, no pectoral flippers, no dolphin silhouette, no seal body, no fish body. No dense fur claim, labels, text, watermark, scale bar, prey, or dramatic action. Do not imply a photograph, observed swimming style, observed land gait, direct ancestry, exact soft tissue, or exact color.',
  },
  {
    id: 'archaeopteryx-interpretive-reconstruction',
    seed: 5608013,
    prompt: 'Paleontological life reconstruction plate of exactly one Archaeopteryx as a small feathered theropod dinosaur, strict lateral view on plain pale limestone. Give it a shallow angular reptilian skull and low brow; the long narrow jaws are held slightly open and must visibly contain a row of small teeth, with no keratin beak and no rounded modern bird face. Use an S-curved neck, horizontal torso, long hind legs and clawed toes. Each forelimb has three separate long clawed fingers projecting beyond folded asymmetric flight feathers. A long straight rigid chain of narrow tail vertebrae, clearly visible as a central bony line, extends more than the torso length behind the pelvis. Short paired feathers attach evenly on both sides of successive tail vertebrae, creating a narrow symmetrical feather fringe of nearly uniform width; the tail is never one giant wing, one feather or a fan. Restrained charcoal-brown scientific line-and-wash, anatomy legible, no photorealism. No toothless beak, no songbird head, no short tail, no modern tail fan, no giant tail plume, no chicken stance, no dramatic flight, no iridescence, labels, text, watermark, scale bar or prey. Do not imply known plumage color, modern crown-bird flight performance, or direct ancestry.',
  },
]

function promptGraph(item) {
  return {
    1: { class_type: 'UNETLoader', inputs: { unet_name: workflow.model.filename, weight_dtype: 'default' } },
    2: { class_type: 'CLIPLoader', inputs: { clip_name: workflow.textEncoder.filename, type: 'krea2', device: 'default' } },
    3: { class_type: 'VAELoader', inputs: { vae_name: workflow.vae.filename } },
    4: { class_type: 'CLIPTextEncode', inputs: { clip: ['2', 0], text: item.prompt } },
    5: { class_type: 'ConditioningZeroOut', inputs: { conditioning: ['4', 0] } },
    6: { class_type: 'EmptyLatentImage', inputs: { width: workflow.width, height: workflow.height, batch_size: 1 } },
    7: { class_type: 'KSampler', inputs: { model: ['1', 0], seed: item.seed, steps: workflow.steps, cfg: workflow.cfg, sampler_name: workflow.sampler, scheduler: workflow.scheduler, positive: ['4', 0], negative: ['5', 0], latent_image: ['6', 0], denoise: workflow.denoise } },
    8: { class_type: 'VAEDecode', inputs: { samples: ['7', 0], vae: ['3', 0] } },
    9: { class_type: 'SaveImage', inputs: { images: ['8', 0], filename_prefix: `evo_rc56/${item.id}` } },
  }
}

async function queue(item) {
  const response = await fetch(`${comfyUrl}/prompt`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ prompt: promptGraph(item), client_id: 'evo-rc56' }),
  })
  if (!response.ok) throw new Error(`ComfyUI rejected ${item.id}: ${response.status} ${await response.text()}`)
  return response.json()
}

async function waitFor(promptId) {
  for (;;) {
    const response = await fetch(`${comfyUrl}/history/${promptId}`)
    if (!response.ok) throw new Error(`ComfyUI history failed for ${promptId}: ${response.status}`)
    const history = await response.json()
    if (history[promptId]?.status?.completed) return history[promptId]
    await new Promise((resolve) => setTimeout(resolve, 1_000))
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1])) {
  const selectedIds = new Set(process.argv.slice(2))
  const selected = selectedIds.size ? reconstructions.filter((item) => selectedIds.has(item.id)) : reconstructions
  if (selected.length !== (selectedIds.size || reconstructions.length)) throw new Error('One or more requested reconstruction IDs are unknown')
  for (const item of selected) {
    const queued = await queue(item)
    const completed = await waitFor(queued.prompt_id)
    const image = completed.outputs?.['9']?.images?.[0]
    if (!image) throw new Error(`ComfyUI returned no image for ${item.id}`)
    console.log(JSON.stringify({ id: item.id, seed: item.seed, promptId: queued.prompt_id, image }))
  }
}
