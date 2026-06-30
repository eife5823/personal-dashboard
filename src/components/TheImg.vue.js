import { computed } from 'vue';
const props = defineProps({
    src: {
        type: String,
        require: true,
        default: ''
    },
    width: {
        type: Number,
        require: true,
        default: 0
    },
    height: {
        type: Number,
        require: true,
        default: 0
    },
    alt: {
        type: String,
        require: false,
        default: ''
    },
    imgClass: {
        type: String,
        require: false,
        default: ''
    }
});
const getImageUrl = (path, ext) => {
    if (!path)
        return '';
    try {
        return new URL(`../assets/images/${path}.${ext}`, import.meta.url).href;
    }
    catch {
        console.warn(`Failed to load image: ${path}.${ext}`);
        return '';
    }
};
const webpSrc = computed(() => getImageUrl(props.src, 'webp'));
const pngSrc = computed(() => getImageUrl(props.src, 'png'));
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.picture, __VLS_intrinsics.picture)({
    ...{ class: "pictureClass" },
});
/** @type {__VLS_StyleScopedClasses['pictureClass']} */ ;
if (__VLS_ctx.webpSrc) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.source)({
        srcset: (__VLS_ctx.webpSrc),
        type: "image/webp",
    });
}
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: (__VLS_ctx.imgClass) },
    src: (__VLS_ctx.pngSrc),
    width: (__VLS_ctx.width),
    height: (__VLS_ctx.height),
    alt: (__VLS_ctx.alt),
});
// @ts-ignore
[webpSrc, webpSrc, imgClass, pngSrc, width, height, alt,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        src: {
            type: String,
            require: true,
            default: ''
        },
        width: {
            type: Number,
            require: true,
            default: 0
        },
        height: {
            type: Number,
            require: true,
            default: 0
        },
        alt: {
            type: String,
            require: false,
            default: ''
        },
        imgClass: {
            type: String,
            require: false,
            default: ''
        }
    },
});
export default {};
