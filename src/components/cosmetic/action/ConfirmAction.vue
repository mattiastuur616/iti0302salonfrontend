<template>
  <h1 class="info">{{infoText}}</h1>
  <button class="servButton" v-on:click="confirmAction">Confirm</button>
  <router-link class="servButton" to="/cosmetic/servicePage">Go back</router-link>
</template>

<script>
import axios from "axios";

export default {
  name:'ConfirmAction',
  data(){
    return {
      infoText:localStorage.getItem("confirmText")
    }
  },
  methods:{
    async confirmAction()
    {
      let actionType = localStorage.getItem("actionType");
      if (actionType === "removeServ") {
        await axios.post("http://localhost:8080/removeService/"+localStorage.getItem("serviceId"))
        localStorage.removeItem("actionType");
        localStorage.removeItem("confirmText");
        localStorage.removeItem("serviceId");
        await this.$router.push({name: 'ServicesPage'})
      } else if (actionType === "finish") {
        let clientId = localStorage.getItem("clientId");
        let serviceId = localStorage.getItem("serviceId");
        await axios.post("http://localhost:8080/finishService?clientId="+clientId+"&serviceId"+serviceId)
        localStorage.removeItem("actionType");
        localStorage.removeItem("confirmText");
        localStorage.removeItem("serviceId");
        localStorage.removeItem("clientId");
        await this.$router.push({name: 'ServicesPage'})
      } else if (actionType === "removeReg") {
        let clientId = localStorage.getItem("clientId");
        let serviceId = localStorage.getItem("serviceId");
        await axios.post("http://localhost:8080//removeRegistration?clientId="+clientId+"&serviceId"+serviceId)
        localStorage.removeItem("actionType");
        localStorage.removeItem("confirmText");
        localStorage.removeItem("serviceId");
        localStorage.removeItem("clientId");
        await this.$router.push({name: 'ServicesPage'})
      }
    }
  }
}
</script>

<style scoped>

</style>