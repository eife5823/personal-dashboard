const emit = defineEmits(['close-modal']);
const __VLS_props = defineProps({
    currentModal: {
        type: Object,
        required: true
    },
    modalProps: {
        type: Object,
        required: false,
        default: () => ({})
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "modal w-full" },
});
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('close-modal');
            // @ts-ignore
            [emit,];
        } },
    ...{ class: "mask flex-center w-svw left-0 top-0 fixed h-svh" },
});
/** @type {__VLS_StyleScopedClasses['mask']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-svw']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['h-svh']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "modal-content flex-center" },
});
/** @type {__VLS_StyleScopedClasses['modal-content']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
const __VLS_0 = (__VLS_ctx.currentModal);
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onClose': {} },
    ...(__VLS_ctx.modalProps),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClose': {} },
    ...(__VLS_ctx.modalProps),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ close: {} },
    { onClose: (...[$event]) => {
            __VLS_ctx.emit('close-modal');
            // @ts-ignore
            [emit, currentModal, modalProps,];
        } });
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    props: {
        currentModal: {
            type: Object,
            required: true
        },
        modalProps: {
            type: Object,
            required: false,
            default: () => ({})
        }
    },
});
export default {};
