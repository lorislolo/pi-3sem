import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import useAxios from './lib/useAxios'
import useAuthStore from './lib/storeAuth'
import '../adm/scss/style.scss'

const Login = () => {
  const axios = useAxios()
  const login = useAuthStore((e) => e.login)

  const [validated, setValidated] = useState(false)
  const [emailTxt, setEmailTxt] = useState('')
  const [passTxt, setPassTxt] = useState('')

  const hanldeLogin = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/funcionario/login', { email: emailTxt, senha: passTxt })

      console.log(data)
      login(data.token, data.user.roles)
    } catch (error) {
      console.log(error)
      alert('Email ou Senha Invalido')
    }
    setValidated(true)
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCard className="p-4">
              <CCardBody>
                <CForm
                  className="needs-validation"
                  noValidate
                  validated={validated}
                  onSubmit={hanldeLogin}
                >
                  <h1>Login</h1>
                  <p className="text-body-secondary">Faça login em sua conta</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Email"
                      autoComplete="email"
                      value={emailTxt}
                      onChange={(e) => setEmailTxt(e.target.value)}
                      required
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Senha"
                      autoComplete="current-password"
                      value={passTxt}
                      onChange={(e) => setPassTxt(e.target.value)}
                      required
                    />
                  </CInputGroup>

                  <CButton color="primary" className="px-4 w-100" type="submit">
                    ENTRAR
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
