import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CRow } from "@coreui/react";


function UserCadastro() {
    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Cadastro de Usuarios</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm>
                            <CCol className="mb-2">
                                <CFormInput type="text" label="Nome Completo" placeholder="Nome" />
                            </CCol>
                            <CCol className="mb-2">
                                <CFormInput type="email" label="Email" placeholder="Email" />
                            </CCol>
                            <CCol>
                                <CButton color="primary" size="sm">Salvar</CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default UserCadastro;