<template>
  <HeaderFile />
  <LogOut/>
  <h1 class="HomePageHeader">Welcome to Our Salon Home Page!</h1>
  <img alt="Greeter" class="Greetings" src="../../../assets/amogus.png" />
  <p class="text">Our Salon provides only The Most Motivating services</p>
  <p class="text">with The Highest Quality You have never experienced.</p>
</template>

<script>
import HeaderFile from "@/components/client/HeaderFile.vue";
import LogOut from "@/components/user/LogOut.vue";
export default {
  name:'HomePage',
  components:{
    HeaderFile,
    LogOut
  },
  mounted()
  {
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
  color: greenyellow;
  font-size: 30px;
}
</style>