<template>
  <LogOut/>
  <h1 class="info">{{infoText}}</h1>
  <button class="goBack" v-on:click="back">Go back to services</button>
</template>

<script>
import LogOut from "@/components/user/LogOut.vue";
export default {
  name: 'OutCome',
  data(){
    return{
      infoText:localStorage.getItem("outcome")
    }
  },
  components: {
    LogOut
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
<style>
.info{
  padding-top: 30px;
  padding-bottom: 30px;
  color: greenyellow;
}
.goBack{
  color: greenyellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.goBack:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: greenyellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
</style>