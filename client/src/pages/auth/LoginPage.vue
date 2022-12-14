<template>
    <q-layout view="hHh lpR fFf">
      <q-page-container>
        <div class="window-height window-width flex justify-center
          items-center md:bg-white">
          <div class="md:border-2 md:rounded-lg px-5 md:px-10 md:pt-10 w-96 bg-white">
            <div class="text-center q-pa-sm">
              <p class="text-xl">SSV</p>
            </div>
            <div class="mt-2">
              <span class="font-bold text-sm text-[#4B5C6B]">Mail</span>
              <q-input outlined v-model.trim="formData.email" autocomplete="off">
                <template v-slot:prepend>
                  <q-icon color="" name="person" />
                </template>
              </q-input>
            </div>
            <div class="mt-2">
              <span class="font-bold text-sm text-[#4B5C6B]">Password</span>
              <q-input outlined v-model="formData.password" autocomplete="off" :type="showPassword ? 'text' : 'password'">
                <template v-slot:prepend>
                  <q-icon color="" name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon color="" :name="showPassword ? 'visibility_off' : 'visibility'"
                    @click="showPassword = !showPassword" left />
                </template>
              </q-input>
            </div>
            <div class="text-center">
              <q-btn class="w-full md:w-32 q-mt-md py-2" label="Login" type="button" color="primary" size="md"
                @click="login" />
            </div>
            <div class="row mt-10"></div>
          </div>
        </div>
      </q-page-container>
    </q-layout>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // 1) ======= INITIALIZATION ========
  // ==> 1.1) state and getters
  // ==> 1.2) actions
  // ==> 1.3) Others
  
  // 2) ======= VARIABLE REF ========
  const formData = ref({
    email: '',
    password: '',
  });
  const showPassword = ref(false);
  
  // 3) ======= METHOD/FUNCTION ========
  
  // 4) ======= VUEJS LIFECYCLE ========
  
  // onMounted
  </script>
  