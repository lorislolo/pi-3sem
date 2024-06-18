import { useState, useEffect } from 'react'
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

function FuncionarioEditar() {
  const axios = useAxios()
  const navigate = useNavigate()

  // const [validatedUpdate, setValidatedUpdate] = useState(false);
  // const [validatedSenha, setValidatedSenha] = useState(false);

  const [nomeTxt, setNomeTxt] = useState('')
  const [funcaoTxt, setFuncaoTxt] = useState('ADM')
  const [cpfTxt, setCpfTxt] = useState('')
  const [emailTxt, setEmailTxt] = useState('')
  const [senhaTxt, setSenhaTxt] = useState('')
  const [confirmarSenhaTxt, setConfirmarSenhaTxt] = useState('')

  const id = window.location.pathname.split('/').pop()
  useEffect(() => {
    axios.get(`/funcionario/${id}`).then(({ data }) => {
      setNomeTxt(data.funcionario.nome)
      setFuncaoTxt(data.funcionario.roles)
      setCpfTxt(data.funcionario.cpf)
      setEmailTxt(data.funcionario.email)
    })
  }, [])

  const handleUpdate = async (event) => {
    event.preventDefault()
    if (senhaTxt !== confirmarSenhaTxt) {
      alert('As senhas não conferem')
      return
    }
    const dados = {
      nome: nomeTxt,
      cpf: cpfTxt,
      email: emailTxt,
      roles: funcaoTxt,
      senha: senhaTxt,
    }
    try {
      await axios.put(`/funcionario/${id}`, dados)
      alert('Funcionario editado com sucesso')
      navigate('/funcionario')
    } catch (error) {
      console.log(error)
      alert('Erro ao editar funcionario')
    }
    //setValidatedUpdate(true);
  }

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Edição de Funcionario</strong>
          </CCardHeader>
          <CCardBody>
            <CForm
              className="row mb-2"
              noValidate
              // validated={validatedUpdate}
              onSubmit={handleUpdate}
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
                    { label: 'Totem', value: 'TOTEM' },
                  ]}
                ></CFormSelect>
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
                <CButton
                  color="secondary"
                  size="m"
                  className="me-2"
                  onClick={() => navigate('/funcionario')}
                >
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

export default FuncionarioEditar
