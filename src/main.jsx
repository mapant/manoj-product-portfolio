import { StrictMode, useLayoutEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Styles/DesktopLayout.css'
import App from './App.jsx'
import OverviewSection from './OverviewSection.jsx'

function PortfolioRoot() {
  useLayoutEffect(() => {
    const anchor = document.querySelector('.overview-anchor')
    const existingHost = document.getElementById('overview-host')
    const source = anchor || existingHost
    if (!source) return undefined

    const host = existingHost || document.createElement('div')

    if (!existingHost) {
      host.id = 'overview-host'
      host.className = 'overview-host'
      source.replaceWith(host)
    }

    const overviewRoot = createRoot(host)
    overviewRoot.render(<OverviewSection />)

    return () => overviewRoot.unmount()
  }, [])

  return <App />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortfolioRoot />
  </StrictMode>,
)
