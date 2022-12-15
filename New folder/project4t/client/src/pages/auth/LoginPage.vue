<template>
  <q-layout view="hHh lpR fFf" v-if="!isLoading">
    <q-page-container>
      <div
        class="window-height window-width tw-flex tw-justify-center
        tw-items-center md:tw-bg-white"
      >
        <div
          class="md:tw-border-2 md:tw-rounded-lg tw-px-5 md:tw-px-10 md:tw-pt-10 tw-w-96 bg-white"
        >
          <div class="tw-text-center q-pa-sm">
            <p class="tw-text-xl">SSV</p>
          </div>
          <div class="tw-mt-2">
            <span class="tw-font-bold tw-text-sm tw-text-[#4B5C6B]">Mail</span>
            <q-input
              outlined
              v-model.trim="formData.username"
              autocomplete="off"
            >
              <template v-slot:prepend>
                <q-icon color="" name="person" />
              </template>
            </q-input>
          </div>
          <div class="tw-mt-2">
            <span class="tw-font-bold tw-text-sm tw-text-[#4B5C6B]"
              >Password</span
            >
            <q-input
              outlined
              v-model="formData.password"
              autocomplete="off"
              :type="showPassword ? 'text' : 'password'"
            >
              <template v-slot:prepend>
                <q-icon color="" name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  color=""
                  :name="showPassword ? 'visibility_off' : 'visibility'"
                  @click="showPassword = !showPassword"
                  left
                />
              </template>
            </q-input>
          </div>
          <div class="text-center">
            <q-btn
              class="tw-w-full md:tw-w-32 q-mt-md tw-py-2"
              label="Login"
              type="button"
              color="primary"
              size="md"
              @click="login"
            />
          </div>
          <div class="row tw-mt-10"></div>
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import toast from 'utilities/toast';
import { useAuthStore } from 'stores/auth-store';
import { useAppStore } from 'stores/app-store';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

// 1) ======= INITIALIZATION ========
// ==> 1.1) state and getters
const { isLoading } = storeToRefs(useAppStore());
// ==> 1.2) actions
const { signIn } = useAuthStore();
const { setLoading } = useAppStore();
// ==> 1.3) Others
const router = useRouter();

// 2) ======= VARIABLE REF ========
const formData = ref({
  username: '',
  password: '',
});
const showPassword = ref(false);

// 3) ======= METHOD/FUNCTION ========

const login = async () => {
  // send login request
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: formData.value.username,
      password: formData.value.password,
    }),
  };
  console.log({ requestOptions });
  const result = await fetch('http://localhost:5000/crud/login', requestOptions).then((res) => res.json());
  console.log('result: ', result.status);
  if (result.status === 404) {
    setLoading(false);
    toast.error('Username or Password incorrect');
  } else {
    setLoading(true);
    localStorage.setItem('__TOKEN', JSON.stringify(result));
    signIn(result);
    toast.success('Login successfully');
    router.push('/');

    setLoading(false);
  }
};

// 4) ======= VUEJS LIFECYCLE ========

// onMounted
onMounted(() => {});
</script>
