const props = defineProps({
    label: {
        type: String,
        default: ''
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
const emit = defineEmits(['focus', 'blur', 'enter']);
const searchText = defineModel();
const handleInput = (event) => {
    const target = event.target;
    searchText.value = target.value;
};
const handleFocus = (event) => emit('focus', event);
const handleBlur = (event) => emit('blur', event);
const handleEnter = (event) => emit('enter', event);
let __VLS_modelEmit;
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
    ...{ class: "form-input px-3 flex gap-5 items-center relative" },
    ...{ class: ({
            'form-field-input-login': props.inputType === 'login',
            'form-field-input-search': props.inputType === 'search',
            'form-field-input-disabled': props.inputType === 'disabled'
        }) },
});
/** @type {__VLS_StyleScopedClasses['form-input']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-5']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field-input-login']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field-input-search']} */ ;
/** @type {__VLS_StyleScopedClasses['form-field-input-disabled']} */ ;
var __VLS_0 = {};
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onInput: (__VLS_ctx.handleInput) },
    ...{ onClick: (__VLS_ctx.handleFocus) },
    ...{ onBlur: (__VLS_ctx.handleBlur) },
    ...{ onKeyup: (__VLS_ctx.handleEnter) },
    id: (props.label),
    ...{ class: "input" },
    type: (props.type),
    value: (__VLS_ctx.searchText),
    placeholder: (props.placeholder),
    autocomplete: "off",
});
/** @type {__VLS_StyleScopedClasses['input']} */ ;
var __VLS_2 = {};
// @ts-ignore
var __VLS_1 = __VLS_0, __VLS_3 = __VLS_2;
// @ts-ignore
[handleInput, handleFocus, handleBlur, handleEnter, searchText,];
const __VLS_base = (await import('vue')).defineComponent({
    emits: {
        ...{},
        ...{},
    },
    props: {
        ...{},
        ...{
            label: {
                type: String,
                default: ''
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
    },
});
const __VLS_export = {};
export default {};
