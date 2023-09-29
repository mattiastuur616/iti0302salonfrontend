<template>
  <HeaderFile />
  <h1 class="RegisterHeader">Here You can register different Services from our Salon</h1>
  <table class="regTable" border="1" align="center">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Price</td>
      <td>Duration</td>
      <td>Date</td>
      <td>Register Service</td>
    </tr>
    <tr class="column" v-for="item in services" :key="item.id">
      <td>{{item.serviceId}}</td>
      <td>{{item.name}}</td>
      <td>{{item.price}} €</td>
      <td>{{item.duration}} minutes</td>
      <td>{{item.startingTime}}</td>
      <td><button v-on:click="register(item.serviceId, item.cosmeticId)">register</button></td>
    </tr>
  </table>
</template>
<script>
import HeaderFile from "@/components/HeaderFile.vue";
import axios from 'axios';
export default {
  name:'RegisterServ',
  data(){
    return {
      services: []
    }
  },
  components:{
    HeaderFile
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
    if(!user)
    {
      await this.$router.push({name:'SignUp'})
    }
    let result = await axios.get('http://localhost:8080/availableServices');
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
.regTable button{
  color: yellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.regTable button:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: yellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>