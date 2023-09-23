<template>
  <router-view />
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  padding:0;
  margin:0;
}
.register input, .login input{
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 3px darkred solid;
}
.register button, .login button{
  width: 320px;
  height: 40px;
  border: 6px rebeccapurple solid;
  background: yellow;
  color: rebeccapurple;
  cursor: pointer;
}
</style>
