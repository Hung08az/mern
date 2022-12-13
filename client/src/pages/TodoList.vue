<!-- eslint-disable vue/valid-v-on -->
<template>
  <div>
      <div>
        <q-input outlined v-model="state.newUsername" label="USERNAME" />
        <q-input outlined v-model="state.newPassword" label="PASSWORD" />
        <q-input outlined v-model="state.newRole" label="ROLE" />
        <q-btn @click="add()">ADD</q-btn>
      </div>
    <div v-for="item in state.user" :key="item.id">
      <p>Username: {{item.username}}</p>
      <p>Password: {{item.password}}</p>
      <p>Role: {{item.role}}</p>
      <q-btn @click="deleteUser(item.id)">DELETE</q-btn>
  </div>
  </div>
</template>
<script setup>
// 1) ======= INITIALIZATION ========
import { ref, onMounted } from 'vue';
// ==> 1.1) state and getters
// ==> 1.2) actions
// ==> 1.3) Others

// 2) ======= VARIABLE REF ========


const state = ref({
  newUsername: '',
  newPassword: '',
  newRole:'',
  user:{}
})

// 3) ======= METHOD/FUNCTION ========
async function getAll() {
    const res = await fetch("http://localhost:5000/crud");
    state.value.user = await res.json();
  }

const add = async () =>{
  const requestOptions ={
    method: "POST",
    headers : {
      "Content-Type":"application/json" 
    },
    body: JSON.stringify({
      username: state.value.newUsername,
      password: state.value.newPassword,
      role: state.value.newRole
    })
  }
  console.log({requestOptions});
  const result = await fetch("http://localhost:5000/crud/new", requestOptions);
  getAll();
}
const deleteUser = async (id) =>{
  await fetch("http://localhost:5000/crud/delete/" + id, {method: "DELETE"});
  getAll();
}
// 4) ======= VUEJS LIFECYCLE ========
onMounted(() => {
getAll();
});
</script>