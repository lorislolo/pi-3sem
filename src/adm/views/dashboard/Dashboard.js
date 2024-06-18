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
import { format, set } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const Dashboard = () => {
  const axios = useAxios()
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })
  const [chartData2, setChartData2] = useState({ labels: [], datasets: [] })
  const [chartData3, setChartData3] = useState({ labels: [], datasets: [] })

  const [activeButton, setActiveButton] = useState('ano')
  const fetchDataAno = async () => {
    try {
      const response = await axios.get('/chart/ano')
      const data = response.data

      // Obter o ano atual
      const currentYear = new Date().getFullYear()

      // Gerar a lista de todos os meses do ano atual até o mês atual
      const months = Array.from({ length: new Date().getMonth() + 1 }, (_, i) =>
        format(new Date(currentYear, i, 1), 'MMMM', { locale: ptBR })
      )
      console.log(months)
      // Inicializar um objeto para contar as visitas por mês
      const visitCounts = {}
      months.forEach((month, index) => {
        const monthYear = `${currentYear}-${String(index + 1).padStart(2, '0')}`
        visitCounts[monthYear] = 0
      })

      // Preencher o objeto com os dados do servidor
      const total = data.total.map(item => item.count)
      const masculino = data.genero.map(item => item.sexo === 'M' ? item.count : null)
      const masculinoCount = data.genero.map(item => item.sexo === 'M' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      const feminino = data.genero.map(item => item.sexo === 'F' ? item.count : null)
      const femininoCount = data.genero.map(item => item.sexo === 'F' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      const outros = data.genero.map(item => item.sexo === 'O' ? item.count : null)
      const outrosCount = data.genero.map(item => item.sexo === 'O' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      setChartData({
        labels: months,
        datasets: [
          {
            label: "Masculino",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: masculino,
            fill: true
          },
          {
            label: "Feminino",
            backgroundColor: "rgba(235, 64, 52, 0.2)",
            borderColor: "rgba(235, 64, 52, 1)",
            pointBackgroundColor: "rgba(235, 64, 52, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: feminino,
            fill: true
          },
          {
            label: "Outro",
            backgroundColor: "rgba(255, 210, 86, 0.2)",
            borderColor: "rgba(255, 210, 86, 1)",
            pointBackgroundColor: "rgba(255, 210, 86, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: outros,
            fill: true
          },
          {
            label: "Total de Visitas",
            backgroundColor: "rgba(170, 170, 170, 0.2)",
            borderColor: "rgba(170, 170, 170, 1)",
            pointBackgroundColor: "rgba(170, 170, 170, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: total,
            fill: true
          },
        ]
      })
      setChartData2({
        labels: ['Masculino', 'Feminino', 'Outros'],
        datasets: [
          {
            data: [masculinoCount, femininoCount, outrosCount],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          }
        ]
      })
      setChartData3({
        labels: ['Toten', 'QrCde'],
        datasets: [
          {
            data: [data.toten, data.qrCode],
            backgroundColor: ['#228B22', '#FFCE56'],
          }
        ]
      })
    } catch (error) {
      console.error('Erro ao buscar os dados', error)
    }
  }

  useEffect(() => {
    fetchDataAno()
  }, [])
  const handleVisitaAno = async () => {
    fetchDataAno()
    setActiveButton('ano')
  }

  const handleVisitaMes = async () => {
    try {
      const { data } = await axios.get('/chart/mes')
      const labels = data.total.map(item => item.dia)
      const total = data.total.map(item => item.count)
      const masculino = data.genero.map(item => item.sexo === 'M' ? item.count : null)
      const masculinoCount = data.genero.map(item => item.sexo === 'M' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      const feminino = data.genero.map(item => item.sexo === 'F' ? item.count : null)
      const femininoCount = data.genero.map(item => item.sexo === 'F' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      const outros = data.genero.map(item => item.sexo === 'O' ? item.count : null)
      const outrosCount = data.genero.map(item => item.sexo === 'O' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      setChartData({
        labels,
        datasets: [
          {
            label: "Masculino",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: masculino,
            fill: true
          },
          {
            label: "Feminino",
            backgroundColor: "rgba(235, 64, 52, 0.2)",
            borderColor: "rgba(235, 64, 52, 1)",
            pointBackgroundColor: "rgba(235, 64, 52, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: feminino,
            fill: true
          },
          {
            label: "Outro",
            backgroundColor: "rgba(255, 210, 86, 0.2)",
            borderColor: "rgba(255, 210, 86, 1)",
            pointBackgroundColor: "rgba(255, 210, 86, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: outros,
            fill: true
          },
          {
            label: "Total de Visitas",
            backgroundColor: "rgba(170, 170, 170, 0.2)",
            borderColor: "rgba(170, 170, 170, 1)",
            pointBackgroundColor: "rgba(170, 170, 170, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: total,
            fill: true
          },
        ]
      })
      setChartData2({
        labels: ['Masculino', 'Feminino', 'Outros'],
        datasets: [
          {
            data: [masculinoCount, femininoCount, outrosCount],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          }
        ]
      })
      setChartData3({
        labels: ['Toten', 'QrCde'],
        datasets: [
          {
            data: [data.toten, data.qrCode],
            backgroundColor: ['#228B22', '#FFCE56'],
          }
        ]
      })
      setActiveButton('mes')
    } catch (error) {
      console.error('Erro ao buscar os dados', error)
    }
  }
  const handleVisitaTudo = async () => {
    try {
      const { data } = await axios.get('/chart')
      const labels = data.total.map(item => item.monthYear)
      const total = data.total.map(item => item.count)
      const masculino = data.genero.map(item => item.sexo === 'M' ? item.count : null)
      const masculinoCount = data.genero.map(item => item.sexo === 'M' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      const feminino = data.genero.map(item => item.sexo === 'F' ? item.count : null)
      const femininoCount = data.genero.map(item => item.sexo === 'F' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      const outros = data.genero.map(item => item.sexo === 'O' ? item.count : null)
      const outrosCount = data.genero.map(item => item.sexo === 'O' ? item.count : null).reduce((acc, cur) => acc + cur, 0)
      setChartData({
        labels,
        datasets: [
          {
            label: "Masculino",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            pointBackgroundColor: "rgba(54, 162, 235, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: masculino,
            fill: true
          },
          {
            label: "Feminino",
            backgroundColor: "rgba(235, 64, 52, 0.2)",
            borderColor: "rgba(235, 64, 52, 1)",
            pointBackgroundColor: "rgba(235, 64, 52, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: feminino,
            fill: true
          },
          {
            label: "Outro",
            backgroundColor: "rgba(255, 210, 86, 0.2)",
            borderColor: "rgba(255, 210, 86, 1)",
            pointBackgroundColor: "rgba(255, 210, 86, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: outros,
            fill: true
          },
          {
            label: "Total de Visitas",
            backgroundColor: "rgba(170, 170, 170, 0.2)",
            borderColor: "rgba(170, 170, 170, 1)",
            pointBackgroundColor: "rgba(170, 170, 170, 1)",
            pointBorderColor: "#fff",
            tension: 0.4,
            data: total,
            fill: true
          },
        ]
      })
      setChartData2({
        labels: ['Masculino', 'Feminino', 'Outros'],
        datasets: [
          {
            data: [masculinoCount, femininoCount, outrosCount],
            backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
          }
        ]
      })
      setChartData3({
        labels: ['Toten', 'QrCde'],
        datasets: [
          {
            data: [data.toten, data.qrCode],
            backgroundColor: ['#228B22', '#FFCE56'],
          }
        ]
      })
      setActiveButton('tudo')
    } catch (error) {
      console.error('Erro ao buscar os dados', error)
    }
  }
  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <div className="d-flex justify-content-between">
                <h5 className="card-title">Visitas</h5>
                <CButtonGroup role='group' aria-label="Basic outlined example">
                  <CButton onClick={handleVisitaMes} className='btn btn-outline-secondary' active={activeButton === "mes"}>Mês</CButton>
                  <CButton onClick={handleVisitaAno} className='btn btn-outline-secondary' active={activeButton === "ano"} >Ano</CButton>
                  <CButton onClick={handleVisitaTudo} className='btn btn-outline-secondary' active={activeButton === "tudo"}>Tudo</CButton>
                </CButtonGroup>
              </div>
              <CChart
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
              />
              <CRow className='mb-4'>
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
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow >
    </>
  )
}

export default Dashboard
