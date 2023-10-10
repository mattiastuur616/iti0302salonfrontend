<template>
  <HeaderFile />
  <h1 class="Header">Add money to your account</h1>
  <table class="moneyTable" border="4" align="center">
    <tr class="fieldName">
      <td>Amount</td>
      <td>Action</td>
    </tr>
    <tr class="column" v-for="amount in amounts" :key="amount">
      <td>{{ amount }} €</td>
      <button class="addButton" v-on:click="addMoney(amount)">Add</button>
    </tr>
  </table>
  <p class="text">Total amount: {{total}} €</p>
  <table align="center">
    <tr>
      <td>
        <button class="addButton" v-on:click="confirm(total)">Confirm</button>
      </td>
      <td>
        <button class="addButton" v-on:click="cancel">Cancel</button>
      </td>
    </tr>
  </table>
  <button class="backButton" v-on:click="back">Back</button>
</template>

<script>
import HeaderFile from "@/components/client/HeaderFile.vue";
import axios from 'axios';
export default {
  name: 'AddMoney',
  components: {HeaderFile},
  data(){
    return {
      amounts:[500, 200, 100, 50, 20, 10, 5, 2, 1],
      total:0
    }
  },
  methods:{
    back(){
      this.$router.push({name:'UserInfo'})
    },
    addMoney(amount){
      this.total = this.total + amount;
    },
    cancel(){
      this.total = 0
    },
    async confirm(total){
      let id = localStorage.getItem('user-id');
      await axios.put('http://localhost:8080/addMoney?id='+id+'&amount='+total)
      await this.$router.push({name:'UserInfo'})
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      await this.$router.push({name: 'LoginPage'})
    } else if (localStorage.getItem("role") === "admin") {
      await this.$router.push({name: 'AdminHome'})
    } else if (localStorage.getItem("role") === "cosmetic") {
      await this.$router.push({name:'CosmeticHome'})
    }
  }
}
</script>

<style>
.backButton, .addButton{
  color: greenyellow;
  font-size: 32px;
  background: rebeccapurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.backButton:hover, .addButton:hover{
  color: rebeccapurple;
  font-size: 32px;
  background: greenyellow;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
}
.backButton{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>