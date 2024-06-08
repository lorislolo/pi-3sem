import { create } from 'zustand'

const useAuthStore = create((set) => ({
  token: null,
  login: (token) => set(() => ({ token })),
  logout: () => set(() => ({ token: null })),
}))

export default useAuthStore
