import React from 'react'
import ReactDOM from 'react-dom/client'

const Routes = {
  ADM: React.lazy(() => import('./adm/SubApp')),
  TOTEM: React.lazy(() => import('./totem/subApp')),
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Routes.ADM />
  </React.StrictMode>,
)
