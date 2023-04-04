<template>
  <div class="container">
    <UserList></UserList>
  </div>
</template>

<script>
import UserList from "@/components/UserList/UserList";

export default {
  name: 'App',
  components: {UserList,},

  data: () => ({
    //
  }),
};
</script>

<style lang='scss' src="./styles/app.scss">
</style>