<template>
  <app-user></app-user>
</template>

<script>
import User from "./components/User.vue";
export default {
  name: 'app',
  components: {
    'app-user': User
  }
}
</script>

<style>

</style>
