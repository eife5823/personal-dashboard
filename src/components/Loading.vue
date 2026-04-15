<template>
  <div class="loading-overlay">
    <div class="h-16 w-16 ring" />
    <p class="label text-5 text-[#a78bfa]">Loading</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 10, 30, 0.85);
  backdrop-filter: blur(6px);
}

.loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.ring {
  border: 8px solid rgba(167, 139, 250, 0.15);
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
