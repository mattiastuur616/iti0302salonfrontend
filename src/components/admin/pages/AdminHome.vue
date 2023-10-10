<template>
  <AdminHeader />
  <h1 class="HomePageHeader">Welcome to Admin Page</h1>
  <img alt="Greeter" class="Greetings" src="../../../assets/amogus.png" />
  <p class="text">Here you can have</p>
  <p class="text">the overview of The Salon.</p>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
export default {
  name:'AdminHome',
  components: {
    AdminHeader
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      this.$router.push({name:'CosmeticHome'})
    }
  }
}
</script>