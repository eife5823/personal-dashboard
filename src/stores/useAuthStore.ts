export default defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token') || null)
  const isLoggedIn = computed(() => !!token.value)

  const setToken = (newToken: string | null) => {
    token.value = newToken
    localStorage.setItem('token', newToken || '')
  }

  const logout = () => {
    token.value = null 
    localStorage.removeItem('token')
  }

  return {
    token,
    isLoggedIn,
    setToken,
    logout
  }
})
