import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageLayout from './layouts/PageLayout.jsx'
import LandingPage from './pages/landingPage/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <PageLayout>
      <LandingPage />
    </PageLayout>
  </StrictMode>,
)
