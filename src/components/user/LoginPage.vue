<template>
  <h1 class="h1">Login</h1>
  <img alt= "Salon Logo" class="SalonLogo" src="../../assets/butterfly.png" />
  <div class="login">
    <p class="ErrorText">{{loginError}}</p>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login" >Login</button>
    <p>
      <router-link class="routerLink" to="/sign-up">Don't have an account? Don't worry! Sign Up Here!</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'LoginPage',
  data()
  {
    return {
      email:'',
      password:'',
      loginError:''
    }
  },
  methods:{
    async login()
    {
      let clientResult = await axios.get(
          `http://localhost:8080/isValidClient?email=${this.email}&password=${this.password}`
      )
      let adminResult = await axios.get(
          `http://localhost:8080/isValidAdmin?email=${this.email}&password=${this.password}`
      )
      let cosmeticResult = await axios.get(
          `http://localhost:8080/isValidCosmetic?email=${this.email}&password=${this.password}`
      )
      if (clientResult.status === 200 && clientResult.data === true) {
        let userName = await axios.get(`http://localhost:8080/clientName?email=${this.email}`)
        let user = await axios.get(`http://localhost:8080/getClient?email=${this.email}`)
        localStorage.setItem("user-info",userName.data)
        localStorage.setItem("user-id",user.data)
        localStorage.setItem("role","client")
        await this.$router.push({name: 'HomePage'})
      } else if (adminResult.status === 200 && adminResult.data === true) {
        let userName = await axios.get(`http://localhost:8080/adminName?email=${this.email}`)
        let user = await axios.get(`http://localhost:8080/getAdmin?email=${this.email}`)
        localStorage.setItem("user-info",userName.data)
        localStorage.setItem("user-id",user.data)
        localStorage.setItem("role","admin")
        await this.$router.push({name: 'AdminHome'})
      } else if (cosmeticResult.status === 200 && cosmeticResult.data === true) {
        let userName = await axios.get(`http://localhost:8080/cosmeticName?email=${this.email}`)
        let user = await axios.get(`http://localhost:8080/getCosmetic?email=${this.email}`)
        localStorage.setItem("user-info",userName.data)
        localStorage.setItem("user-id",user.data)
        localStorage.setItem("role","cosmetic")
        await this.$router.push({name: 'CosmeticHome'})
      } else {
        this.loginError = 'User email or password incorrect!'
      }
    }
  },
  mounted()
  {
    let user=localStorage.getItem('user-info');
    if (user)
    {
      this.$router.push({name:'HomePage'})
    }
  }
}
</script>

<style>
.routerLink{
  color: yellowgreen;
  font-size: 20px;
  text-decoration: none;
}
.ErrorText{
  color: red;
  font-size: 20px;
}
</style>