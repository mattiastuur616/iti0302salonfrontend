<template>
  <AdminHeader />
  <LogOut/>
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
import AdminHeader from "@/components/admin/AdminHeader.vue";
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";
export default {
  name:'AdminInfo',
  data(){
    return {
      user:''
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
    let userId = localStorage.getItem('user-id');
    let userInfo = await axios.get('http://localhost:8080/admin/'+userId);
    this.user = userInfo.data;
  }
}
</script>