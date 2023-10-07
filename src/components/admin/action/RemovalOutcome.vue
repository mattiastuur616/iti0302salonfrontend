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
  }
}
</script>