<template>
  <h1>Confirm the registration</h1>
  <td>{{service}}</td>
  <td>{{service.name}}</td>
  <td>{{service.startingTime}}</td>
  <td>{{service.duration}}</td>
  <button class="backButton" v-on:click="goBack">Back</button>
</template>

<script>
import axios from "axios";

export default {
  name:'ConfirmPage',
  data(){
    return {
      service:''
    }
  },
  methods:{
    goBack()
    {
      localStorage.removeItem("serviceId")
      this.$router.push({name: 'RegisterService'})
    }
  },
  async mounted()
  {
    let serviceId = localStorage.getItem('serviceId');
    let result = await axios.get('http://localhost:8080/service/'+serviceId);
    this.service = result.data;
  }
}
</script>

<style>
.backButton{
  color: yellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  margin-right: -800px;
  text-decoration: none;
}
.backButton:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: yellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>