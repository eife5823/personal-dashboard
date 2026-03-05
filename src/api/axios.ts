import axios, { InternalAxiosRequestConfig } from 'axios'
import { nanoid } from 'nanoid'

interface ExtendInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  id: string
}

const connectSource = new Map<string, AbortController>()

export const axiosInstance = axios.create({
  timeout: 60000
})

axiosInstance.interceptors.request.use(request => {
  const id = nanoid()
  const controller = new AbortController()

  connectSource.set(`${id}`, controller)

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

    return response
  },
  error => {
    throw error
  }
)

export const cancelAllRequest = () => {
  connectSource.forEach(controller => {
    controller.abort()
  })
  connectSource.clear()
}
