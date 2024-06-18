import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CRow,
} from '@coreui/react'
import useAxios from '../../../auth/lib/useAxios'

function FuncionarioCadastro() {
  const axios = useAxios()
  const navigate = useNavigate()

  // const [validated, setValidated] = useState(false)
  const [nomeTxt, setNomeTxt] = useState('')
  const [funcaoTxt, setFuncaoTxt] = useState('ADM')
  const [cpfTxt, setCpfTxt] = useState('')
  const [emailTxt, setEmailTxt] = useState('')
  const [senhaTxt, setSenhaTxt] = useState('')
  const [confirmarSenhaTxt, setConfirmarSenhaTxt] = useState('')

  const handleCreate = async (event) => {
    event.preventDefault()
    if (senhaTxt !== confirmarSenhaTxt) {
      alert('As senhas não conferem')
      return
    }
    const dados = {
      nome: nomeTxt,
      cpf: cpfTxt,
      email: emailTxt,
      senha: senhaTxt,
      roles: funcaoTxt,
    }
    try {
      await axios.post('/funcionario', dados)
      alert('Funcionario cadastrado com sucesso')
      navigate('/funcionario')
    } catch (error) {
      console.log(error)
      alert('Erro ao cadastrar funcionario')
    }
    // setValidated(true)
  }
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Cadastro de Funcionario</strong>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row"
              noValidate
              // validated={validated}
              onSubmit={handleCreate}
            >
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="text"
                  label="Nome:"
                  placeholder="Nome"
                  onChange={(e) => setNomeTxt(e.target.value)}
                  value={nomeTxt}
                  required
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormSelect
                  label="Função:"
                  onChange={(e) => setFuncaoTxt(e.target.value)}
                  value={funcaoTxt}
                  required
                  options={[
                    { label: 'Administrador', value: 'ADM' },
                    { label: 'Toten', value: 'TOTEM' },
                  ]}
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="text"
                  label="CPF:"
                  placeholder="123.456.789-10"
                  onChange={(e) => setCpfTxt(e.target.value)}
                  value={cpfTxt}
                  required
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="email"
                  label="Email:"
                  placeholder="Email"
                  onChange={(e) => setEmailTxt(e.target.value)}
                  value={emailTxt}
                  required
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="password"
                  label="Senha:"
                  placeholder="Senha"
                  onChange={(e) => setSenhaTxt(e.target.value)}
                  value={senhaTxt}
                  required
                />
              </CCol>
              <CCol className="col-6 mb-2">
                <CFormInput
                  type="password"
                  label="Confirme sua Senha:"
                  placeholder="Senha"
                  onChange={(e) => setConfirmarSenhaTxt(e.target.value)}
                  value={confirmarSenhaTxt}
                  required
                />
              </CCol>
              <CCol className="col-12">
                <CButton color="secondary" size="m" className="me-2" href="/funcionario">
                  Cancelar
                </CButton>
                <CButton type="submit" color="primary" size="m">
                  Salvar
                </CButton>
              </CCol>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FuncionarioCadastro
