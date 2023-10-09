<template>
  <h1 class="Header">Add new service</h1>
  <div class="register">
    <input type="text" v-model="serviceName" placeholder="Enter a name of the service" />
    <input type="number" min="0" v-model="price" placeholder="The price of service" />
    <input type="number" min="0" v-model="duration" placeholder="Duration in minutes">
    <p class="date">Choose the date for service</p>
    <input type="date" v-model="startingTime" placeholder="When will the service happen">
  </div>
  <button class="servButton" v-on:click="addService">Create</button>&nbsp;&nbsp;&nbsp;
  <router-link class="servButton" to="/cosmetic/servicePage">Go back</router-link>
</template>

<script>
import axios from "axios";

export default {
  name:'AddService',
  data()
  {
    return {
      serviceName:'',
      price:'',
      duration:'',
      startingTime:''
    }
  },
  methods:{
    async addService()
    {
      let result = await axios.post("http://localhost:8080/addService?cosmeticId="+localStorage.getItem("user-id"),{
        serviceName:this.serviceName,
        price:this.price,
        duration:this.duration,
        startingTime:this.startingTime
      });
      if (result.status === 200) {
        await this.$router.push({name: 'ServicesPage'})
      }
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
.Header{
  margin-top: 80px;
  margin-bottom: 80px;
}
.servButton{
  color: greenyellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.servButton:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: greenyellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>