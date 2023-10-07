<template>
  <h1 class="info">{{infoText}}</h1>
  <button class="button" v-on:click="confirmRemoval">Remove</button> &nbsp;&nbsp;&nbsp;
  <button class="button" v-on:click="backToCosmetics">Go back</button>
</template>

<script>
import axios from "axios";

export default {
  name:'ConfirmRemoval',
  data(){
    return {
      infoText: localStorage.getItem("confirm")
    }
  },
  methods:{
    async confirmRemoval()
    {
      let cosmeticId = localStorage.getItem("cosmeticId");
      let result = await axios.delete('http://localhost:8080/removeCosmetic/'+cosmeticId);
      localStorage.setItem("outcome", result.data)
      localStorage.removeItem("confirm")
      await this.$router.push({name: 'RemovalOutcome'})
    },
    backToCosmetics()
    {
      localStorage.removeItem("confirm")
      localStorage.removeItem("cosmeticId")
      this.$router.push({name: 'AllCosmetics'})
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "client") {
      this.$router.push({name: 'HomePage'})
    }
  }
}
</script>