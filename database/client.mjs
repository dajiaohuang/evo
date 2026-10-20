import pg from 'pg'

export const PROJECT_ID = 'dry-pine-48288359'

export async function connect() {
  if (process.env.NEON_PROJECT_ID !== PROJECT_ID) throw new Error('Refusing an unrecognized Neon project')
  const connectionString = process.env.DATABASE_URL_UNPOOLED
  if (!connectionString) throw new Error('DATABASE_URL_UNPOOLED is required; no credentials are printed')
  let url
  try { url = new URL(connectionString) } catch { throw new Error('Invalid configured database URL; value omitted') }
  const host = url.hostname
  if (!host.endsWith('.neon.tech') || host.includes('-pooler')) throw new Error('Migration requires the verified direct Neon connection')
  url.searchParams.set('sslmode', 'verify-full')
  const client = new pg.Client({ connectionString: url.toString(), connectionTimeoutMillis: 20000, application_name: 'evo-platform-v2-migration' })
  try { await client.connect() } catch (error) { throw new Error(safeError(error)) }
  return client
}

export function safeError(error) {
  let message = error instanceof Error ? error.message : String(error)
  for(const [key,value] of Object.entries(process.env))if(/TOKEN|PASSWORD|DATABASE_URL|POSTGRES_URL/.test(key)&&value&&value.length>12)message=message.split(value).join('[redacted]')
  return message.replace(/postgres(?:ql)?:\/\/[^\s"']+/gi, '[redacted database URL]')
}
