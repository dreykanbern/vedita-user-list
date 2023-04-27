<template>
  <my-card-body>
      <div>
        Гениальные роуты
      </div>
  </my-card-body>
</template>

<script>
import MyCardBody from "@/components/UI/MyCardBody/MyCardBody";
import router from "@/router/router";

export default {
  name: "UserCreated",
  components: {router, MyCardBody}
}
</script>

<style scoped lang='scss' src="./user-created.scss"></style>