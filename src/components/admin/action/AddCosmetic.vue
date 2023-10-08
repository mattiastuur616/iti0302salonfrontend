<template>
  <h1 class="Header">Create the user for a new cosmetic</h1>
  <div class="register">
    <input type="text" v-model="firstName" placeholder="Enter Cosmetic's First Name"/>
    <input type="text" v-model="lastName" placeholder="Enter Cosmetic's Last Name" />
    <p class="ErrorText">{{cosmeticError}}</p>
    <input type="text" v-model="email" placeholder="Enter Email" />
    <p class="ErrorText">{{passwordError}}</p>
    <input type="password" v-model="password" placeholder="Enter Password" />
    <p class="ErrorText">{{phoneNumberError}}</p>
    <input type="text" v-model="phoneNumber" placeholder="Enter Cosmetic's Phone Number" :maxlength="phoneLimit"/>
    <p class="ErrorText">{{idCodeError}}</p>
    <input type="text" v-model="idCode" placeholder="Enter ID code" :maxlength="idCodeLimit"/>
    <p class="date">Choose your date of birth</p>
    <input type="date" v-model="dateOfBirth" placeholder="Enter Cosmetic's Birth Date" />
    <input type="text" v-model="homeAddress" placeholder="Enter Cosmetic's Home Address" />
  </div>
  <button class="button" v-on:click="sighUp">Create</button> &nbsp;&nbsp;&nbsp;
  <button class="button" v-on:click="back">Go back</button>
</template>

<script>
import axios from "axios";

export default {
  name: 'AddCosmetic',
  data()
  {
    return {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      phoneNumber:'',
      idCode:'',
      dateOfBirth:'',
      homeAddress:'',
      phoneLimit: 8,
      idCodeLimit: 11,
      cosmeticError:'',
      passwordError:'',
      phoneNumberError:'',
      idCodeError:''
    }
  },
  methods:{
    async sighUp()
    {
      let result = await axios.post("http://localhost:8080/addCosmetic?password="+this.password, {
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password,
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
        localStorage.setItem("outcome", "New cosmetic " + this.firstName + " " + this.lastName
            + " is added to The Salon system")
        await this.$router.push({name: 'AdminOutcome'})
      }
    },
    back(){
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

<style>
.button{
  color: greenyellow;
  font-size: 32px;
  background: mediumpurple;
  border: 6px;
  cursor: pointer;
  text-decoration: none;
  margin-right: 170px;
  margin-bottom: 50px;
}
</style>