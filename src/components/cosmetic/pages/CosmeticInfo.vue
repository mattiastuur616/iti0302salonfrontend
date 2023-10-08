<template>
  <CosmeticHeader />
  <h1 class="infoHeader">User info:</h1>
  <table class="infoTable">
    <tr>
      <td class="fieldName">Name:</td>
      <td class="fieldInfo">{{user.firstName}} {{user.lastName}}</td>
    </tr>
    <tr>
      <td class="fieldName">Phone number:</td>
      <td class="fieldInfo">{{user.phoneNumber}}</td>
    </tr>
    <tr>
      <td class="fieldName">Email address:</td>
      <td class="fieldInfo">{{user.email}}</td>
    </tr>
    <tr>
      <td class="fieldName">ID code:</td>
      <td class="fieldInfo">{{user.idCode}}</td>
    </tr>
    <tr>
      <td class="fieldName">Date of birth:</td>
      <td class="fieldInfo">{{user.dateOfBirth}}</td>
    </tr>
    <tr>
      <td class="fieldName">Home address:</td>
      <td class="fieldInfo">{{user.homeAddress}}</td>
    </tr>
  </table>
</template>

<script>
import CosmeticHeader from "@/components/cosmetic/CosmeticHeader.vue";
import axios from "axios";

export default {
  name:'CosmeticInfo',
  data(){
    return {
      user:''
    }
  },
  components: {
    CosmeticHeader
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      await this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name: 'AdminHome'})
    }
    let userId = localStorage.getItem('user-id');
    let userInfo = await axios.get('http://localhost:8080/cosmetic/'+userId)
    this.user = userInfo.data;
  }
}
</script>

<style scoped>

</style>