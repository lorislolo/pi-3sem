import React, { startTransition, Suspense, useEffect, useState } from 'react'
import useAuthStore from './lib/storeAuth'
import { CSpinner } from '@coreui/react'
import { BrowserRouter, Router } from 'react-router-dom'

const AdmApp = React.lazy(() => import('../adm/SubApp'))
const TotemApp = React.lazy(() => import('../totem/SubApp'))
const Login = React.lazy(() => import('./Login'))

export default function ProtectedRoute() {
  const roles = useAuthStore((s) => s.roles)

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        {roles === 'ADM' && <AdmApp />}
        {roles === 'TOTEM' && <TotemApp />}
        {roles === null && <Login />}
      </Suspense>
    </BrowserRouter>
  )
}
