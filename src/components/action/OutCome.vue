<template>
  <h1 class="info">{{infoText}}</h1>
  <button class="goBack" v-on:click="back">Go back to services</button>
</template>

<script>
export default {
  name: 'OutCome',
  data(){
    return{
      infoText:localStorage.getItem("outcome")
    }
  },
  methods:{
    back()
    {
      localStorage.removeItem("serviceId")
      localStorage.removeItem("outcome")
      localStorage.removeItem("cosmetic")
      if (localStorage.getItem("action") === "cancel") {
        localStorage.removeItem("action")
        this.$router.push({name: 'HistoryPage'})
      } else if (localStorage.getItem("action") === "register") {
        localStorage.removeItem("action")
        this.$router.push({name: 'RegisterService'})
      }
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
  }
}
</script>
<style>
.info{
  padding-top: 30px;
  padding-bottom: 30px;
  color: yellowgreen;
}
.goBack{
  color: yellow;
  font-size: 32px;
  background: mediumpurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.goBack:hover{
  color: mediumpurple;
  font-size: 32px;
  background: yellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>