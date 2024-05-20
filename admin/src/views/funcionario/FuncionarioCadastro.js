import { CButton, CCard, CCardBody, CCardHeader, CCol, CForm, CFormInput, CFormSelect, CRow } from "@coreui/react";


function FuncionarioCadastro() {
    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Cadastro de Funcionario</strong>
                    </CCardHeader>
                    <CCardBody>
                        <CForm className="row">
                            <CCol className="col-6 mb-2">
                                <CFormInput type="text" label="Nome:" placeholder="Nome" />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormSelect label="Função:">
                                    <option value="1">Administrador</option>
                                    <option value="2">Toten</option>
                                </CFormSelect>
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput type="text" label="CPF:" placeholder="123.456.789-10" />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput type="email" label="Email:" placeholder="Email" />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput type="password" label="Senha:" placeholder="Senha" />
                            </CCol>
                            <CCol className="col-6 mb-2">
                                <CFormInput type="password" label="Confirme sua Senha:" placeholder="Senha" />
                            </CCol>
                            <CCol className="col-12">
                                <CButton color="secondary" size="m" className="me-2" href="/funcionario">Cancelar</CButton>
                                <CButton color="primary" size="m">Salvar</CButton>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default FuncionarioCadastro;