import {createHash} from 'node:crypto'

export const sha256 = value => createHash('sha256').update(value).digest('hex')
export function stableJson(value) {
  if (Array.isArray(value)) return '['+value.map(stableJson).join(',')+']'
  if (value && typeof value === 'object') return '{'+Object.keys(value).sort().map(key=>JSON.stringify(key)+':'+stableJson(value[key])).join(',')+'}'
  return JSON.stringify(value)
}
export function internalId(value) {
  // Internal storage identity only. Never emitted as a new scientific ID.
  const bytes=createHash('sha1').update(Buffer.from('6ba7b8119dad11d180b400c04fd430c8','hex')).update('https://evo.invalid/storage/'+value).digest().subarray(0,16)
  bytes[6]=(bytes[6]&15)|80;bytes[8]=(bytes[8]&63)|128
  const s=bytes.toString('hex');return `${s.slice(0,8)}-${s.slice(8,12)}-${s.slice(12,16)}-${s.slice(16,20)}-${s.slice(20)}`
}
