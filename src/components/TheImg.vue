<template>
  <picture class="pictureClass">
    <source v-if="webpSrc" :srcset="webpSrc" type="image/webp" />
    <img :class="imgClass" :src="pngSrc" :width="width" :height="height" :alt="alt" />
  </picture>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
})

const getImageUrl = (path: string, ext: string) => {
  if (!path) return ''

  try {
    return new URL(`../assets/images/${path}.${ext}`, import.meta.url).href
  } catch {
    console.warn(`Failed to load image: ${path}.${ext}`)
    return ''
  }
}

const webpSrc = computed(() => getImageUrl(props.src, 'webp'))
const pngSrc = computed(() => getImageUrl(props.src, 'png'))
</script>

<style lang="scss" scoped>
.pictureClass {
  display: flex;
  justify-content: center;
}
</style>
