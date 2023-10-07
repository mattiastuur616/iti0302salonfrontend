<template>
  <AdminHeader />
  <h1 class="Header">All clients in Salon</h1>
  <table class="regTable" border="1" align="center">
    <tr class="fieldNames">
      <td>Client's name</td>
      <td>Phone number</td>
      <td>Email</td>
      <td>ID code</td>
      <td>Date of birth</td>
      <td>Home address</td>
    </tr>
    <tr class="column" v-for="client in clients" :key="client.id">
      <td>{{client.firstName}} {{client.lastName}}</td>
      <td>{{client.phoneNumber}}</td>
      <td>{{client.email}}</td>
      <td>{{client.idCode}}</td>
      <td>{{client.dateOfBirth}}</td>
      <td>{{client.homeAddress}}</td>
    </tr>
  </table>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import axios from "axios";
export default {
  name:'AllClients',
  data(){
    return {
      clients: []
    }
  },
  components:{
    AdminHeader
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      await this.$router.push({name: 'HomePage'})
    }
    let result = await axios.get('http://localhost:8080/allClients')
    this.clients = result.data;
  }
}
</script>