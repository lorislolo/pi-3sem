import { useNavigate, useLocation } from 'react-router-dom'
import Button from '../components/Button'
import H1 from '../components/H1'
import styles from './Home.module.css'
import QRCode from 'qrcode.react'
import { io } from 'socket.io-client'
import { baseURL } from '../../auth/lib/useAxios'
import useAuthStore from '../../auth/lib/storeAuth'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
  const { token, login } = useAuthStore()
  const [hash, setHash] = useState(null)

  useEffect(() => {
    if (!token) return
    const socket = io(baseURL, {
      auth: { token },
    })

    socket.on('connect_error', (error) => {
      if (error.data.status === 401) {
        useAuthStore.getState().logout()
      }

      if (error.data.status === 403) {
        useAuthStore.getState().logout()
      }

      if (error.data.status === 302) {
        axios
          .get(baseURL + '/token/refresh', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const data = response.data
            login(data.token)
          })
      }
    })
    socket.on('connect', () => {
      socket.emit('qrcode:get', (hash) => {
        setHash(hash)
      })
      socket.on('qrcode:visita', (data) => {
        alert(` ${data.nome} fez uma visita`)

        socket.emit('qrcode:get', (hash) => {
          setHash(hash)
        })
      })
    })

    return () => {
      socket.disconnect()
    }
  }, [token])

  console.log(hash)
  return (
    <section>
      <div className={styles.container}>
        {hash && (
          <div style={{ backgroundColor: 'white', padding: 10 }}>
            <QRCode size={300} className={styles.img} value={hash} />
          </div>
        )}
      </div>
      <H1 text="Inicie Sua Visita" />
      <div>
        <Button url="/Cidade" type="button" value="INCIAR" />
      </div>
    </section>
  )
}

export default Home
