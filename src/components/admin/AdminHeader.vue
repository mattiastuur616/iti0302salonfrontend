<template>
  <div class="nav">
    <router-link to="/admin/">Home</router-link>
    <router-link to="/admin/cosmetics">Cosmetics</router-link>
    <router-link to="/admin/clients">Clients</router-link>
    <b>User {{firstName}} has logged in</b>
    <router-link to="/admin/userinfo">User Info</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name:'AdminHeader',
  data() {
    return {
      firstName: ''
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
    let user = localStorage.getItem('user-info');
    this.firstName = user;
  }
}
</script>