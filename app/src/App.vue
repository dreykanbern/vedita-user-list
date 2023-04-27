<template>
    <router-view></router-view>
</template>

<script>
import router from "@/router/router";

export default {
  name: 'App',
  components: {router},
};
</script>

<style lang='scss' src="./styles/app.scss"></style>