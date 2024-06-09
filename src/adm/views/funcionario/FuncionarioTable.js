import { CCardBody, CCard, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import $ from 'jquery'
import 'datatables.net-bs5'
import { useCookies } from 'react-cookie'
import useAuthStore from '../../../auth/lib/storeAuth'
import useAxios from '../../../auth/lib/useAxios'

function FuncionarioTable() {
  const navigate = useNavigate()
  const tableRef = useRef(null)
  const axios = useAxios()

  useEffect(() => {
    axios.get('/funcionario').then(({ data }) => {
      // Configurando o DataTables para exibir os dados dos funcionários
      $(tableRef.current).DataTable({
        data: data.funcionario,
        columns: [
          { data: 'id', title: '#' },
          { data: 'nome', title: 'Nome' },
          { data: 'email', title: 'Email' },
          { data: 'cpf', title: 'CPF' },
          { data: 'roles', title: 'Função' },
          {
            data: 'id',
            title: 'Ações',
            createdCell: function (td, cellData, rowData, row, col) {
              console.log(td, cellData, rowData, row, col)
              const root = createRoot(td)
              root.render(
                <div className="d-flex">
                  <CButton
                    color="primary"
                    onClick={() => navigate(`/funcionario/editar/${cellData}`)}
                  >
                    Editar
                  </CButton>
                  <CButton
                    color="secondary"
                    onClick={() => navigate(`/funcionario/excluir/${cellData}`)}
                  >
                    Excluir
                  </CButton>
                </div>,
              )
            },
          },
        ],
        createdRow: function (row, data, dataIndex) {
          // Adicionando a classe 'align-middle' a todas as células
          $(row).children('td').addClass('align-middle')
        },
      })
    })

    return () => $(tableRef.current).DataTable().destroy()
  }, [])

  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Funcionario</strong>
          </CCardHeader>
          <CCardBody>
            <div className="d-flex justify-content-between mb-2">
              <span>Lista de Funcionario</span>
              <CButton color="primary" onClick={() => navigate('/funcionario/cadastro')}>
                Cadastrar
              </CButton>
            </div>
            <table
              ref={tableRef}
              className="table table-striped table-hover align-items-center"
              style={{ width: '100%' }}
            ></table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FuncionarioTable
