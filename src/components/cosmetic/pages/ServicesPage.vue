<template>
  <CosmeticHeader />
  <h1 class="Header">All your services</h1>
  <button class="FilterButton">All</button>&nbsp;
  <button class="FilterButton">Available</button>&nbsp;
  <button class="FilterButton">Registered</button>&nbsp;
  <button class="FilterButton">Finished</button>
  <table class="regTable" border="1" align="center">
    <tr class="fieldName">
      <td>Name</td>
      <td>Price</td>
      <td>Service date</td>
      <td>Duration</td>
      <td>Status</td>
      <td>Action</td>
    </tr>
    <tr class="column" v-for="item in services" :key="item.id">
      <td>{{item.name}}</td>
      <td>{{item.price}}</td>
      <td>{{item.startingTime}}</td>
      <td>{{item.duration}}</td>
      <td>{{item.statusId}}</td>
    </tr>
  </table>
  <button class="addButton" v-on:click="addService">Add new service</button>
</template>

<script>
import CosmeticHeader from "@/components/cosmetic/CosmeticHeader.vue";

export default {
  name:'ServicesPage',
  data(){
    return {
      services: []
    }
  },
  components: {
    CosmeticHeader
  },
  methods:{
    addService()
    {
      this.$router.push({name: 'AddService'})
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "admin") {
      this.$router.push({name: 'AdminHome'})
    }
  }
}
</script>

<style>
.regTable{
  margin-bottom: 30px;
  margin-top: 30px;
}
.FilterButton{
  color: greenyellow;
  font-size: 20px;
  background: none;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.FilterButton:hover{
  color: rebeccapurple;
  font-size: 20px;
  background: none;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>