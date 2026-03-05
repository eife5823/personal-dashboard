<template>
  <section
    class="profile flex flex-col w-full h-dvh overflow-scroll sm:(flex-row justify-between gap-5)"
  >
    <ProfileDetail class="flex-none w-full sm:w-1/3" />
    <ProfileExperience class="flex-1 w-full sm:w-2/3" />
  </section>
</template>

<script setup lang="ts">
import ProfileDetail from './ProfileDetail.vue'
import ProfileExperience from './ProfileExperience.vue'
</script>

<style scoped></style>
