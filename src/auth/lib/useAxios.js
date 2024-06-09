import axios from 'axios'
import useAuthStore from './storeAuth'

export const baseURL = process.env.API_URL

if (!baseURL) throw new Error('Forneça o URL do backend no .env')

export default function useAxios() {
  const { token, logout } = useAuthStore()

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    timeout: 5000,
    timeoutErrorMessage: 'Tempo limite excedido. Tente novamente mais tarde.',
  })

  const onSucess = (res) => {
    const urlDeAttToken = `${baseURL}/token/refresh`

    const redirectParaAttToken = res.request?.responseURL === urlDeAttToken && res.status === 200

    //  att o token
    if (redirectParaAttToken) {
      const tokenNovo = res.data.token

      useAuthStore.setState({ token: tokenNovo })

      return axios({
        ...res.config,
        headers: {
          ...res.config.headers,
          Authorization: `Bearer ${tokenNovo}`,
        },
      })
    }

    return res
  }

  const onError = (error) => {
    // quando n consegue att o token
    if (error.response?.status === 401) {
      const message = error.response?.data?.message || 'erro na sessão'

      alert(message, 'Faça login novamente')
      logout()
    }

    return Promise.reject(error)
  }

  // Esses callbacks será chamado antes de passar a resposta para o código que fez a requisição
  axiosInstance.interceptors.response.use(onSucess, onError)

  return axiosInstance
}
