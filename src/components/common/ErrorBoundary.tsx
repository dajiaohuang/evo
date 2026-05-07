import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  render() {
    if (this.state.error) {
      return this.props.fallback ?? (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexDirection: 'column', gap: 8, padding: 24,
          color: 'var(--color-danger)', fontSize: 13,
        }}>
          <div>Something went wrong</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', maxWidth: 400, textAlign: 'center' }}>
            {this.state.error.message}
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
