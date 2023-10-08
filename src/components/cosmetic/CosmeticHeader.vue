<template>
  <div class="nav">
    <router-link to="/cosmetic/">Home</router-link>
    <router-link to="/cosmetic/servicePage">Services</router-link>
    <b>User {{userName}} has logged in</b>
    <router-link to="/cosmetic/userinfo">User Info</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name:'CosmeticHeader',
  data() {
    return {
      userName:''
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

<style scoped>

</style>