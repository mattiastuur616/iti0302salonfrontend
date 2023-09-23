<template>
  <HeaderFile />
  <h1>Here You can search information about our Salon.</h1>
</template>

<script>
import HeaderFile from "@/components/HeaderFile.vue";
export default {
  name: 'SearchPage',
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