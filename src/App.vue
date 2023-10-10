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
  border: 6px purple solid;
  background-color: greenyellow;
}
.register button, .login button{
  width: 300px;
  height: 40px;
  border: 6px purple solid;
  background: greenyellow;
  color: purple;
  cursor: pointer;
  font-size: 20px;
  font-family: "Arial Black";
}
.register button:hover, .login button:hover{
  width: 300px;
  height: 40px;
  border: 6px greenyellow solid;
  background: purple;
  color: greenyellow;
  cursor: pointer;
  font-size: 20px;
  font-family: "Arial Black";
}
</style>
