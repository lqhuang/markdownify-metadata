import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'src/style/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>hello, world!</div>
  </StrictMode>,
)
