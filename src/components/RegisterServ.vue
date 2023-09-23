<template>
  <HeaderFile />
  <h1 class="RegisterHeader">Here You can register different Services from our Salon.</h1>
</template>
<script>
import HeaderFile from "@/components/HeaderFile.vue";
export default {
  name:'RegisterServ',
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