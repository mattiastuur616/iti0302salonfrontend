<template>
  <HeaderFile />
  <h1 class="Header">All your registrations</h1>
  <table class="regTable" border="1" align="center">
    <tr class="fieldNames">
      <td>Name</td>
      <td>Price</td>
      <td>Duration</td>
      <td>Date</td>
      <td>Cancel Service</td>
    </tr>
    <tr class="column" v-for="item in services" :key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.price}} €</td>
      <td>{{item.duration}} minutes</td>
      <td>{{item.startingTime}}</td>
      <td><button v-on:click="cancel(item.serviceId)">cancel</button></td>
    </tr>
  </table>
</template>

<script>
import HeaderFile from "@/components/HeaderFile.vue";
import axios from "axios";
export default {
  name: 'HistoryPage',
  data(){
    return {
      services:[]
    }
  },
  components:{
    HeaderFile
  },
  methods:{
    cancel(id)
    {
      localStorage.setItem("serviceId", id)
      localStorage.setItem("action", "cancel")
      this.$router.push({path: "/cancel/"+id})
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      await this.$router.push({name:'SignUp'})
    }
    let result = await axios.get('http://localhost:8080/getHistory/'+localStorage.getItem('user-id'))
    this.services = result.data;
  }
}
</script>