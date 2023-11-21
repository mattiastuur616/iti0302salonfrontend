<template>
  <LogOut/>
  <h1 class="info">{{infoText}}</h1>
  <button class="button" v-on:click="confirmRemoval">Remove</button> &nbsp;&nbsp;&nbsp;
  <button class="button" v-on:click="back">Go back</button>
</template>

<script>
import LogOut from "@/components/user/LogOut.vue";
import axios from "axios";

export default {
  name:'ConfirmRemoval',
  data(){
    return {
      infoText: localStorage.getItem("confirm")
    }
  },
  components: {
    LogOut
  },
  methods:{
    async confirmRemoval()
    {
      let removalId = localStorage.getItem("removalId");
      if (localStorage.getItem("removalRole") === "cosmetic") {
        let result = await axios.delete('http://localhost:8080/api/removeCosmetic/'+removalId);
        localStorage.setItem("outcome", result.data)
      } else if (localStorage.getItem("removalRole") === "client") {
        let result = await axios.delete('http://localhost:8080/api/removeClient/'+removalId);
        localStorage.setItem("outcome", result.data)
      }
      localStorage.removeItem("confirm")
      await this.$router.push({name: 'RemovalOutcome'})
    },
    back()
    {
      if (localStorage.getItem("removalRole") === "cosmetic") {
        localStorage.removeItem("confirm")
        localStorage.removeItem("removalId")
        localStorage.removeItem("removalRole")
        this.$router.push({name: 'AllCosmetics'})
      } else if (localStorage.getItem("removalRole") === "client") {
        localStorage.removeItem("confirm")
        localStorage.removeItem("removalId")
        localStorage.removeItem("removalRole")
        this.$router.push({name: 'AllClients'})
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      this.$router.push({name: 'HomePage'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      this.$router.push({name:'CosmeticHome'})
    }
  }
}
</script>