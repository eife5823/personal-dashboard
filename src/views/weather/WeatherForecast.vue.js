const __VLS_props = defineProps({
    sevenDaysForecast: {
        type: Array,
        default: () => []
    }
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "weather-forecast text-white p-6 rounded-xl flex flex-col bg-forecast lg:(p-6) xl:(px-6 py-4)" },
});
/** @type {__VLS_StyleScopedClasses['weather-forecast']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-forecast']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:(p-6)']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:(px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4)']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({
    ...{ class: "mb-4 flex-none" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-none']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "flex flex-1 gap-4 w-full overflow-scroll" },
});
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-scroll']} */ ;
for (const [day, index] of __VLS_vFor((__VLS_ctx.sevenDaysForecast))) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        key: (day.date),
        ...{ class: "px-4 py-5 rounded-xl bg-secondary/40 flex-1 min-h-70 min-w-40" },
    });
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
    /** @type {__VLS_StyleScopedClasses['bg-secondary/40']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-70']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-40']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-5 mb-4 text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['text-5']} */ ;
    /** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    (index === 0 ? 'Today' : day.date);
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.TheImg} */
    TheImg;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        src: (day.weatherCode),
        imgClass: "mb-7 lg:(h-25 w-25)",
        alt: (day.weatherCode),
    }));
    const __VLS_2 = __VLS_1({
        src: (day.weatherCode),
        imgClass: "mb-7 lg:(h-25 w-25)",
        alt: (day.weatherCode),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "text-center" },
    });
    /** @type {__VLS_StyleScopedClasses['text-center']} */ ;
    (`${day.minTemp}°C / ${day.maxTemp}°C`);
    // @ts-ignore
    [sevenDaysForecast,];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        sevenDaysForecast: {
            type: Array,
            default: () => []
        }
    },
});
export default {};
