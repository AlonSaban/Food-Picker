<script lang="ts">
import { defineComponent } from 'vue'
import counterStore from '../store/counter'

export default defineComponent({
  setup() {
    const { state, getters, inc } = counterStore
    return { state, getters, inc }
  }
})
</script>

<template>
  <h1>{{ state.count }}x2={{ getters.times2 }}</h1>
  <button @click="inc(1)">Inc</button>
</template>

<style scope>
</style>