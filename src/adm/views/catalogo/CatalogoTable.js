import { CCardBody, CCard, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import $ from 'jquery'
import 'datatables.net-bs5'
import useAxios from '../../../auth/lib/useAxios'

function CatalogoTable() {
  const navigate = useNavigate()
  const tableRef = useRef(null)
  const axios = useAxios()

  const handleDelete = (uuid) => {
    if (window.confirm('Deseja realmente excluir esta especie?')) {
      axios.delete(`/catalogo/${uuid}`).then(() => {
        alert('Especie excluida com sucesso')
        window.location.reload()
      })
    }
  }

  useEffect(() => {
    axios.get('/catalogo').then(({ data }) => {
      const filteredData = data.cata.filter(item => item.deleted_at === null)
      
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().clear().rows.add(filteredData).draw()
      } else {
        $(tableRef.current).DataTable({
          data: filteredData,
          columns: [
            { data: 'nomeCientifico', title: 'Nome Cientifico' },
            { data: 'nomePopular', title: 'Nome Popular' },
            { data: 'descricao', title: 'Descrição' },
            {
              data: 'catalogoGaleria',
              title: 'Imagens',
              render: function (data) {
                return data.length > 0 ? (data.length > 1 ? `${data.length} Imagens` : `1 Imagem`) : `Sem imagens`
              }
            },
            {
              data: 'uuid',
              title: 'Ações',
              createdCell: function (td, cellData, rowData, row, col) {
                const root = createRoot(td)
                root.render(
                  <div className="d-flex">
                    <CButton
                      color="primary"
                      onClick={() => navigate(`/catalogo/editar/${cellData}`)}
                    >
                      Editar
                    </CButton>
                    <CButton
                      color="secondary"
                      onClick={() => handleDelete(cellData)}
                    >
                      Excluir
                    </CButton>
                  </div>,
                )
              },
            },
          ],
          createdRow: function (row, data, dataIndex) {
            $(row).children('td').addClass('align-middle')
          },
        })
      }
    })
  }, [axios, navigate])
  return (
    <CRow>
      <CCol>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Catalogo</strong>
          </CCardHeader>
          <CCardBody>
            <div className="d-flex justify-content-between mb-2">
              <span>Lista de Especies</span>
              <CButton color="primary" onClick={() => navigate('/catalogo/cadastro')}>
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

export default CatalogoTable
