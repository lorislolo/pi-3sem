import { CCardBody, CCard, CCardHeader, CCol, CRow } from "@coreui/react";

function Teste() {
    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>Teste</strong>
                    </CCardHeader>
                    <CCardBody>
                        <p>Teste</p>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    );
}

export default Teste;