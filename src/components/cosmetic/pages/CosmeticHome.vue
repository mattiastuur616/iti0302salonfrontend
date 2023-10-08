<template>
  <CosmeticHeader />
  <h1 class="Header">Welcome to Cosmetic Page</h1>
  <img alt="Greeter" class="Greetings" src="../../../assets/amogus.png" />
  <p class="text">Be welcomed to add new services for clients</p>
  <p class="text">and provide them the best experience.</p>
</template>

<script>
import CosmeticHeader from "@/components/cosmetic/CosmeticHeader.vue";

export default {
  name:'CosmeticHome',
  components: {
    CosmeticHeader
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

<style scoped>

</style>