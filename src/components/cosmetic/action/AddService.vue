<template>
  <h1 class="Header">Add new service</h1>
  <button class="addButton" v-on:click="back">Go back</button>
</template>

<script>
export default {
  name:'AddService',
  methods:{
    back()
    {
      this.$router.push({name: 'ServicesPage'})
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "admin") {
      this.$router.push({name: 'AdminHome'})
    }
  }
}
</script>

<style>

</style>