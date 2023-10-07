<template>
  <AdminHeader />
  <h1 class="Header">All cosmetics employed in Salon</h1>
  <table class="regTable" border="1" align="center">
    <tr class="fieldNames">
      <td>Cosmetic's name</td>
      <td>Phone number</td>
      <td>Email</td>
      <td>ID code</td>
      <td>Date of birth</td>
      <td>Home address</td>
    </tr>
    <tr class="column" v-for="cosmetic in cosmetics" :key="cosmetic.id">
      <td>{{cosmetic.firstName}} {{cosmetic.lastName}}</td>
      <td>{{cosmetic.phoneNumber}}</td>
      <td>{{cosmetic.email}}</td>
      <td>{{cosmetic.idCode}}</td>
      <td>{{cosmetic.dateOfBirth}}</td>
      <td>{{cosmetic.homeAddress}}</td>
    </tr>
  </table>
  <button class="addButton" v-on:click="addCosmetic">Add new cosmetic</button>
</template>

<script>
import AdminHeader from "@/components/admin/AdminHeader.vue";
import axios from "axios";
export default {
  name:'AllCosmetics',
  data(){
    return {
      cosmetics: []
    }
  },
  components:{
    AdminHeader
  },
  methods:{
    addCosmetic(){
      this.$router.push({name: 'AddCosmetic'})
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      await this.$router.push({name:'LoginPage'})
    }
    let result = await axios.get('http://localhost:8080/allCosmetics')
    this.cosmetics = result.data;
  }
}
</script>