<template>
  <CosmeticHeader />
  <h1 class="Header">All your services</h1>
  <button class="FilterButton" v-on:click="all">All</button>&nbsp;
  <button class="FilterButton" v-on:click="free">Available</button>&nbsp;
  <button class="FilterButton" v-on:click="busy">Registered</button>&nbsp;
  <button class="FilterButton" v-on:click="finished">Finished</button>
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
      <td>{{item.price}} €</td>
      <td>{{item.startingTime}}</td>
      <td>{{item.duration}} minutes</td>
      <td>{{item.statusText}}</td>
      <button v-on:click="goToAction(item.statusId, item.serviceId)">{{item.actionType}}</button>
    </tr>
  </table>
  <button class="addButton" v-on:click="addService">Add new service</button>
</template>

<script>
import CosmeticHeader from "@/components/cosmetic/CosmeticHeader.vue";
import axios from "axios";

export default {
  name:'ServicesPage',
  data(){
    return {
      services: [],
      actionType:''
    }
  },
  components: {
    CosmeticHeader
  },
  methods:{
    decideAction(id) {
      if (id === 1 || id === 3) {
        return "Remove"
      } else if (id === 2) {
        return "Finish";
      }
    },
    statusType(id) {
      if (id === 1) {
        return "Available"
      } else if (id === 2) {
        return "Registered";
      } else if (id === 3) {
        return "Finished";
      }
    },
    async goToAction(statusId, serviceId) {
      if (statusId === 1) {
        localStorage.setItem("actionType","removeServ")
        localStorage.setItem("confirmText","Are you sure you want to remove this service?")
      } else if (statusId === 2) {
        localStorage.setItem("actionType","finish")
        localStorage.setItem("confirmText","Are you sure you want to finish this service?")
        let clientId = await axios.get("http://localhost:8080/registeredClient/"+serviceId);
        localStorage.setItem("clientId", clientId.data)
      } else if (statusId === 3) {
        localStorage.setItem("actionType","removeReg")
        localStorage.setItem("confirmText","Are you sure you want to remove this service?")
        let clientId = await axios.get("http://localhost:8080/registeredClient/"+serviceId);
        localStorage.setItem("clientId", clientId.data)
      }
      localStorage.setItem("serviceId",serviceId)
      await this.$router.push({name: 'ConfirmAction'})
    },
    addService()
    {
      this.$router.push({name: 'AddService'})
    },
    async all()
    {
      let result = await axios.get('http://localhost:8080/allTasks/'+localStorage.getItem("user-id"));
      this.services = result.data;
      this.services.forEach((item) => {item.actionType = this.decideAction(item.statusId)})
      this.services.forEach((item) => {item.statusText = this.statusType(item.statusId)})
    },
    async free()
    {
      let result = await axios.get('http://localhost:8080/openTasks/'+localStorage.getItem("user-id"));
      this.services = result.data;
      this.services.forEach((item) => {item.actionType = this.decideAction(item.statusId)})
      this.services.forEach((item) => {item.statusText = this.statusType(item.statusId)})
    },
    async busy()
    {
      let result = await axios.get('http://localhost:8080/busyTasks/'+localStorage.getItem("user-id"));
      this.services = result.data;
      this.services.forEach((item) => {item.actionType = this.decideAction(item.statusId)})
      this.services.forEach((item) => {item.statusText = this.statusType(item.statusId)})
    },
    async finished()
    {
      let result = await axios.get('http://localhost:8080/endedTasks/'+localStorage.getItem("user-id"));
      this.services = result.data;
      this.services.forEach((item) => {item.actionType = this.decideAction(item.statusId)})
      this.services.forEach((item) => {item.statusText = this.statusType(item.statusId)})
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      await this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name: 'AdminHome'})
    }
    let result = await axios.get('http://localhost:8080/allTasks/'+localStorage.getItem("user-id"));
    this.services = result.data;
    this.services.forEach((item) => {item.actionType = this.decideAction(item.statusId)})
    this.services.forEach((item) => {item.statusText = this.statusType(item.statusId)})
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