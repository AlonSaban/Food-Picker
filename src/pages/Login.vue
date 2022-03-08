<script lang="ts">
import { defineComponent, reactive } from 'vue';
import userStore from '../user'

export default defineComponent({
  setup() {
    const form = reactive({
      username: '',
      password: '',
    })
    const onSubmit = () => {
      userStore.login(form.username, form.password)
      form.username = ''
      form.password = ''
    }

    return { form, userStore, onSubmit }
  }
})
</script>

<template>
  <h1>Login page</h1>
  <form @submit.prevent="onSubmit">
    <div class="form-group my v-2">
      <label for="login">username</label>
      <input v-model="form.username" type="text" placeholder="Username" required />
    </div>
    <div class="form-group my v-2">
      <label for="login">password</label>
      <input v-model="form.password" type="password" placeholder="password" required />
    </div>
    <div class="text-danger">{{ userStore.state.error }}</div>
    <button type="submit" class="btn btn-success btn-block">Login</button>
  </form>
</template>

<style scope>
</style>