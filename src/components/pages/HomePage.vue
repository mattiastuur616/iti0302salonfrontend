<template>
  <HeaderFile />
  <h1 class="HomePageHeader">Welcome to Our Salon Home Page!</h1>
  <img alt="Greeter" class="Greetings" src="../../assets/amogus.png" />
  <p class="text">Our Salon provides only The Most Motivating services</p>
  <p class="text">with The Highest Quality You have never experienced.</p>
</template>

<script>
import HeaderFile from "@/components/HeaderFile.vue";
export default {
  name:'HomePage',
  components:{
    HeaderFile
  },
  mounted()
  {
    let user = localStorage.getItem('user-info');
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
  }
}
</script>

<style>
body {
  background-image: url("https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?cs=srgb&dl=pexels-adrien-olichon-2387793.jpg&fm=jpg");
  background-size: 1600px;
}
.HomePageHeader{
  color: cornflowerblue;
}
.Greetings{
  width: 300px;
}
.text{
  color: yellowgreen;
  font-size: 30px;
}
</style>