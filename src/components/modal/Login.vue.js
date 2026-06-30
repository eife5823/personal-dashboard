const loginData = reactive({
    username: '',
    password: '',
    email: ''
});
const activeBlock = ref('right');
const changeBlock = (block) => {
    activeBlock.value = block;
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['form-wrapper']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "login rounded-3xl bg-white flex min-w-120 relative overflow-hidden xl:w-180" },
});
/** @type {__VLS_StyleScopedClasses['login']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['min-w-120']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:w-180']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-wrapper p-10 w-1/2 relative" },
    ...{ class: ({ isShow: __VLS_ctx.activeBlock === 'right' }) },
});
/** @type {__VLS_StyleScopedClasses['form-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['isShow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "font-[Raleway-bold] mb-5" },
});
/** @type {__VLS_StyleScopedClasses['font-[Raleway-bold]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.FormInput | typeof __VLS_components.FormInput} */
FormInput;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.loginData.username),
    label: "userName",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Username",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.loginData.username),
    label: "userName",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Username",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_5 } = __VLS_3.slots;
{
    const { suffix: __VLS_6 } = __VLS_3.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" },
    });
    /** @type {__VLS_StyleScopedClasses['i-tabler-user-filled']} */ ;
    /** @type {__VLS_StyleScopedClasses['suffix']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-7']} */ ;
    // @ts-ignore
    [activeBlock, loginData,];
}
// @ts-ignore
[];
var __VLS_3;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.FormInput | typeof __VLS_components.FormInput} */
FormInput;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    modelValue: (__VLS_ctx.loginData.password),
    label: "password",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Password",
}));
const __VLS_9 = __VLS_8({
    modelValue: (__VLS_ctx.loginData.password),
    label: "password",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_12 } = __VLS_10.slots;
{
    const { suffix: __VLS_13 } = __VLS_10.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" },
    });
    /** @type {__VLS_StyleScopedClasses['i-tabler-user-filled']} */ ;
    /** @type {__VLS_StyleScopedClasses['suffix']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-7']} */ ;
    // @ts-ignore
    [loginData,];
}
// @ts-ignore
[];
var __VLS_10;
let __VLS_14;
/** @ts-ignore @type {typeof __VLS_components.FormInput | typeof __VLS_components.FormInput} */
FormInput;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent1(__VLS_14, new __VLS_14({
    modelValue: (__VLS_ctx.loginData.email),
    label: "email",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Email",
}));
const __VLS_16 = __VLS_15({
    modelValue: (__VLS_ctx.loginData.email),
    label: "email",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Email",
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_19 } = __VLS_17.slots;
{
    const { suffix: __VLS_20 } = __VLS_17.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" },
    });
    /** @type {__VLS_StyleScopedClasses['i-tabler-user-filled']} */ ;
    /** @type {__VLS_StyleScopedClasses['suffix']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-7']} */ ;
    // @ts-ignore
    [loginData,];
}
// @ts-ignore
[];
var __VLS_17;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "text-white font-bold py-3 rounded-xl bg-purple-100 w-full cursor-pointer" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-100']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "form-wrapper p-10 w-1/2 relative" },
    ...{ class: ({ isShow: __VLS_ctx.activeBlock === 'left' }) },
});
/** @type {__VLS_StyleScopedClasses['form-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['isShow']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.form, __VLS_intrinsics.form)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "font-[Raleway-bold] mb-5" },
});
/** @type {__VLS_StyleScopedClasses['font-[Raleway-bold]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
let __VLS_21;
/** @ts-ignore @type {typeof __VLS_components.FormInput | typeof __VLS_components.FormInput} */
FormInput;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent1(__VLS_21, new __VLS_21({
    modelValue: (__VLS_ctx.loginData.username),
    label: "userName",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Username",
}));
const __VLS_23 = __VLS_22({
    modelValue: (__VLS_ctx.loginData.username),
    label: "userName",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Username",
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_26 } = __VLS_24.slots;
{
    const { suffix: __VLS_27 } = __VLS_24.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" },
    });
    /** @type {__VLS_StyleScopedClasses['i-tabler-user-filled']} */ ;
    /** @type {__VLS_StyleScopedClasses['suffix']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-7']} */ ;
    // @ts-ignore
    [activeBlock, loginData,];
}
// @ts-ignore
[];
var __VLS_24;
let __VLS_28;
/** @ts-ignore @type {typeof __VLS_components.FormInput | typeof __VLS_components.FormInput} */
FormInput;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent1(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.loginData.password),
    label: "password",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Password",
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.loginData.password),
    label: "password",
    ...{ class: "mb-5 w-full" },
    inputType: "login",
    placeholder: "Password",
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
/** @type {__VLS_StyleScopedClasses['mb-5']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
const { default: __VLS_33 } = __VLS_31.slots;
{
    const { suffix: __VLS_34 } = __VLS_31.slots;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span)({
        ...{ class: "i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" },
    });
    /** @type {__VLS_StyleScopedClasses['i-tabler-user-filled']} */ ;
    /** @type {__VLS_StyleScopedClasses['suffix']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-8']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-black']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-h-7']} */ ;
    /** @type {__VLS_StyleScopedClasses['min-w-7']} */ ;
    // @ts-ignore
    [loginData,];
}
// @ts-ignore
[];
var __VLS_31;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "text-white font-bold py-3 rounded-xl bg-purple-100 w-full cursor-pointer" },
    type: "submit",
});
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-100']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "purple-wrapper h-full w-full bottom-0 absolute" },
    ...{ class: (__VLS_ctx.activeBlock === 'right' ? 'before:right-[-250%]' : 'before:right-[50%]') },
});
/** @type {__VLS_StyleScopedClasses['purple-wrapper']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toggle-panel left" },
    ...{ class: ({ active: __VLS_ctx.activeBlock === 'left' }) },
});
/** @type {__VLS_StyleScopedClasses['toggle-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['left']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "font-[Raleway-bold]" },
});
/** @type {__VLS_StyleScopedClasses['font-[Raleway-bold]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-4" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.changeBlock('right');
            // @ts-ignore
            [activeBlock, activeBlock, changeBlock,];
        } },
    type: "button",
    ...{ class: "py-2 border-2 rounded-xl w-1/2 cursor-pointer" },
});
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "toggle-panel right" },
    ...{ class: ({ active: __VLS_ctx.activeBlock === 'right' }) },
});
/** @type {__VLS_StyleScopedClasses['toggle-panel']} */ ;
/** @type {__VLS_StyleScopedClasses['right']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: "font-[Raleway-bold]" },
});
/** @type {__VLS_StyleScopedClasses['font-[Raleway-bold]']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({
    ...{ class: "mb-4" },
});
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.changeBlock('left');
            // @ts-ignore
            [activeBlock, changeBlock,];
        } },
    type: "button",
    ...{ class: "py-2 border-2 rounded-xl w-1/2 cursor-pointer" },
});
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
