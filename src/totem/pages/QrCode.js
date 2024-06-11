import Button from '../components/Button'
import styles from './QrCode.module.css'
import QRCode from 'qrcode.react'

import useAxios, { baseURL } from '../../auth/lib/useAxios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function QrCode() {
  const [visita, setVisita] = useState(null)
  const navigate = useNavigate()

  const axios = useAxios()

  useEffect(() => {
    const dataToten = Date.now()
    // const inteID = setInterval(async () => {
    ;(async () => {
      try {
        const { data } = await axios.get(`${baseURL}/toten/visita/${dataToten}`)
        setVisita(data)
        if (!visita) {
          setTimeout(
            alert,
            5000,
            `Visita Cadastrada \n ${data.usuario.apelido} Bem vindo ao Parque Juqueriquere`,
          )
          const foi = 'foi'
          navigate('/', { state: { foi } })
          // clearInterval(inteID)
        }
      } catch (error) {
        console.error('Erro ao buscar visitas', error)
      }
    })()
    // }, 1500)
  }, [])

  return (
    <div className={styles.container}>
      <div style={{ padding: 10, backgroundColor: 'white' }}>
        <QRCode
          size={300}
          className={styles.img}
          value="qrcodetoten.comaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        />
      </div>
      <Button type="button" url="/" value="Voltar" />
    </div>
  )
}

export default QrCode
