<template>
  <aside
    class="group min-h-screen bg-secondary w-15 overflow-hidden hover:w-60 transition-all duration-300"
  >
    <ul>
      <li class="text-purple-100 py-3 px-3 text-3">
        <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Dashboards
        </span>
      </li>
      <li
        v-for="item in menuItems"
        :key="item.name"
        class="flex-left py-3 px-4 text-white cursor-pointer hover:bg-purple-100"
        @click="handleClickMenuItem(item.name)"
      >
        <div
          class="flex-shrink-0 text-[24px] transition-color duration-300"
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
