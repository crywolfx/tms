<template>
    <button @click="test">11111111</button>
</template>
<script>
export default {
  name:'aindex',
  data() {
      return {

      }
  },
  methods: {
      test() {
          this.axios.post('/api/teacher/test',{
              name:'test',
          }).then(res=>{
              console.log(res);
          })
      }
  }
}
</script>
<style lang="scss">

</style>
