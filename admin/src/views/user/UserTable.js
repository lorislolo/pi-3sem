import { CCardBody, CCard, CCardHeader, CCol, CRow, CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton } from "@coreui/react";

function UserTable() {
    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Usuarios</strong>
                    </CCardHeader>
                    <CCardBody>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Lista de Usuarios</span>
                            <CButton color="primary" size="sm" href="/user/cadastro">Cadastrar</CButton>
                        </div>
                        <CTable striped hover bordered>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Nome</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">E-mail</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Clemerson</CTableDataCell>
                                    <CTableDataCell>e@mail.com</CTableDataCell>
                                </CTableRow>
                                <CTableRow>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Juninho</CTableDataCell>
                                    <CTableDataCell>e@mail.com</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default UserTable;