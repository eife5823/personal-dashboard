import { useToggle } from '@vueuse/core'

export default defineStore('main', () => {
  const [isLoading, toggleLoading] = useToggle(false)

  const toggle = (val: boolean) => {
    console.log('store toggleLoading called:', val)
    toggleLoading(val)
    console.log('store isLoading after:', isLoading.value)
  }

  return {
    isLoading,
    toggleLoading
  }
})
