<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/register">Register Service</router-link>
    <router-link to="/history">My registrations</router-link>
    <b>User {{userName}} has logged in</b>
    <router-link to="/userinfo">User Info</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name:'HeaderFile',
  data() {
    return {
      userName: ''
    }
  },
  methods:{
    logout()
    {
      localStorage.clear();
      this.$router.push({name:'LoginPage'})
    }
  },
  mounted() {
    this.userName = localStorage.getItem('user-info');
  }
}
</script>

<style>
.nav{
  background-color: cornflowerblue;
  overflow: hidden;
  padding: 15px;
}
.nav a{
  float: none;
  color: purple;
  padding: 20px 30px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  cursor: default;
  font-weight: bold;
}
.nav a:hover{
  cursor: pointer;
  background: rebeccapurple;
  color: greenyellow;
  font-weight: bold;
}
.nav b{
  color: yellow;
  padding: 30px;
  text-align: right;
}
</style>