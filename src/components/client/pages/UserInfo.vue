<template>
  <HeaderFile />
  <LogOut/>
  <h1 class="infoHeader">User info:</h1>
  <table class="infoTable">
    <tr>
      <td class="fieldName">Name:</td>
      <td class="fieldInfo">{{user.firstName}} {{user.lastName}}</td>
    </tr>
    <tr>
      <td class="fieldName">Amount of money:</td>
      <td class="fieldInfo">{{user.money}} €</td>
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
  <button class="addButton" v-on:click="addMoney">Add money</button>
</template>

<script>
import HeaderFile from "@/components/client/HeaderFile.vue";
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";
export default {
  name:'UserInfo',
  data(){
    return {
      user:''
    }
  },
  components:{
    HeaderFile,
    LogOut
  },
  methods:{
    addMoney()
    {
      this.$router.push({name: 'AddMoney'})
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name:'LoginPage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name: 'AdminHome'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      await this.$router.push({name:'CosmeticHome'})
    }
    let userId = localStorage.getItem('user-id');
    let userInfo = await axios.get('http://localhost:8080/api/client/'+userId);
    this.user = userInfo.data;
  }
}
</script>

<style>
.infoHeader{
  color: cornflowerblue;
  text-align: left;
  padding-left: 215px;
}
.fieldInfo{
  width:160px;
  height:40px;
  padding-left: 20px;
  text-align: left;
  color: greenyellow;
  font-size: 25px;
  padding-bottom: 30px;
}
.fieldName{
  width:360px;
  height:40px;
  text-align: right;
  color: mediumpurple;
  font-size: 25px;
  padding-bottom: 30px;
}
.addButton{
  color: greenyellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.addButton:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: greenyellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>