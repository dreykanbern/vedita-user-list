<template>
  <div class="my-card-header">

    <div class="my-card-header__header-status">
      <h1 class="header-status__h1 main-text-color">{{header}}</h1>
      <p class="header-status__p sub-gray-color">{{status}}</p>
    </div>

    <my-button :onClick="handleButtonClick">
      {{button}}
    </my-button>

  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton/MyButton";

export default {
  name: "MyCardHeader",
  components: {
    MyButton
  },
  props: {
    header: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    button: {
      type: String,
    },
    onClick: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleButtonClick () {
      this.onClick();
    }
  }
}
</script>

<style scoped lang='scss' src="./my-card-header.scss"></style>