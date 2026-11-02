import { test } from 'node:test'
import assert from 'node:assert/strict'
import { hybridVariants } from './wikipedia-col-hybrid-name.mjs'
test('generate only marked ASCII hybrid forms',()=>{
 assert.deepEqual(hybridVariants('Crataegus × rubrocarnea'),['Crataegus x rubrocarnea','Crataegus xrubrocarnea'])
 assert.deepEqual(hybridVariants('× Thyrsocalamus'),['x Thyrsocalamus','xThyrsocalamus'])
 assert.deepEqual(hybridVariants('Crataegus minor'),[])
})
