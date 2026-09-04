// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { execFileSync } from 'node:child_process'
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
const root=fileURLToPath(new URL('../',import.meta.url)); const script=join(root,'scripts/build-worms-kinorhyncha-source.py'); const archive=join(root,'data/sources/archives/checklistbank-1153-kinorhyncha-2026-09-01.zip'); const dir=o=>join(o,'data/catalogue-of-life/releases/2026-08-20/resource-packs/other-animals')
describe('Kinorhyncha archive projection',()=>{it('rebuilds exact 1153 scope deterministically',()=>{const outs=[mkdtempSync(join(tmpdir(),'kino-one-')),mkdtempSync(join(tmpdir(),'kino-two-'))]; try {for(const o of outs) execFileSync('python',['-B',script,'--archive',archive,'--output-root',o],{cwd:root}); const fs=o=>readdirSync(dir(o)).sort(); expect(fs(outs[0])).toEqual(fs(outs[1])); for(const f of fs(outs[0])) expect(readFileSync(join(dir(outs[0]),f))).toEqual(readFileSync(join(dir(outs[1]),f))); const d=JSON.parse(readFileSync(join(dir(outs[0]),'worms-kinorhyncha-sidecar.json'))); expect(d.source).toMatchObject({datasetId:'1153',title:'World Kinorhyncha Database',versionDoi:'10.48580/d3ds.v86'}); expect(d.scope).toMatchObject({colRootUsageId:'B8VF5',eligibleColSpecies:362,sourceAcceptedSpecies:362}); expect(d.counts).toMatchObject({total:362,accepted:362,unmatched:0,upstreamOnly:0}); expect(d.deliveryProfiles['web-light'].records).toBe(0); expect(d.deliveryProfiles['native-full'].records).toBe(362)} finally {for(const o of outs) rmSync(o,{recursive:true,force:true})}},120000)})
