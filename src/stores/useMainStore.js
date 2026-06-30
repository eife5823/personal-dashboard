import { useToggle } from '@vueuse/core';
import { ModalType } from '@/types';
export default defineStore('main', () => {
    const [isLoading, toggleIsLoading] = useToggle(false);
    const isLogin = ref(false);
    const currentModal = shallowRef(null);
    const modalProps = ref(null);
    const modalTypeMap = {
        [ModalType.Login]: defineAsyncComponent(() => import('@/components/modal/Login.vue'))
    };
    // const loginProps = reactive({
    //   title: 'Login',
    //   description: 'Please enter your credentials to log in.',
    //   fields: [
    //     { label: 'Username', type: 'text', model: '' },
    //     { label: 'Password', type: 'password', model: '' }
    //   ],
    //   submitText: 'Log In'
    // })
    const openModal = (type, props = {}) => {
        currentModal.value = modalTypeMap[type] || null;
        modalProps.value = props;
    };
    const closeModal = () => {
        currentModal.value = null;
        modalProps.value = null;
    };
    return {
        isLogin,
        isLoading,
        toggleIsLoading,
        currentModal,
        modalProps,
        modalTypeMap,
        openModal,
        closeModal
    };
});
