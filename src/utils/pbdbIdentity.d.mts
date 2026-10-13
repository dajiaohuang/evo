export function isPbdbTaxonId(value: unknown): value is `txn:${number}`
export function pbdbClassificationId(classification: unknown): `txn:${number}` | null
