import { CCardBody, CCard, CCardHeader, CCol, CRow, CButton } from '@coreui/react'
import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import $ from 'jquery'
import 'datatables.net-bs5'
import useAxios, { getFiles } from '../../../auth/lib/useAxios'

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
      if ($.fn.DataTable.isDataTable(tableRef.current)) {
        $(tableRef.current).DataTable().clear().rows.add(data.cata).draw()
      } else {
        $(tableRef.current).DataTable({
          data: data.cata,
          columns: [
            {
              data: 'ftModel',
              title: 'Foto',
              render: function (data) {
                return `<img src=${getFiles(data)} alt="Imagem" style="width: 50px; height: 50px; margin-right: 5px;" />`
              },
            },
            { data: 'nomeCientifico', title: 'Nome Cientifico' },
            { data: 'nomePopular', title: 'Nome Popular' },
            { data: 'especie', title: 'Espécie' },

            {
              data: 'uuid',
              title: 'Ações',
              createdCell: function (td, cellData, rowData, row, col) {
                const root = createRoot(td)
                root.render(
                  <div className="d-flex">
                    <CButton
                      color="primary"
                      style={{ marginRight: '10px' }}
                      onClick={() => navigate(`/catalogo/editar/${cellData}`)}
                    >
                      Editar
                    </CButton>
                    <CButton color="secondary" onClick={() => handleDelete(cellData)}>
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

    return () => {
      $(tableRef.current).DataTable().destroy()
    }
  }, [])
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
            {axios.isLoading && <div>Carregando...</div>}

            {!axios.isLoading && (
              <table
                ref={tableRef}
                className="table table-striped table-hover align-items-center"
                style={{ width: '100%' }}
              ></table>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CatalogoTable
