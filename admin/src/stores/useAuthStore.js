import { create } from 'zustand'
import { useNavigate } from 'react-router-dom'

const useAuthStore = create((set) => ({
  token: null,
  login: async (token) => {
    set(() => ({ token }))
    navigate('/dashboard')
  },
  logout: () => set(() => ({ token: null })),
}))

export default useAuthStore
