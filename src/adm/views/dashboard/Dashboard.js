import React, { useState, useEffect } from 'react'

import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import useAxios from '../../../auth/lib/useAxios'
import { CChart } from '@coreui/react-chartjs'
import { CForm, CFormInput } from '@coreui/react'
import { format, set } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const Dashboard = () => {
  const axios = useAxios()

  const [dataDaVisitaMin, setDataDaVisitaMin] = useState('')
  const [dataDaVisitaMax, setDataDaVisitaMax] = useState('')

  const [chartData, setChartData] = useState({ labels: [], datasets: [] })
  const [chartData2, setChartData2] = useState({ labels: [], datasets: [] })
  const [chartData3, setChartData3] = useState({ labels: [], datasets: [] })

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
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <div className="d-flex justify-content-between">
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
                {/* <h5 className="card-title">Visitas</h5>
                <CButtonGroup role='group' aria-label="Basic outlined example">
                  <CButton onClick={handleVisitaMes} className='btn btn-outline-secondary' active={activeButton === "mes"}>Mês</CButton>
                  <CButton onClick={handleVisitaAno} className='btn btn-outline-secondary' active={activeButton === "ano"} >Ano</CButton>
                  <CButton onClick={handleVisitaTudo} className='btn btn-outline-secondary' active={activeButton === "tudo"}>Tudo</CButton>
                </CButtonGroup> */}
              </div>
              {/* <CChart
                type='line'
                className='mb-4'
                style={{ height: '300px' }}
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  scales: {
                    y: {
                      beginAtZero: true,
                      ticks: {
                        callback: function (value) {
                          if (Number.isInteger(value)) {
                            return value;
                          }
                        },
                        maxTicksLimit: 5
                      }
                    }
                  }
                }}
              /> */}
              {/* <CRow className='mb-4'>
                <CCol className='col-6'>
                  <h5 className="d-flex card-title justify-content-center">Genero</h5>
                  <CChart
                    type='pie'
                    style={{ height: '300px' }}
                    data={chartData2}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </CCol>
                <CCol className='col-6'>
                  <h5 className="d-flex card-title justify-content-center">Metodo</h5>
                  <CChart
                    type='pie'
                    style={{ height: '300px' }}
                    data={chartData3}
                    options={{
                      maintainAspectRatio: false,
                    }}
                  />
                </CCol>
              </CRow> */}
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    </>
  )
}

export default Dashboard
