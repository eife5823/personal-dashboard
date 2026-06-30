import { useDateFormat, useNow } from '@vueuse/core';
const props = defineProps({
    weatherData: {
        type: Object,
        default: () => ({})
    },
    weatherCode: {
        type: String,
        default: ''
    },
    weatherCodeName: {
        type: String,
        default: ''
    },
    favorites: {
        type: Array,
        required: true
    }
});
const emit = defineEmits(['toggleFavorite']);
const now = useNow();
const weekday = useDateFormat(now, 'dddd', {
    locales: 'en-US'
});
const date = useDateFormat(now, 'DD MMM, YYYY', {
    locales: 'en-US'
});
const favoriteIcon = computed(() => props.favorites.some(location => location.cityName === props.weatherData.name)
    ? 'i-tabler-star-filled'
    : 'i-tabler-star');
const toggleFavorite = (data) => {
    const favoriteData = {
        cityName: data.name,
        latitude: data.latitude,
        longitude: data.longitude,
        countryCode: data.country_code,
        weatherCode: props.weatherCode,
        maxTemp: data.daily.temperature_2m_max[0],
        minTemp: data.daily.temperature_2m_min[0]
    };
    emit('toggleFavorite', favoriteData);
};
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "weather-summary p-6 rounded-xl bg-secondary flex-column lg:p-4 xl:p-6" },
});
/** @type {__VLS_StyleScopedClasses['weather-summary']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:p-6']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-space-between" },
});
/** @type {__VLS_StyleScopedClasses['flex-space-between']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-center" },
});
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.toggleFavorite(__VLS_ctx.weatherData);
            // @ts-ignore
            [toggleFavorite, weatherData,];
        } },
    ...{ class: "text-8 text-purple-100 mr-3 cursor-pointer" },
    ...{ class: (__VLS_ctx.favoriteIcon) },
});
/** @type {__VLS_StyleScopedClasses['text-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-purple-100']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-white px-3 rounded-2xl bg-purple-100 flex-center gap-1 h-10 min-w-30" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-30']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span)({
    ...{ class: "i-tabler-map-pin-filled text-6 text-white cursor-pointer" },
});
/** @type {__VLS_StyleScopedClasses['i-tabler-map-pin-filled']} */ ;
/** @type {__VLS_StyleScopedClasses['text-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "text-5" },
});
/** @type {__VLS_StyleScopedClasses['text-5']} */ ;
(__VLS_ctx.weatherData?.name);
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Toggle} */
Toggle;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ class: "h-10 w-20" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "h-10 w-20" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-20']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "text-white mt-8 flex-space-between flex-1" },
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-space-between']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "left flex-column gap-8" },
});
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "date" },
});
/** @type {__VLS_StyleScopedClasses['date']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "lg:(text-7 font-bold)" },
});
/** @type {__VLS_StyleScopedClasses['lg:(text-7']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold)']} */ ;
(__VLS_ctx.weekday);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "opacity-70" },
});
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
(__VLS_ctx.date);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "temprature" },
});
/** @type {__VLS_StyleScopedClasses['temprature']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "lg:(text-7 font-bold)" },
});
/** @type {__VLS_StyleScopedClasses['lg:(text-7']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold)']} */ ;
(__VLS_ctx.weatherData?.current.temperature_2m);
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "opacity-70" },
});
/** @type {__VLS_StyleScopedClasses['opacity-70']} */ ;
(__VLS_ctx.weatherData?.daily.temperature_2m_max[0]);
(__VLS_ctx.weatherData?.daily.temperature_2m_min[0]);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "right flex-column gap-1 items-center" },
});
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.TheImg} */
TheImg;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    src: (__VLS_ctx.weatherCode),
    imgClass: "lg:(h-30 w-30)",
    alt: (__VLS_ctx.weatherCode),
}));
const __VLS_7 = __VLS_6({
    src: (__VLS_ctx.weatherCode),
    imgClass: "lg:(h-30 w-30)",
    alt: (__VLS_ctx.weatherCode),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({
    ...{ class: "capitalize lg:text-5 xl:text-6" },
});
/** @type {__VLS_StyleScopedClasses['capitalize']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:text-5']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:text-6']} */ ;
(__VLS_ctx.weatherCodeName);
// @ts-ignore
[weatherData, weatherData, weatherData, weatherData, favoriteIcon, weekday, date, weatherCode, weatherCode, weatherCodeName,];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    props: {
        weatherData: {
            type: Object,
            default: () => ({})
        },
        weatherCode: {
            type: String,
            default: ''
        },
        weatherCodeName: {
            type: String,
            default: ''
        },
        favorites: {
            type: Array,
            required: true
        }
    },
});
export default {};
