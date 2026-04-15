import { useToggle } from '@vueuse/core'

export default defineStore('main', () => {
  const [isLoading, toggleIsLoading] = useToggle(false)

  const toggle = (val: boolean) => {
    console.log('store toggleLoading called:', val)
    toggleIsLoading(val)
    console.log('store isLoading after:', isLoading.value)
  }

  return {
    isLoading,
    toggleIsLoading
  }
})
