import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilFlower,
  cilSpeedometer,
  cilUser,
  cilNotes
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Funcionario',
    to: '/funcionario',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Catalogo',
    to: '/catalogo',
    icon: <CIcon icon={cilFlower} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Relatorio',
    to: '/relatorio',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
]

export default _nav
