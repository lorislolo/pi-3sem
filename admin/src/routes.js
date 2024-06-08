import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Fuuncionario
const FuncionarioTable = React.lazy(() => import('./views/funcionario/FuncionarioTable'))
const FuncionarioCadastro = React.lazy(() => import('./views/funcionario/FuncionarioCadastro'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/funcionario', name: 'Funcionario', element: FuncionarioTable },
  { path: '/funcionario/cadastro', name: 'Cadastrar', element: FuncionarioCadastro },
]

export default routes
