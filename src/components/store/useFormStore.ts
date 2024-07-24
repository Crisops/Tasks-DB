import { create } from 'zustand'

interface FormStore {
  walkForm: boolean
  setWalkForm: (walkForm: boolean) => void
}

export const useFormStore = create<FormStore>((set) => ({

  walkForm: false,
  setWalkForm: (walkForm) => set({ walkForm })

}))
