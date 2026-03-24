<template>
  <div class="toggle rounded-3xl bg-white relative overflow-hidden">
    <input type="checkbox" class="checkbox opacity-0 h-full w-full cursor-pointer relative z-3" />
    <div class="knob z-2" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.knob {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
/* Button 3 */
.knob:before {
  content: 'F';
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #7b90d2;
  border-radius: 50%;
  transition:
    0.3s ease all,
    left 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
}

.toggle .checkbox:active + .knob:before {
  width: 46px;
  border-radius: 100px;
}

.toggle .checkbox:checked:active + .knob:before {
  margin-left: -26px;
}

.toggle .checkbox:checked + .knob:before {
  content: 'C';
  left: 40px;
  background-color: #f44336;
}
</style>
