<template>
  <HeaderFile />
  <LogOut/>
  <h1 class="Header">Here You can register different Services from our Salon</h1>
  <table class="regTable" border="1" align="center">
    <tr class="fieldNames">
      <td>Name</td>
      <td>Price</td>
      <td>Duration</td>
      <td>Date</td>
      <td>Register Service</td>
    </tr>
    <tr class="column" v-for="item in services" :key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.price}} €</td>
      <td>{{item.duration}} minutes</td>
      <td>{{item.startingTime}}</td>
      <td><button v-on:click="register(item.serviceId, item.cosmeticId)">register</button></td>
    </tr>
  </table>
</template>
<script>
import HeaderFile from "@/components/client/HeaderFile.vue";
import LogOut from "@/components/user/LogOut.vue";
import axios from 'axios';
export default {
  name:'RegisterServ',
  data(){
    return {
      services: []
    }
  },
  components:{
    HeaderFile,
    LogOut
  },
  methods:{
    register(id, cosmetic)
    {
      localStorage.setItem("serviceId", id)
      localStorage.setItem("cosmetic", cosmetic)
      localStorage.setItem("action", "register")
      this.$router.push({path: "/confirm/"+id})
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name:'LoginPage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name:'AdminHome'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      await this.$router.push({name:'CosmeticHome'})
    }
    let result = await axios.get('http://localhost:8080/api/availableServices');
    console.warn(result)
    this.services = result.data;
  }
}
</script>

<style>
td{
  width:160px;
  height:40px;
  text-align: center;
  font-size: 20px;
}
.fieldNames{
  color: mediumpurple;
}
.column{
  color: greenyellow;
}
.regTable button{
  color: greenyellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.regTable button:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: greenyellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.Header{
  color: cornflowerblue;
}
</style>