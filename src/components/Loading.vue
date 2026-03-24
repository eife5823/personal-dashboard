<template>
  <div class="loading-overlay">
    <div class="ring" />
    <p class="label">Loading...</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(15, 10, 30, 0.85);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.ring {
  width: 44px;
  height: 44px;
  border: 3px solid rgba(167, 139, 250, 0.15);
  border-top-color: #a78bfa;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* --- Label --- */
.label {
  font-size: 13px;
  color: rgba(167, 139, 250, 0.6);
  letter-spacing: 0.05em;
  margin: 0;
}
</style>
