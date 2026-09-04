// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { execFileSync } from 'node:child_process'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
const root=fileURLToPath(new URL('../',import.meta.url)); const archive=join(root,'data/sources/archives/checklistbank-1127-cestoda-2026-09-01.zip'); const script=join(root,'scripts/build-worms-cestoda-source.py')
describe('Cestoda archive projection',()=>{it('rebuilds two isolated mirrors byte-identically',()=>{const base=join(root,'.repostew','cestoda-test'); const outs=[join(base,'one'),join(base,'two')]; for(const out of outs) execFileSync('python',['-B',script,'--archive',archive,'--output-root',out],{cwd:root}); const dir=o=>join(o,'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals'); const files=o=>readdirSync(dir(o)).sort(); expect(files(outs[0])).toEqual(files(outs[1])); for(const f of files(outs[0])) expect(readFileSync(join(dir(outs[0]),f))).toEqual(readFileSync(join(dir(outs[1]),f))); const d=JSON.parse(readFileSync(join(dir(outs[0]),'worms-cestoda-sidecar.json'))); expect(d.scope).toMatchObject({colRootUsageId:'8Z',eligibleColSpecies:3015,sourceAcceptedSpecies:3047}); expect(d.counts).toMatchObject({total:3015,records:3054,accepted:3008,unmatched:7,upstreamOnly:39}); expect(d.deliveryProfiles['web-light'].records).toBe(0); expect(d.deliveryProfiles['native-full'].records).toBe(3054)},120000)})
