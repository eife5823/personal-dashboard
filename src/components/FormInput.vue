<template>
  <div class="form-input flex">
    <slot name="prefix" />
    <input
      :id="props.label"
      class="input"
      :class="{
        'form-field-input-search': props.inputType === 'search'
      }"
      :type="props.type"
      :value="props.modelValue"
      :placeholder="props.placeholder"
      @blur="handleBlur"
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

const emit = defineEmits(['update:modelValue', 'blur'])

const handleBlur = (event: Event) => {
  emit('blur', event)
}
</script>

<style lang="scss" scoped>
.form-field-input-search {
}
</style>
