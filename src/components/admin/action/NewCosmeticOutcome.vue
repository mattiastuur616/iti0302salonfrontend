<template>
  <h1 class="info">{{infoText}}</h1>
  <button class="goBack" v-on:click="back">Go back to Cosmetics</button> &nbsp;&nbsp;&nbsp;
  <button class="goBack" v-on:click="addMore">Add more cosmetics</button>
</template>

<script>
export default {
  name:'AdminOutcome',
  data(){
    return{
      infoText:localStorage.getItem("outcome")
    }
  },
  methods:{
    back(){
      localStorage.removeItem("outcome")
      this.$router.push({name: 'AllCosmetics'})
    },
    addMore(){
      localStorage.removeItem("outcome")
      this.$router.push({name: 'AddCosmetic'})
    }
  }
}
</script>