<template>
  <h1 class="h1">Sign Up</h1>
  <img alt= "Salon Logo" class="SalonLogo" src="../assets/salonlogo.png" />
  <div class="register">
    <input type="text" v-model="firstName" placeholder="Enter Your First Name" />
    <input type="text" v-model="lastName" placeholder="Enter Your Last Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <input type="text" v-model="money" placeholder="Enter Amount of Money" />
    <input type="text" v-model="phoneNumber" placeholder="Enter Your Phone Number" />
    <input type="text" v-model="idCode" placeholder="Enter ID code" />
    <input type="text" v-model="dateOfBirth" placeholder="Enter Your Birth Date" />
    <input type="text" v-model="homeAddress" placeholder="Enter Your Home Address" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/login">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data()
  {
    return {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      money:'',
      phoneNumber:'',
      idCode:'',
      dateOfBirth:'',
      homeAddress:''
    }
  },
  methods:{
    async signUp()
    {
      let result = await axios.post("http://localhost:8080/addClient?password="+this.password,{
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
        money:this.money,
        phoneNumber:this.phoneNumber,
        idCode:this.idCode,
        dateOfBirth:this.dateOfBirth,
        homeAddress:this.homeAddress
      });

      console.warn(result);
      if (result.status === 200)
      {
        let userName = await axios.get(`http://localhost:8080/clientName?email=${this.email}`)
        let user = await axios.get(`http://localhost:8080/getClient?email=${this.email}`)
        localStorage.setItem("user-info",userName.data)
        localStorage.setItem("user-id",user.data)
        await this.$router.push({name: 'HomePage'})
      }
    }
  },
  mounted()
  {
    let user = localStorage.getItem('user-info');
    if(user)
    {
      this.$router.push({name:'HomePage'})
    }
  }
}
</script>

<style>
.SalonLogo{
  width: 300px;
}
.h1 {
  color: purple;
  background-color: cornflowerblue;
  padding: 30px;
  padding-left: 30px;
}
</style>