<template>
  <LogOut/>
  <h1 class="header">Are you sure about this cancellation?</h1>
  <button class="button" v-on:click="cancel">Cancel the service</button>
  <button class="button" v-on:click="goBack">Go Back</button>
</template>

<script>
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";

export default {
  name:'CancelPage',
  components: {
    LogOut
  },
  methods:{
    async cancel()
    {
      let userId = localStorage.getItem("user-id");
      let serviceId = localStorage.getItem("serviceId");
      let result = await axios
          .delete('http://localhost:8080/cancelService?clientId='+userId+'&serviceId='+serviceId);
      localStorage.setItem("outcome", result.data)
      await this.$router.push({name: 'OutCome'})
    },
    goBack()
    {
      localStorage.removeItem("serviceId")
      localStorage.removeItem("cosmetic")
      localStorage.removeItem("action")
      this.$router.push({name: 'HistoryPage'})
    }
  },
  mounted()
  {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name:'LoginPage'})
    } else if (localStorage.getItem("role") === "admin") {
      this.$router.push({name:'AdminHome'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      this.$router.push({name:'CosmeticHome'})
    }
  }
}
</script>