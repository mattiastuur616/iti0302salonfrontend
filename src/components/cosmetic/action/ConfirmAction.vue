<template>
  <LogOut/>
  <h1 class="info">{{infoText}}</h1>
  <button class="servButton" v-on:click="confirmAction">Confirm</button>
  <button class="servButton" v-on:click="back">Go back</button>
</template>

<script>
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";

export default {
  name:'ConfirmAction',
  data(){
    return {
      infoText:localStorage.getItem("confirmText")
    }
  },
  components: {
    LogOut
  },
  methods:{
    async confirmAction()
    {
      let actionType = localStorage.getItem("actionType");
      if (actionType === "removeServ") {
        await axios.delete("http://localhost:8080/removeService/"+localStorage.getItem("serviceId"))
        localStorage.removeItem("actionType");
        localStorage.removeItem("confirmText");
        localStorage.removeItem("serviceId");
        await this.$router.push({name: 'ServicesPage'})
      } else if (actionType === "finish") {
        let clientId = localStorage.getItem("clientId");
        let serviceId = localStorage.getItem("serviceId");
        await axios.put("http://localhost:8080/finishService?clientId="+clientId+"&serviceId="+serviceId)
        localStorage.removeItem("actionType");
        localStorage.removeItem("confirmText");
        localStorage.removeItem("serviceId");
        localStorage.removeItem("clientId");
        await this.$router.push({name: 'ServicesPage'})
      } else if (actionType === "removeReg") {
        let clientId = localStorage.getItem("clientId");
        let serviceId = localStorage.getItem("serviceId");
        await axios.delete("http://localhost:8080/removeRegistration?clientId="+clientId+"&serviceId="+serviceId)
        localStorage.removeItem("actionType");
        localStorage.removeItem("confirmText");
        localStorage.removeItem("serviceId");
        localStorage.removeItem("clientId");
        await this.$router.push({name: 'ServicesPage'})
      }
    },
    back() {
      localStorage.removeItem("actionType")
      localStorage.removeItem("confirmText")
      localStorage.removeItem("clientId")
      localStorage.removeItem("serviceId")
      this.$router.push({name: "ServicesPage"})
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

<style scoped>

</style>