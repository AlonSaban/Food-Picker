<script lang="ts">
import Count from './components/Count.vue'
import Login from './pages/Login.vue'
import userStore from './store/user'
import { onMounted, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: { Login, Count },
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  }
})
</script>

<template>
  <div v-if="!userStore.getters.isLoggedIn">
    <Login />
  </div>
  <div v-else>
    <h2>Welcome,{{ userStore.state.name }}</h2>
    <Count />
    <button @click="userStore.logout()">Logout</button>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
