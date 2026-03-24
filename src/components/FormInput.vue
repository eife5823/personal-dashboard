<template>
  <div
    class="form-input px-3 flex gap-5 items-center"
    :class="{
      'form-field-input-search': props.inputType === 'search'
    }"
  >
    <slot name="prefix" class="text-white" />
    <input
      :id="props.label"
      class="input"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      autocomplete="off"
      @input="handleInput"
      @click="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleEnter"
    />
    <slot name="suffix" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  inputType: {
    type: String as PropType<'search'>,
    default: 'search'
  },
  type: {
    type: String as PropType<'text' | 'number'>,
    default: 'text'
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'enter'])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
const handleFocus = (event: Event) => emit('focus', event)
const handleBlur = (event: Event) => emit('blur', event)
const handleEnter = (event: Event) => emit('enter', event)
</script>

<style lang="scss" scoped>
input {
  -webkit-appearance: none; /* Safari/Chrome */
  -moz-appearance: none; /* Firefox */
  appearance: none;
  border: none;
  background: none;
  outline: none;
  letter-spacing: 1px;
  line-height: normal;
  @apply text-white text-5 font-bold;
}
input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: inherit !important;
}
.form-input:focus-within {
  @apply ring-2 ring-purple-100;
}
.form-field-input-search {
  @apply w-full h-13 rounded-xl bg-secondary;
}
</style>
