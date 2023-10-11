<template>
  <AdminHeader />
  <LogOut/>
  <h1 class="Header">All registrations</h1>
  <table class="regTable" border="1" align="center">
    <tr class="fieldNames">
      <td>Service name</td>
      <td>Price</td>
      <td>Service date</td>
      <td>Client</td>
      <td>Cosmetic</td>
      <td>Registration date</td>
    </tr>
    <tr class="column" v-for="registration in registrations" :key="registration.id">
      <td>{{registration.serviceName}}</td>
      <td>{{registration.servicePrice}} €</td>
      <td>{{registration.startingTime}}</td>
      <td>{{registration.clientName}}</td>
      <td>{{registration.cosmeticName}}</td>
      <td>{{registration.registrationDate}}</td>
    </tr>
  </table>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";
export default {
  name:'AllRegistrations',
  data(){
    return {
      registrations: []
    }
  },
  components:{
    AdminHeader,
    LogOut
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      await this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      await this.$router.push({name:'CosmeticHome'})
    }
    let result = await axios.get('http://localhost:8080/allRegistrations')
    this.registrations = result.data;
  }
}
</script>