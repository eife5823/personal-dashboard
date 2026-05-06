import { useToggle } from '@vueuse/core'
import { ModalType, ModalProps } from '@/types'

export default defineStore('main', () => {
  const [isLoading, toggleIsLoading] = useToggle(false)
  const isLogin = ref(false)

  const currentModal = ref<ModalType>(null)
  const modalProps = ref<ModalProps | null>(null)

  const openModal = (type: ModalType, props: ModalProps = {}) => {
    currentModal.value = type
    modalProps.value = props
  }

  const closeModal = () => {
    currentModal.value = null
    modalProps.value = null
  }

  return {
    isLogin,
    isLoading,
    toggleIsLoading,
    currentModal,
    modalProps,
    openModal,
    closeModal
  }
})
