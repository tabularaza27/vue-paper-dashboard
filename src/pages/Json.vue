<template>
  
</template>

<script>
  import axios from 'axios'

  export default {
    name: "ScanTree",
    data() {
      return {
        baseUrl: "/"
      }
    },
    mounted() {
    },
    methods: {
      fetchData(){
       axios.get(this.baseUrl + 'test.json').then(response => {
        console.log(response);
      })
     }
   }
 }
</script>

<style scoped>

</style>
