import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './16.condtionalRendering/App.jsx'
import ListRendering from './17.ListRendering/ListRendering.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ListRendering />
  </StrictMode>,
)
