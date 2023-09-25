<template>
  <HeaderFile />
  <h1 class="RegisterHeader">Here You can register different Services from our Salon.</h1>
  <table border="1" align="center">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Price</td>
      <td>Duration</td>
      <td>Date</td>
    </tr>
    <tr v-for="item in services" :key="item.id">
      <td>{{item.serviceId}}</td>
      <td>{{item.name}}</td>
      <td>{{item.price}} €</td>
      <td>{{item.duration}} minutes</td>
      <td>{{item.startingTime}}</td>
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
      name:'',
      services:[]
    }
  },
  components:{
    HeaderFile
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
    let result = await axios.get('http://localhost:8080/allServices');
    console.warn(result)
    this.services=result.data;
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
</style>