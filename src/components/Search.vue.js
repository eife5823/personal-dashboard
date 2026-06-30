import { fetchWeatherKey } from '@/types/weather';
const fetchWeather = inject(fetchWeatherKey, () => Promise.reject('fetchWeather not provided'));
const searchText = ref('');
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "search" },
});
/** @type {__VLS_StyleScopedClasses['search']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FormInput | typeof __VLS_components.FormInput} */
FormInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onEnter': {} },
    modelValue: (__VLS_ctx.searchText),
    label: "search",
    ...{ class: "w-full" },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onEnter': {} },
    modelValue: (__VLS_ctx.searchText),
    label: "search",
    ...{ class: "w-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ enter: {} },
    { onEnter: (...[$event]) => {
            __VLS_ctx.fetchWeather(__VLS_ctx.searchText);
            // @ts-ignore
            [searchText, searchText, fetchWeather,];
        } });
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_7 } = __VLS_3.slots;
{
    const { prefix: __VLS_8 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "i-tabler-search text-8 text-white min-h-7 min-w-7 cursor-pointer" },
    });
    /** @type {__VLS_StyleScopedClasses['i-tabler-search']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
var __VLS_3;
var __VLS_4;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
