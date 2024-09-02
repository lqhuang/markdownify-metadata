import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Popup } from './popup'

import 'src/style/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Popup />
  </StrictMode>,
)