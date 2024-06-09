import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      roles: null,

      login: (token, roles) => set(() => ({ token, roles })),

      logout: () => {
        set(() => ({ token: null, roles: null }))
        location.reload()
      },
    }),
    {
      name: 'paiaAuth',
      storage: createJSONStorage(() => localStorage), //
    },
  ),
)

export default useAuthStore
