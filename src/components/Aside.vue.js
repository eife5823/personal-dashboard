import { useRouter, useRoute } from 'vue-router';
import { Menu } from '@/types';
const router = useRouter();
const route = useRoute();
const isSelected = computed(() => route.name);
const menuItems = [
    // { name: Menu.OVERVIEW, icon: 'i-tabler-home-filled' },
    { name: Menu.PROFILE, icon: 'i-tabler-user-square-rounded' },
    { name: Menu.WEATHER, icon: 'i-tabler-sun-high-filled' }
    // { name: Menu.STOCK, icon: 'i-tabler-chart-line' },
    // { name: Menu.PLANER, icon: 'i-tabler-calendar-smile' }
];
const handleClickMenuItem = (name) => {
    router.push(name.toLowerCase());
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.aside, __VLS_intrinsics.aside)({
    ...{ class: "group bg-secondary min-h-screen w-15 transition-all duration-300 overflow-hidden hover:w-60" },
});
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-secondary']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['w-15']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:w-60']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({
    ...{ class: "text-3 text-purple-100 px-3 py-3" },
});
/** @type {__VLS_StyleScopedClasses['text-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-purple-100']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "opacity-0 transition-opacity duration-300 group-hover:opacity-100" },
});
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:opacity-100']} */ ;
for (const [item] of __VLS_vFor((__VLS_ctx.menuItems))) {
    let __VLS_0;
    /** @ts-ignore @type {typeof __VLS_components.RouterLink | typeof __VLS_components.RouterLink} */
    RouterLink;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        key: (item.name),
        to: ({ name: item.name }),
        activeClass: "is-active",
        ...{ class: "text-white px-4 py-3 flex-left cursor-pointer hover:text-purple-100" },
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        key: (item.name),
        to: ({ name: item.name }),
        activeClass: "is-active",
        ...{ class: "text-white px-4 py-3 flex-left cursor-pointer hover:text-purple-100" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_5;
    const __VLS_6 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.handleClickMenuItem(item.name);
                // @ts-ignore
                [menuItems, handleClickMenuItem,];
            } });
    /** @type {__VLS_StyleScopedClasses['text-white']} */ ;
    /** @type {__VLS_StyleScopedClasses['px-4']} */ ;
    /** @type {__VLS_StyleScopedClasses['py-3']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-left']} */ ;
    /** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['hover:text-purple-100']} */ ;
    const { default: __VLS_7 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "text-[24px] flex-shrink-0 transition-color duration-300" },
        ...{ class: (`${item.icon}`) },
    });
    /** @type {__VLS_StyleScopedClasses['text-[24px]']} */ ;
    /** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
    /** @type {__VLS_StyleScopedClasses['transition-color']} */ ;
    /** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
        ...{ class: "pl-6 whitespace-nowrap" },
    });
    /** @type {__VLS_StyleScopedClasses['pl-6']} */ ;
    /** @type {__VLS_StyleScopedClasses['whitespace-nowrap']} */ ;
    (item.name);
    // @ts-ignore
    [];
    var __VLS_3;
    var __VLS_4;
    // @ts-ignore
    [];
}
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
