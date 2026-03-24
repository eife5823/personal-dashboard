<template>
  <aside
    class="group bg-secondary min-h-screen w-15 transition-all duration-300 overflow-hidden hover:w-60"
  >
    <ul>
      <li class="text-3 text-purple-100 px-3 py-3">
        <span class="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          Dashboards
        </span>
      </li>
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="text-white px-4 py-3 flex-left cursor-pointer hover:bg-purple-100"
        @click="handleClickMenuItem(item.name)"
      >
        <div
          class="text-[24px] flex-shrink-0 transition-color duration-300"
          :class="`${item.icon}`"
        />
        <p class="pl-6 whitespace-nowrap">{{ item.name }}</p>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Menu, MenuItem } from '@/types'

const router = useRouter()

const menuItems: MenuItem[] = [
  { name: Menu.OVERVIEW, icon: 'i-tabler-home-filled' },
  { name: Menu.PROFILE, icon: 'i-tabler-user-square-rounded' },
  { name: Menu.WEATHER, icon: 'i-tabler-sun-high-filled' },
  { name: Menu.STOCK, icon: 'i-tabler-chart-line' },
  { name: Menu.PLANER, icon: 'i-tabler-calendar-smile' }
]

const handleClickMenuItem = (name: string) => {
  router.push(name.toLowerCase())
}
</script>

<style scoped></style>
