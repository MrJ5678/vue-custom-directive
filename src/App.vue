<!--
 * @Author: hhhhhq
 * @Date: 2021-07-02 13:20:56
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-02 17:10:29
 * @Description: file content
-->
<template>
  <p v-font-size.small.red>Small</p>
  <p v-font-size.medium>Medium</p>
  <p v-font-size.large>Large</p>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 30,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
