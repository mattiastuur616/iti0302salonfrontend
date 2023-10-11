<template>
  <HeaderFile />
  <LogOut/>
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
import HeaderFile from "@/components/client/HeaderFile.vue";
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";
export default {
  name: 'HistoryPage',
  data(){
    return {
      services:[]
    }
  },
  components:{
    HeaderFile,
    LogOut
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
    if (!user) {
      await this.$router.push({name:'LoginPage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name:'AdminHome'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      await this.$router.push({name:'CosmeticHome'})
    }
    let result = await axios.get('http://localhost:8080/getHistory/'+localStorage.getItem('user-id'))
    this.services = result.data;
  }
}
</script>