<template>
  <h1 class="header">Confirm the registration</h1>
  <p class="p">{{service.name}}</p>
  <p class="p">Date: {{service.startingTime}}</p>
  <p class="p">Time the service takes: {{service.duration}} minutes</p>
  <p class="p">Cosmetic of that service will be {{cosmetic.firstName}} {{cosmetic.lastName}}</p>
  <button class="button" v-on:click="confirmRegistration">Confirm</button>
  <button class="button" v-on:click="goBack">Back</button>
</template>

<script>
import axios from "axios";

export default {
  name:'ConfirmPage',
  data(){
    return {
      service:'',
      cosmetic:''
    }
  },
  methods:{
    async confirmRegistration()
    {
      let userId = localStorage.getItem("user-id");
      let serviceId = localStorage.getItem("serviceId");
      let result = await axios
          .post('http://localhost:8080/registerService?clientId='+userId+'&serviceId='+serviceId);
      localStorage.setItem("outcome", result.data)
      await this.$router.push({name: 'OutCome'})
    },
    goBack()
    {
      localStorage.removeItem("serviceId")
      localStorage.removeItem("cosmetic")
      localStorage.removeItem("action")
      this.$router.push({name: 'RegisterService'})
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name:'LoginPage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name:'AdminHome'})
    }
    let serviceId = localStorage.getItem('serviceId');
    let cosmeticId = localStorage.getItem('cosmetic')
    let serviceInfo = await axios.get('http://localhost:8080/service/'+serviceId);
    let cosmeticInfo = await axios.get('http://localhost:8080/cosmetic/'+cosmeticId);
    this.service = serviceInfo.data;
    this.cosmetic = cosmeticInfo.data;
  }
}
</script>

<style>
.header{
  padding-top: 110px;
  padding-bottom: 40px;
  color: cornflowerblue;
}
.p{
  color: greenyellow;
  font-size: 25px;
  padding-left: 300px;
  text-align: left;
  font-family: "Franklin Gothic Medium",serif;
}
.button{
  color: greenyellow;
  font-size: 32px;
  background: mediumpurple;
  border: 6px;
  cursor: pointer;
  margin-left: 200px;
  text-decoration: none;
}
.button:hover{
  color: mediumpurple;
  font-size: 32px;
  background: greenyellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>