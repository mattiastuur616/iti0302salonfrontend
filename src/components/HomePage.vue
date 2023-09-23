<template>
  <HeaderFile />
  <h1 class="HomePageHeader">Welcome to Our Salon Home Page!</h1>
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