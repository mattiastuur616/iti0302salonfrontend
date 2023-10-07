<template>
  <h1 class="info">{{infoText}}</h1>
  <button class="button" v-on:click="back">Go back</button>
</template>

<script>
export default {
  name: 'RemovalOutcome',
  data(){
    return {
      infoText: localStorage.getItem("outcome")
    }
  },
  methods:{
    back()
    {
      localStorage.removeItem("outcome")
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