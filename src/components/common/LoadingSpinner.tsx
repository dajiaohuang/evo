export function LoadingSpinner({ message }: { message?: string }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 8, padding: 24, color: 'var(--color-text-muted)',
    }}>
      <div style={{
        width: 24, height: 24, border: '2px solid var(--color-border)',
        borderTopColor: 'var(--color-accent)', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      {message && <span style={{ fontSize: 12 }}>{message}</span>}
    </div>
  )
}
