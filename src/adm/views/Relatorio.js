import { useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import { CButton, CForm, CFormInput } from "@coreui/react";
import useAxios from '../../auth/lib/useAxios'


function Relatorio() {
    const axios = useAxios()
    const [dataDaVisitaMin, setDataDaVisitaMin] = useState('')
    const [dataDaVisitaMax, setDataDaVisitaMax] = useState('')
  
    const handleRelatorio = (event) => {
      event.preventDefault()
      const dataMin = dataDaVisitaMin.split('-')
      const dataMax = dataDaVisitaMax.split('-')
      dataMin.reverse()
      dataMax.reverse()
      const dataMinFormatada = dataMin.join('/')
      const dataMaxFormatada = dataMax.join('/')
  
      const dados = {
        dataDaVisitaMin: dataMinFormatada,
        dataDaVisitaMax: dataMaxFormatada,
      }
      try {
        axios.post('/geraPdf/listar-visitas', dados, { responseType: 'blob' })
          .then(response => {
            const url = window.URL.createObjectURL(response.data);
            console.log(url);
            window.open(url, '_blank');
          })
          .catch(error => {
            console.error('Erro ao gerar PDF:', error);
          });
      } catch (error) {
        console.log(error)
      }
    }
    return (
        <CRow>
            <CCol>
                <CCard className="mb-4">
                    <CCardHeader>Relatorio</CCardHeader>
                    <CCardBody>
                        <CForm
                            className='row'
                            noValidate
                            onSubmit={handleRelatorio}
                        >
                            <CCol className='col-6 mb-2'>
                                <CFormInput
                                    label='Data de Inicio'
                                    type='date'
                                    value={dataDaVisitaMin}
                                    onChange={(e) => setDataDaVisitaMin(e.target.value)}
                                />
                            </CCol>
                            <CCol className='col-6 mb-2'>
                                <CFormInput
                                    label='Data de Fim'
                                    type='date'
                                    value={dataDaVisitaMax}
                                    onChange={(e) => setDataDaVisitaMax(e.target.value)}
                                />
                            </CCol>
                            <CCol className='col-12 mb-2'>
                                <CButton type='submit' color="primary" className="me-1">Gerar Relatorio</CButton>
                                <a className='btn btn-primary' href='https://pj3-backend.onrender.com/excel/listar-visitas'>Excel</a>
                            </CCol>
                        </CForm>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Relatorio