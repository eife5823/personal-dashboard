import { useDateFormat, useNow } from '@vueuse/core';
const __VLS_props = defineProps({
    weatherData: {
        type: Object,
        default: () => ({})
    },
    weatherCode: {
        type: String,
        default: ''
    }
});
const currentTime = computed(() => {
    const now = useNow();
    return useDateFormat(now, 'H:m A');
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "weather-highlight text-white p-6 rounded-xl bg-secondary flex flex-col lg:(p-3) xl:(px-6 py-4)" },
});
/** @type {__VLS_StyleScopedClasses['weather-highlight']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(p-3)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "mb-4 flex-none" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-1 gap-4 grid grid-cols-4 grid-rows-2 h-full min-h-0 lg:(gap-2) xl:gap-4" },
});
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-rows-2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-0']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(gap-2)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:gap-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-4 rounded-xl bg-blue-100 flex-column items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-around']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "2xl:() flex gap-2 items-center lg:(text-4) xl:(text-5)" },
});
/** @type {__VLS_StyleScopedClasses['2xl:()']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(text-4)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(text-5)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "i-tabler-wind text-white" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-wind']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "text-right" },
});
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
(`${__VLS_ctx.weatherData.daily.wind_speed_10m_max[0] ?? 0} `);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-4" },
});
/** @type {__VLS_StyleScopedClasses['text-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-4 rounded-xl bg-blue-100 flex-column gap-3 items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-around']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex gap-2 items-center lg:(text-4) xl:(text-5)" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(text-4)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(text-5)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "i-tabler-droplet-filled-2 text-white" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-droplet-filled-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "text-right" },
});
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
(`${__VLS_ctx.weatherData.current.relative_humidity_2m ?? 0} `);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-4" },
});
/** @type {__VLS_StyleScopedClasses['text-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "rounded-xl bg-blue-100 flex-space-between col-span-2 lg:(p-4) xl:(px-6 py-7)" },
});
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(p-4)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-7)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: "@/assets/images/sunrise.webp",
    width: "80",
    height: "80",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "w-35" },
});
/** @type {__VLS_StyleScopedClasses['w-35']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-6" },
});
/** @type {__VLS_StyleScopedClasses['text-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
(__VLS_ctx.useDateFormat(__VLS_ctx.weatherData.daily.sunrise[0], 'H:mm A'));
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-4 rounded-xl bg-blue-100 flex-column gap-3 items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-around']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex gap-2 items-center lg:(text-4) xl:(text-5)" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(text-4)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(text-5)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "i-tabler-uv-index text-white" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-uv-index']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "text-right" },
});
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
(`${__VLS_ctx.weatherData.daily.uv_index_max[0] ?? 0} `);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-4" },
});
/** @type {__VLS_StyleScopedClasses['text-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "p-4 rounded-xl bg-blue-100 flex-column gap-3 items-end justify-around lg:(px-0 py-3 items-center) xl:(px-5 py-3 items-end)" },
});
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-around']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(px-0']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-5']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-end)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex gap-2 items-center lg:(text-4) xl:(text-5)" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(text-4)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(text-5)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "i-tabler-uv-index text-white" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-uv-index']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "text-right" },
});
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
(`${__VLS_ctx.weatherData.daily.uv_index_max[0] ?? 0} `);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-4" },
});
/** @type {__VLS_StyleScopedClasses['text-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "rounded-xl bg-blue-100 flex-space-between col-span-2 lg:(p-4) xl:(px-6 py-7)" },
});
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(p-4)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-7)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: "@/assets/images/sunset.webp",
    width: "80",
    height: "80",
    alt: "",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "w-35" },
});
/** @type {__VLS_StyleScopedClasses['w-35']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "text-6" },
});
/** @type {__VLS_StyleScopedClasses['text-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
(__VLS_ctx.useDateFormat(__VLS_ctx.weatherData.daily.sunset[0], 'H:mm A'));
// @ts-ignore
[weatherData, weatherData, weatherData, weatherData, weatherData, weatherData, useDateFormat, useDateFormat,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        weatherData: {
            type: Object,
            default: () => ({})
        },
        weatherCode: {
            type: String,
            default: ''
        }
    },
});
export default {};
