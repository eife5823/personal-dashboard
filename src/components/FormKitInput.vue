<template>
  <FormKit
    :type="type"
    :name="inputName"
    :label="label"
    :placeholder="placeholder"
    :outer-class="outerClass"
    :classes="{
      inner: `form-input px-3 flex gap-5 items-center relative ${innerClass}`,
      input: `input flex-1 min-w-0`
    }"
    :value="inputValue"
    :validation="validationType"
  >
    <template v-if="$slots.prefix" #prefix>
      <slot name="prefix" />
    </template>
    <template v-if="$slots.suffix" #suffix>
      <slot name="suffix" />
    </template>
  </FormKit>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { InputType } from '@/types'

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
    type: String as PropType<InputType>,
    default: 'search'
  },
  type: {
    type: String as PropType<'text' | 'email' | 'number'>,
    default: 'text'
  },
  inputValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  outerClass: {
    type: String,
    default: ''
  }
})

const innerClass = computed(() => {
  return {
    login: 'form-field-input-login',
    search: 'form-field-input-search',
    disabled: 'form-field-input-disabled'
  }[props.inputType]
})
const validationType = computed(() => {
  if (props.type === 'email') return 'required|email'
  return 'required'
})
</script>

<style lang="scss" scoped>
:deep(input) {
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none;
  border: none;
  background: none;
  outline: none;
  letter-spacing: 1px;
  line-height: normal;
}
:deep(input:-webkit-autofill) {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: inherit !important;
}
:deep(.form-input:focus-within) {
  @apply ring-2 ring-purple-100;
}
:deep(.form-field-input-search) {
  @apply w-full h-13 rounded-xl bg-secondary text-white text-5;
}
:deep(.form-field-input-login) {
  background-color: #eee;
  @apply w-full h-13 rounded-xl text-black text-4;
}
:deep(.suffix) {
  @apply absolute right-2;
}
/* 錯誤時，input 容器變紅框 */
.formkit-outer[data-invalid] :deep(.formkit-inner) {
  @apply ring-2 ring-red-400;
}

/* 錯誤訊息文字 */
:deep(.formkit-messages) {
  @apply list-none p-0 m-0;
}
:deep(.formkit-message) {
  @apply text-red-400 text-4 mt-1;
}
</style>
