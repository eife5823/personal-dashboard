<template>
  <div class="search">
    <FormInput label="search" :model-value="searchText">
      <template #prefix>
        <div class="i-tabler-bell text-6 cursor-pointer" />
      </template>
    </FormInput>
  </div>
</template>

<script setup lang="ts">
const searchText = ref('')
</script>

<style scoped></style>
