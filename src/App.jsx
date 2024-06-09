import React from 'react'
import ReactDOM from 'react-dom/client'

const routes = {
  ADM: React.lazy(() => import('./adm/subApp')),
  TOTEM: React.lazy(() => import('./auth/subApp')),
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
