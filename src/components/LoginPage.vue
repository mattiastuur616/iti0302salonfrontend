<template>
  <img alt= "Salon Logo" class="SalonLogo" src="../assets/salonlogo.png" />
  <h1>Login</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login" >Login</button>
    <p>
      <router-link to="/sign-up">Sign Up</router-link>
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
      password:''
    }
  },
  methods:{
    async login()
    {
      let result = await axios.get(
          `http://localhost:8080/isValid?email=${this.email}&password=${this.password}`
      )
      if(result.status === 200 && result.data === true) {
        let userName = await axios.get(`http://localhost:8080/clientName?email=${this.email}`)
        localStorage.setItem("user-info",userName.data)
        this.$router.push({name:'HomePage'})
      }
      console.warn(result)
    }
  },
  mounted()
  {
    let user=localStorage.getItem('user-info');
    if(user)
    {
      this.$router.push({name:'HomePage'})
    }
  }
}
</script>