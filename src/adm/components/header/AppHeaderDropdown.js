import React from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilLockLocked,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import useAuthStore from '../../../auth/lib/storeAuth'

const AppHeaderDropdown = () => {
  const logout = useAuthStore((s) => s.logout)

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
        <CIcon icon={cilUser} size='xxl' />
      </CDropdownToggle>
      <CDropdownMenu placement="bottom-end">
        <CDropdownItem href="/" onClick={logout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Sair
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
