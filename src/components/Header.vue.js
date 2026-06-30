import { useRoute } from 'vue-router';
const route = useRoute();
const emit = defineEmits(['show-login']);
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
    ...{ class: "px-8 bg-primary flex-space-between w-full" },
});
/** @type {__VLS_StyleScopedClasses['px-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-primary']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h4, __VLS_intrinsics.h4)({
    ...{ class: "text-white font-[Raleway-bold] font-bold" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-[Raleway-bold]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
(__VLS_ctx.route.name);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-space-around w-20" },
});
/** @type {__VLS_StyleScopedClasses['flex-space-around']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "i-tabler-bell text-6 text-white cursor-pointer" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-bell']} */ ;
/** @type {__VLS_StyleScopedClasses['text-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('show-login');
            // @ts-ignore
            [route, emit,];
        } },
    ...{ class: "i-tabler-user-filled text-6 text-white cursor-pointer" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-user-filled']} */ ;
/** @type {__VLS_StyleScopedClasses['text-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
