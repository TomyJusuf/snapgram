import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App'

const domNode = document.getElementById('root')
const root = createRoot(domNode ?? document.body)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
