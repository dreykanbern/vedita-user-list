<template>
  <my-card-body>

    <div class="user-list-header">

      <div class="user-list-header__list-status">
        <h1 class="list-status__h1 main-text-color">{{UserListText.header}}</h1>
        <p class="list-status__p sub-gray-color">{{UserListText.status}}</p>
      </div>

      <my-button depressed :onClick="goToUserCreated">
        {{UserListText.button}}
      </my-button>

    </div>

  </my-card-body>
</template>

<script>
import myCardBody from "@/components/UI/MyCardBody/MyCardBody";
import MyButton from "@/components/UI/MyButton/MyButton";
import router from "@/router/router";

export default {
  name: "UserList",
  components: {
    router, myCardBody, MyButton,
  },
  data  () {
    return {
      UserListText: {
        header: 'Список пользователей',
        status: 'Не добавлены',
        button: 'Добавить',
      },
    }
  },
  methods: {
    goToUserCreated () {
      router.push({ name: 'UserCreated' })
    }
  },
}
</script>

<style scoped lang='scss' src="./user-list.scss"></style>