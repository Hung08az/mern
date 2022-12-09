<template>
  <div>
    <div v-for="item in state" :key="item.author">
      <h4>
        {{item.author}}
      </h4>
      <h4>
        {{item.todo}}
      </h4>
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


const state = ref()

// 3) ======= METHOD/FUNCTION ========
async function getAll() {
    const res = await fetch("http://localhost:5000/todos");
    const finalRes = await res.json();
    state.value = finalRes;
    console.log(state.value);
  }



// 4) ======= VUEJS LIFECYCLE ========
onMounted(() => {
getAll();
});
</script>