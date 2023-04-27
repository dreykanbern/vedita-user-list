<template>
  <div class="container">
    <div class="my-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCardBody"
}
</script>

<style scoped lang='scss' src="./my-card-body.scss"></style>