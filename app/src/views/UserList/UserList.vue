<template>
  <my-card-body>
    <my-card-header
        :onClick="goToUserCreated"
        status="Не добавлены"
        header="Список пользователей"
        button="Добавить"
        depressed
    ></my-card-header>
  </my-card-body>
</template>

<script>
import MyCardHeader from "@/components/UI/MyCardHeader/MyCardHeader";
import MyCardBody from "@/components/UI/MyCardBody/MyCardBody";
import MyButton from "@/components/UI/MyButton/MyButton";
import router from "@/router/router";

export default {
  name: "UserList",
  components: {
    router, MyCardBody, MyButton, MyCardHeader,
  },
  data  () {
    return {
      //если нужно что-то в локалке
    }
  },
  methods: {
    goToUserCreated () {
      router.push({ name: 'UserForm' })
    }
  },
}
</script>

<style scoped lang='scss' src="./user-list.scss"></style>