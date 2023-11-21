<template>
  <h1 class="h1">Sign Up</h1>
  <img alt= "Salon Logo" class="SalonLogo" src="../../assets/butterfly.png" />
  <div class="register">
    <input type="text" v-model="firstName" placeholder="Enter Your First Name" />
    <input type="text" v-model="lastName" placeholder="Enter Your Last Name" />
    <p class="ErrorText">{{clientError}}</p>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <p class="ErrorText">{{passwordError}}</p>
    <input type="password" v-model="password" placeholder="Enter Password" />
    <p class="ErrorText">{{phoneNumberError}}</p>
    <input type="text" v-model="phoneNumber" placeholder="Enter Your Phone Number" :maxlength="phoneLimit"/>
    <p class="ErrorText">{{idCodeError}}</p>
    <input type="text" v-model="idCode" placeholder="Enter ID code" :maxlength="idCodeLimit"/>
    <p class="date">Choose your date of birth</p>
    <input type="date" v-model="dateOfBirth" placeholder="Enter Your Birth Date" />
    <input type="text" v-model="homeAddress" placeholder="Enter Your Home Address" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link class="routerLink" to="/login">Login</router-link>
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
      homeAddress:'',
      phoneLimit: 8,
      idCodeLimit: 11,
      clientError:'',
      passwordError:'',
      phoneNumberError:'',
      idCodeError:''
    }
  },
  methods:{
    async signUp()
    {
      let result = await axios.post("http://localhost:8080/api/addClient?password="+this.password,{
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

      if (result.data === 1) {
        this.clientError = 'Client already exits'
        this.passwordError = ''
        this.idCodeError = ''
        this.phoneNumberError = ''
      } else if (result.data === 2) {
        this.passwordError = 'This password is already in use'
        this.idCodeError = ''
        this.phoneNumberError = ''
        this.clientError = ''
      } else if (result.data === 3) {
        this.passwordError = 'Password has to be 8-50 letters long and include at least 1 special character'
        this.idCodeError = ''
        this.phoneNumberError = ''
        this.clientError = ''
      } else if (result.data === 4) {
        this.phoneNumberError = 'Incorrect phone number'
        this.idCodeError = ''
        this.passwordError = ''
        this.clientError = ''
      } else if (result.data === 5) {
        this.idCodeError = 'Incorrect ID code'
        this.phoneNumberError = ''
        this.passwordError = ''
        this.clientError = ''
      } else if (result.status === 200 && result.data === 0) {
          let userName = await axios.get(`http://localhost:8080/api/clientName?email=${this.email}`)
          let user = await axios.get(`http://localhost:8080/api/getClient?email=${this.email}`)
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
  color: yellow;
  background-color: cornflowerblue;
  padding: 30px;
  padding-left: 30px;
}
.date {
  color: greenyellow;
}
.ErrorText {
  color: red;
  font-size: 20px;
}
</style>