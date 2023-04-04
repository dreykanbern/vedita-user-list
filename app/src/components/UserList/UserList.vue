<template>
  <div class="user-list">

    <div class="user-list__user-list-header">

      <div class="user-list-header__list-status">
        <h1 class="list-status__h1 main-text-color">Список пользователей</h1>
        <p class="list-status__p sub-gray-color">Не добавлены</p>
      </div>

      <v-btn depressed>
        Добавить</v-btn>

    </div>


  </div>
</template>

<script>
export default {
  name: "UserList"
}
</script>

<style scoped lang='scss' src="./user-list.scss"></style>