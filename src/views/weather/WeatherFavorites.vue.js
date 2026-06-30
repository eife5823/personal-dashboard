import { fetchWeatherKey } from '@/types/weather';
const __VLS_props = defineProps({
    favorites: {
        type: Array,
        required: true
    }
});
const emit = defineEmits(['toggleFavorite']);
const fetchWeather = inject(fetchWeatherKey, () => Promise.reject('fetchWeather not provided'));
const toggleFavorite = (data) => emit('toggleFavorite', data);
const getFlagIcon = (code) => {
    return code.toUpperCase().replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
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
    ...{ class: "weather-favorites text-white px-6 pt-4 rounded-xl bg-favorites" },
});
/** @type {__VLS_StyleScopedClasses['weather-favorites']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-favorites']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "mb-4" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
if (__VLS_ctx.favorites.length) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    for (const [favorite] of __VLS_vFor((__VLS_ctx.favorites))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.favorites.length))
                        return;
                    __VLS_ctx.fetchWeather(favorite.cityName);
                    // @ts-ignore
                    [favorites, favorites, fetchWeather,];
                } },
            key: (favorite.cityName),
            ...{ class: "mb-4 p-4 rounded-xl bg-secondary flex-space-between cursor-pointer" },
        });
        /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['p-4']} */ ;
        /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
        /** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
        /** @type {__VLS_StyleScopedClasses['flex-space-between']} */ ;
        /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex-column" },
        });
        /** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "flex items-center" },
        });
        /** @type {__VLS_StyleScopedClasses['flex']} */ ;
        /** @type {__VLS_StyleScopedClasses['items-center']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
            ...{ onClick: (...[$event]) => {
                    if (!(__VLS_ctx.favorites.length))
                        return;
                    __VLS_ctx.toggleFavorite(favorite);
                    // @ts-ignore
                    [toggleFavorite,];
                } },
            ...{ class: "i-tabler-star-filled text-8 text-purple-100 mr-3 cursor-pointer" },
        });
        /** @type {__VLS_StyleScopedClasses['i-tabler-star-filled']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-purple-100']} */ ;
        /** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
        /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-8" },
        });
        /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
        (__VLS_ctx.getFlagIcon(favorite.countryCode));
        __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
        (favorite.cityName);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-5" },
        });
        /** @type {__VLS_StyleScopedClasses['text-5']} */ ;
        (favorite.weatherCode);
        let __VLS_0;
        /** @ts-ignore @type {typeof __VLS_components.TheImg} */
        TheImg;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
            src: (favorite.weatherCode),
            imgClass: "mb-3 lg:(h-25 w-25)",
            alt: "sunny",
        }));
        const __VLS_2 = __VLS_1({
            src: (favorite.weatherCode),
            imgClass: "mb-3 lg:(h-25 w-25)",
            alt: "sunny",
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-6 text-white font-bold" },
        });
        /** @type {__VLS_StyleScopedClasses['text-6']} */ ;
        /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
        /** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
        (favorite.maxTemp);
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "text-white/50" },
        });
        /** @type {__VLS_StyleScopedClasses['text-white/50']} */ ;
        (favorite.minTemp);
        // @ts-ignore
        [getFlagIcon,];
    }
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
    props: {
        favorites: {
            type: Array,
            required: true
        }
    },
});
export default {};
