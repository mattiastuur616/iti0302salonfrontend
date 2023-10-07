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
      <td>Remove worker</td>
    </tr>
    <tr class="column" v-for="cosmetic in cosmetics" :key="cosmetic.id">
      <td>{{cosmetic.firstName}} {{cosmetic.lastName}}</td>
      <td>{{cosmetic.phoneNumber}}</td>
      <td>{{cosmetic.email}}</td>
      <td>{{cosmetic.idCode}}</td>
      <td>{{cosmetic.dateOfBirth}}</td>
      <td>{{cosmetic.homeAddress}}</td>
      <td><button v-on:click="removeCosmetic(cosmetic.cosmeticId, cosmetic.firstName, cosmetic.lastName)">Remove</button></td>
    </tr>
  </table>
  <button class="addCosmetic" v-on:click="addCosmetic">Add new cosmetic</button>
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
    },
    removeCosmetic(id, firstName, lastName){
      localStorage.setItem("cosmeticId", id);
      localStorage.setItem("confirm", "Are you sure you want to remove cosmetic "
          + firstName + " " + lastName + "?")
      this.$router.push({name: "ConfirmRemoval"})
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      await this.$router.push({name: 'HomePage'})
    }
    let result = await axios.get('http://localhost:8080/allCosmetics')
    this.cosmetics = result.data;
  }
}
</script>

<style>
.addCosmetic{
  color: yellow;
  font-size: 32px;
  background: mediumpurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 50px;
  margin-bottom: 50px;
}
.addCosmetic:hover{
  color: mediumpurple;
  font-size: 32px;
  background: yellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>