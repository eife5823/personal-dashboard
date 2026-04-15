import axios, { InternalAxiosRequestConfig } from 'axios'
import { nanoid } from 'nanoid'
import handleErrors from './handleErrors'
import weatherApi from './weather'

interface ExtendInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  id: string
}

const mainStore = useMainStore()
const { toggleIsLoading } = mainStore
const connectSource = new Map<string, AbortController>()

export const axiosInstance = axios.create({
  timeout: 60000
})

axiosInstance.interceptors.request.use(request => {
  const id = nanoid()
  const controller = new AbortController()

  connectSource.set(`${id}`, controller)
  if (connectSource.size > 0) toggleIsLoading(true)

  return {
    ...request,
    signal: controller.signal,
    id
  }
})

axiosInstance.interceptors.response.use(
  response => {
    const { id } = response.config as ExtendInternalAxiosRequestConfig
    connectSource.delete(`${id}`)
    if (connectSource.size === 0) toggleIsLoading(false)

    return response
  },
  error => {
    const config = error.config as ExtendInternalAxiosRequestConfig
    if (config?.id) {
      connectSource.delete(config.id)
    }
    if (connectSource.size === 0) toggleIsLoading(false)

    // http errors
    if (axios.isAxiosError(error)) {
      handleErrors(error)
    }

    // other errors
    throw error
  }
)

export const cancelAllRequest = () => {
  connectSource.forEach(controller => {
    controller.abort()
  })
  connectSource.clear()
  if (connectSource.size === 0) toggleIsLoading(false)
}

export const $api = {
  ...weatherApi
}
