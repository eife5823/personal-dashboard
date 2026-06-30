import { ModalType } from '@/types';
const mainStore = useMainStore();
const { isLoading, currentModal, modalProps } = storeToRefs(mainStore);
const { closeModal, openModal } = mainStore;
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "bg-primary flex h-full w-full overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Aside} */
Aside;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "h-full" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "h-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-col h-full w-full overflow-hidden" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.Header} */
Header;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ 'onShowLogin': {} },
    ...{ class: "min-h-15" },
}));
const __VLS_7 = __VLS_6({
    ...{ 'onShowLogin': {} },
    ...{ class: "min-h-15" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = ({ showLogin: {} },
    { onShowLogin: (...[$event]) => {
            __VLS_ctx.openModal(__VLS_ctx.ModalType.Login);
            // @ts-ignore
            [openModal, ModalType,];
        } });
/** @type {__VLS_StyleScopedClasses['min-h-15']} */ ;
var __VLS_8;
var __VLS_9;
if (__VLS_ctx.isLoading) {
    let __VLS_12;
    /** @ts-ignore @type {typeof __VLS_components.Loading} */
    Loading;
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
}
let __VLS_17;
/** @ts-ignore @type {typeof __VLS_components.routerView | typeof __VLS_components.RouterView} */
routerView;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent1(__VLS_17, new __VLS_17({
    ...{ class: "px-7 h-[calc(100%-60px)]" },
}));
const __VLS_19 = __VLS_18({
    ...{ class: "px-7 h-[calc(100%-60px)]" },
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['px-7']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[calc(100%-60px)]']} */ ;
if (__VLS_ctx.currentModal) {
    let __VLS_22;
    /** @ts-ignore @type {typeof __VLS_components.Modal} */
    Modal;
    // @ts-ignore
    const __VLS_23 = __VLS_asFunctionalComponent1(__VLS_22, new __VLS_22({
        ...{ 'onCloseModal': {} },
        currentModal: (__VLS_ctx.currentModal),
        modalProps: (__VLS_ctx.modalProps),
    }));
    const __VLS_24 = __VLS_23({
        ...{ 'onCloseModal': {} },
        currentModal: (__VLS_ctx.currentModal),
        modalProps: (__VLS_ctx.modalProps),
    }, ...__VLS_functionalComponentArgsRest(__VLS_23));
    let __VLS_27;
    const __VLS_28 = ({ closeModal: {} },
        { onCloseModal: (__VLS_ctx.closeModal) });
    var __VLS_25;
    var __VLS_26;
}
// @ts-ignore
[isLoading, currentModal, currentModal, modalProps, closeModal,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
