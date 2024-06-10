import Button from '../components/Button'
import styles from './QrCode.module.css'
import QRCode from 'qrcode.react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

function QrCode() {
  const [visita, setVisita] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const dataToten = new Date()
    const intervalGetVisitas = setInterval(async () => {
      try {
        const result = await axios.get(`https://pj3-backend.onrender.com/toten/visita/${dataToten}`)
        const data = await result.json()
        setVisita(data)
        if (visita != null) {
          alert(`Visita Cadastrada \n Bem vindo ao Parque Juqueriquere`)
          const foi = 'foi'
          navigate('/', {state: {foi}})    
        }
      } catch (error) {
        console.error('Erro ao buscar visitas', error)
      }
    }, 1500) 

  }, [])

    

  return (
    <div className={styles.container}>
      <QRCode className={styles.img} value="qrcodetoten.com" />
      <Button type="button" url="/" value="Voltar" />
    </div>
  )
}

export default QrCode
