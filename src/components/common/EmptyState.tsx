export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 4, padding: 24, color: 'var(--color-text-muted)',
      fontSize: 13,
    }}>
      <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>{title}</div>
      {description && <div style={{ fontSize: 11 }}>{description}</div>}
    </div>
  )
}
