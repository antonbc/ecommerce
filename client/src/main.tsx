import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { createBrowserRouter } from 'react-router-dom'
import './index.css'
import NavigationBar from './components/NavigationBar'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <NavigationBar/>
    </>
  </StrictMode>,
)
