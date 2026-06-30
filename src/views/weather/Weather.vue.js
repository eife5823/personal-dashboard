import useWeather from '@/composables/useWeather';
import { fetchWeatherKey } from '@/types/weather';
const { weatherCodeMap, weatherData, sevenDaysForecast, favorites, fetchWeather, getWeatherCodeName, toggleFavorite } = useWeather();
provide(fetchWeatherKey, fetchWeather);
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "weather flex-column gap-5" },
});
/** @type {__VLS_StyleScopedClasses['weather']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "lg:(flex gap-5)" },
});
/** @type {__VLS_StyleScopedClasses['lg:(flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex-column flex-1 gap-5 w-full" },
});
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.Search} */
Search;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
/** @ts-ignore @type {typeof __VLS_components.WeatherSummary} */
WeatherSummary;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    ...{ 'onToggleFavorite': {} },
    weatherData: (__VLS_ctx.weatherData),
    weatherCode: (__VLS_ctx.weatherCodeMap[__VLS_ctx.weatherData.current.weather_code]),
    weatherCodeName: (__VLS_ctx.getWeatherCodeName(__VLS_ctx.weatherData.current.weather_code)),
    favorites: (__VLS_ctx.favorites),
}));
const __VLS_7 = __VLS_6({
    ...{ 'onToggleFavorite': {} },
    weatherData: (__VLS_ctx.weatherData),
    weatherCode: (__VLS_ctx.weatherCodeMap[__VLS_ctx.weatherData.current.weather_code]),
    weatherCodeName: (__VLS_ctx.getWeatherCodeName(__VLS_ctx.weatherData.current.weather_code)),
    favorites: (__VLS_ctx.favorites),
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
let __VLS_10;
const __VLS_11 = ({ toggleFavorite: {} },
    { onToggleFavorite: (...[$event]) => {
            __VLS_ctx.toggleFavorite($event);
            // @ts-ignore
            [weatherData, weatherData, weatherData, weatherCodeMap, getWeatherCodeName, favorites, toggleFavorite,];
        } });
var __VLS_8;
var __VLS_9;
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.WeatherFavorites} */
WeatherFavorites;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    ...{ 'onToggleFavorite': {} },
    ...{ class: "flex-1" },
    favorites: (__VLS_ctx.favorites),
}));
const __VLS_14 = __VLS_13({
    ...{ 'onToggleFavorite': {} },
    ...{ class: "flex-1" },
    favorites: (__VLS_ctx.favorites),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
let __VLS_17;
const __VLS_18 = ({ toggleFavorite: {} },
    { onToggleFavorite: (...[$event]) => {
            __VLS_ctx.toggleFavorite($event);
            // @ts-ignore
            [favorites, toggleFavorite,];
        } });
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
var __VLS_15;
var __VLS_16;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "max-w-220" },
});
/** @type {__VLS_StyleScopedClasses['max-w-220']} */ ;
let __VLS_19;
/** @ts-ignore @type {typeof __VLS_components.WeatherHighlight} */
WeatherHighlight;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent1(__VLS_19, new __VLS_19({
    ...{ class: "mb-5" },
    weatherData: (__VLS_ctx.weatherData),
}));
const __VLS_21 = __VLS_20({
    ...{ class: "mb-5" },
    weatherData: (__VLS_ctx.weatherData),
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
let __VLS_24;
/** @ts-ignore @type {typeof __VLS_components.WeatherForecast} */
WeatherForecast;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent1(__VLS_24, new __VLS_24({
    sevenDaysForecast: (__VLS_ctx.sevenDaysForecast),
}));
const __VLS_26 = __VLS_25({
    sevenDaysForecast: (__VLS_ctx.sevenDaysForecast),
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
// @ts-ignore
[weatherData, sevenDaysForecast,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
