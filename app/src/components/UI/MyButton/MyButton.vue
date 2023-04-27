<template>
  <v-btn @click="doSomething">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    doSomething () {
      this.onClick();
    }
  }
}
</script>

<style scoped lang='scss' src="./my-button.scss"></style>