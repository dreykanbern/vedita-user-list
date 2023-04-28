<template>
  <my-card-body>
    <my-card-header
        :onClick="TODO"
        status="Заполните данные"
        header="Добавление пользователей"
        button="Сохранить"
        depressed
    ></my-card-header>
  </my-card-body>
</template>

<script>
import MyCardHeader from "@/components/UI/MyCardHeader/MyCardHeader";
import MyCardBody from "@/components/UI/MyCardBody/MyCardBody";
import router from "@/router/router";

export default {
  name: "UserForm",
  components: {router, MyCardBody, MyCardHeader },
  methods: {
    TODO () {
      //Написать функцию сохранения пользователя
    }
  }
}
</script>

<style scoped lang='scss' src="./user-form.scss"></style>