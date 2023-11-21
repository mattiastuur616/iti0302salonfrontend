<template>
  <LogOut/>
  <h1 class="Header">Add new service</h1>
  <div class="register">
    <p class="ErrorText">{{nameError}}</p>
    <input type="text" v-model="serviceName" placeholder="Enter a name of the service" />
    <p class="ErrorText">{{priceError}}</p>
    <input type="number" min="0" v-model="price" placeholder="The price of service" />
    <p class="ErrorText">{{durationError}}</p>
    <input type="number" min="0" v-model="duration" placeholder="Duration in minutes">
    <p class="date">Choose the date for service</p>
    <p class="ErrorText">{{dateError}}</p>
    <input type="date" v-model="startingTime" placeholder="When will the service happen">
  </div>
  <button class="servButton" v-on:click="addService">Create</button>&nbsp;&nbsp;&nbsp;
  <router-link class="servButton" to="/cosmetic/servicePage">Go back</router-link>
</template>

<script>
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";

export default {
  name:'AddService',
  data()
  {
    return {
      serviceName:'',
      price:'',
      duration:'',
      startingTime:'',
      nameError:'',
      priceError:'',
      durationError:'',
      dateError:''
    }
  },
  components: {
    LogOut
  },
  methods:{
    async addService()
    {
      let result = await axios.post("http://localhost:8080/api/addService?cosmeticId="+localStorage.getItem("user-id"),{
        serviceName:this.serviceName,
        price:this.price,
        duration:this.duration,
        startingTime:this.startingTime
      });
      if (result.data === 1) {
        this.nameError = 'Name can´t be empty'
        this.priceError = ''
        this.durationError = ''
        this.startingTime = ''
      } else if (result.data === 2) {
        this.nameError = ''
        this.priceError = 'Enter the number'
        this.durationError = ''
        this.startingTime = ''
      } else if (result.data === 3) {
        this.nameError = ''
        this.priceError = ''
        this.durationError = 'Duration can´t be null'
        this.startingTime = ''
      } else if (result.data === 4) {
        this.nameError = ''
        this.priceError = ''
        this.durationError = ''
        this.startingTime = 'date has to be chosen'
      } else if (result.data === 0 && result.status === 200) {
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