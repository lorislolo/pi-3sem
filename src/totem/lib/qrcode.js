import { baseURL } from '../../auth/lib/useAxios'
import useAuthStore from '../../auth/lib/storeAuth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { io } from 'socket.io-client'

export function useQRcode() {
  const { token: tokenC } = useAuthStore()
  const [hash, setHash] = useState(null)
  const [token, setTokenPaiado] = useState(tokenC)

  useEffect(() => {
    if (!token) return
    const socket = io(baseURL, {
      auth: { token },
    })

    socket.on('connect_error', async (error) => {
      if (error.data.status === 401) {
        useAuthStore.getState().logout()
      }

      if (error.data.status === 403) {
        useAuthStore.getState().logout()
      }

      if (error.data.status === 302) {
        const { data } = await axios.get(baseURL + '/token/refresh', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        useAuthStore.setState({ token: data.token })
        setTokenPaiado(data.token)
      }
    })
    socket.on('connect', () => {
      socket.emit('qrcode:get', (hash) => {
        setHash(hash)
        console.log(hash)
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

  return hash
}
