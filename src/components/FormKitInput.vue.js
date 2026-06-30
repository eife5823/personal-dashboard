import { computed } from 'vue';
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    inputName: {
        type: String,
        default: 'search'
    },
    inputType: {
        type: String,
        default: 'search'
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    }
});
const innerClass = computed(() => {
    return {
        login: 'form-field-input-login',
        search: 'form-field-input-search',
        disabled: 'form-field-input-disabled'
    }[props.inputType];
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
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FormKit | typeof __VLS_components.FormKit} */
FormKit;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    type: (__VLS_ctx.type),
    name: (__VLS_ctx.inputName),
    placeholder: (__VLS_ctx.placeholder),
    classes: ({
        inner: `form-input px-3 flex gap-5 items-center relative ${__VLS_ctx.innerClass}`,
        input: 'input flex-1 min-w-0'
    }),
}));
const __VLS_2 = __VLS_1({
    type: (__VLS_ctx.type),
    name: (__VLS_ctx.inputName),
    placeholder: (__VLS_ctx.placeholder),
    classes: ({
        inner: `form-input px-3 flex gap-5 items-center relative ${__VLS_ctx.innerClass}`,
        input: 'input flex-1 min-w-0'
    }),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_5 = {};
const { default: __VLS_6 } = __VLS_3.slots;
if (__VLS_ctx.$slots.prefix) {
    {
        const { prefix: __VLS_7 } = __VLS_3.slots;
        var __VLS_8 = {};
        // @ts-ignore
        [type, inputName, placeholder, innerClass, $slots,];
    }
}
if (__VLS_ctx.$slots.suffix) {
    {
        const { suffix: __VLS_10 } = __VLS_3.slots;
        var __VLS_11 = {};
        // @ts-ignore
        [$slots,];
    }
}
// @ts-ignore
[];
var __VLS_3;
// @ts-ignore
var __VLS_9 = __VLS_8, __VLS_12 = __VLS_11;
// @ts-ignore
[];
const __VLS_base = (await import('vue')).defineComponent({
    props: {
        label: {
            type: String,
            default: ''
        },
        inputName: {
            type: String,
            default: 'search'
        },
        inputType: {
            type: String,
            default: 'search'
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
});
const __VLS_export = {};
export default {};
