<template>
  <HeaderFile />
  <h1>All your registrations</h1>
</template>

<script>
import HeaderFile from "@/components/HeaderFile.vue";
export default {
  name: 'HistoryPage',
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