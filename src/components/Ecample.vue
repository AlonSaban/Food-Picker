<script lang="ts">
import { defineComponent, PropType } from 'vue';
export default defineComponent({
  props: {
    message: { type: String, required: true },
    object: {
      type: Object as PropType<{ name: String, user: String }>,
      required: true
    },
  },
  setup(props) { },
})
</script>

<template>
  <h1>Login page</h1>
  <form name="login"></form>
</template>

<style scope>
</style>