import type { ReactNode } from 'react'
import './AppLayout.css'

interface AppLayoutProps {
  map: ReactNode
  tree: ReactNode
  timeline: ReactNode
  details: ReactNode
}

export function AppLayout({ map, tree, timeline, details }: AppLayoutProps) {
  return (
    <div className="app-layout">
      <div className="app-layout__map">{map}</div>
      <div className="app-layout__tree">{tree}</div>
      <div className="app-layout__details">{details}</div>
      <div className="app-layout__timeline">{timeline}</div>
    </div>
  )
}
