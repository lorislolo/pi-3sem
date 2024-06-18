import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Funcionario
const FuncionarioTable = React.lazy(() => import('./views/funcionario/FuncionarioTable'))
const FuncionarioCadastro = React.lazy(() => import('./views/funcionario/FuncionarioCadastro'))
const FuncionarioEditar = React.lazy(() => import('./views/funcionario/FuncionarioEditar'))

// Catalogo
const CatalogoTable = React.lazy(() => import('./views/catalogo/CatalogoTable'))
const CatalogoCadastro = React.lazy(() => import('./views/catalogo/CatalogoCadastro'))
const CatalogoEditar = React.lazy(() => import('./views/catalogo/CatalogoEditar'))

const Relatorio = React.lazy(() => import('./views/Relatorio'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/funcionario', name: 'Funcionario', element: FuncionarioTable },
  { path: '/funcionario/cadastro', name: 'Cadastrar', element: FuncionarioCadastro },
  { path: '/funcionario/editar/:id', name: 'Editar', element: FuncionarioEditar },
  { path: '/catalogo', name: 'Catalogo', element: CatalogoTable },
  { path: '/catalogo/cadastro', name: 'Cadastrar', element: CatalogoCadastro },
  { path: '/catalogo/editar/:id', name: 'Editar', element: CatalogoEditar },
  { path: '/relatorio', name: 'Relatorio', element: Relatorio}
]

export default routes
