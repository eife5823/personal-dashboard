<template>
  <section class="login rounded-3xl bg-white flex min-w-120 relative overflow-hidden xl:w-180">
    <div class="form-wrapper p-10 w-1/2 relative" :class="{ isShow: activeBlock === 'right' }">
      <FormKit
        type="form"
        submit-label="Register"
        :submit-attrs="{
          inputClass: 'text-white font-bold py-3 rounded-xl bg-purple-100 w-full cursor-pointer'
        }"
        :incomplete-message="false"
        @submit="handleSubmit"
      >
        <h1 class="font-[Raleway-bold] mb-5">Register</h1>
        <FormKitInput
          outer-class="mb-5 w-full"
          input-type="login"
          input-name="username"
          placeholder="Username"
          :validation="`${InputRules.REQUIRED}|${InputRules.ALPHANUMERIC}|${InputRules.LENGTH}:6,10`"
        >
          <template #suffix>
            <span class="i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" />
          </template>
        </FormKitInput>
        <FormKitInput
          outer-class="mb-5 w-full"
          input-type="login"
          input-name="password"
          placeholder="Password"
          :validation="`${InputRules.REQUIRED}|${InputRules.ALPHANUMERIC}|${InputRules.LENGTH}:6,10`"
        >
          <template #suffix>
            <span class="i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" />
          </template>
        </FormKitInput>
        <FormKitInput
          outer-class="mb-5 w-full"
          input-type="login"
          input-name="email"
          placeholder="Email"
          :validation="`${InputRules.REQUIRED}|${InputRules.EMAIL}`"
        >
          <template #suffix>
            <span class="i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" />
          </template>
        </FormKitInput>
      </FormKit>
    </div>
    <div class="form-wrapper p-10 w-1/2 relative" :class="{ isShow: activeBlock === 'left' }">
      <FormKit
        type="form"
        submit-label="Login"
        :submit-attrs="{
          inputClass: 'text-white font-bold py-3 rounded-xl bg-purple-100 w-full cursor-pointer'
        }"
        :incomplete-message="false"
        @submit="handleSubmit"
      >
        <h1 class="font-[Raleway-bold] mb-5">Login</h1>
        <FormKitInput
          outer-class="mb-5 w-full"
          input-type="login"
          input-name="username"
          placeholder="Username"
          :validation="`${InputRules.REQUIRED}|${InputRules.ALPHANUMERIC}|${InputRules.LENGTH}:6,10`"
        >
          <template #suffix>
            <span class="i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" />
          </template>
        </FormKitInput>
        <FormKitInput
          outer-class="mb-5 w-full"
          input-type="login"
          input-name="password"
          placeholder="Password"
          :validation="`${InputRules.REQUIRED}|${InputRules.ALPHANUMERIC}|${InputRules.LENGTH}:6,10`"
        >
          <template #suffix>
            <span class="i-tabler-user-filled suffix text-8 text-black min-h-7 min-w-7" />
          </template>
        </FormKitInput>
      </FormKit>
    </div>
    <div
      class="purple-wrapper h-full w-full bottom-0 absolute"
      :class="activeBlock === 'right' ? 'before:right-[-250%]' : 'before:right-[50%]'"
    >
      <div class="toggle-panel left" :class="{ active: activeBlock === 'left' }">
        <h1 class="font-[Raleway-bold]">Hello Welcome!</h1>
        <p class="mb-4">Don't have an account?</p>
        <button
          type="button"
          class="py-2 border-2 rounded-xl w-1/2 cursor-pointer"
          @click="changeBlock('right')"
        >
          Register
        </button>
      </div>
      <div class="toggle-panel right" :class="{ active: activeBlock === 'right' }">
        <h1 class="font-[Raleway-bold]">Welcome Back!</h1>
        <p class="mb-4">Already have an account?</p>
        <button
          type="button"
          class="py-2 border-2 rounded-xl w-1/2 cursor-pointer"
          @click="changeBlock('left')"
        >
          Login
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ModalType, ModalProps } from '@/types'
import { LoginOrSignupProps } from '@/types/auth'
import { InputRules } from '@/types/form'

const activeBlock = ref<'left' | 'right'>('right')

const changeBlock = (block: 'left' | 'right') => {
  activeBlock.value = block
}
const handleSubmit = (data: LoginOrSignupProps) => {
  console.log('Form submitted:', data)
}
</script>

<style lang="scss" scoped>
.purple-wrapper::before {
  content: '';
  position: absolute;
  width: 300%;
  height: 100%;
  background: #7494ec;
  border-radius: 150px;
  z-index: 2;
  transition: 1.8s ease-in-out;
}
.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: 0.6s ease-in-out;
  opacity: 0;
}
.left {
  left: -50%;
  opacity: 0;
}
.right {
  right: -50%;
  opacity: 0;
}
.left.active {
  left: 0;
  transition-delay: 0.6s;
  opacity: 1;
}
.right.active {
  right: 0;
  transition-delay: 0.6s;
  opacity: 1;
}
.form-wrapper {
  transition:
    0.6s ease-in-out 1.2s,
    visibility 0s 1s;
  opacity: 0;
}
.form-wrapper.isShow {
  opacity: 1;
  z-index: 3;
}
</style>
