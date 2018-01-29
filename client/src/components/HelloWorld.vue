<template>
  <div class="">
    <h1 class="page-title">Hello {{ user }}</h1>
    <input type="text" placeholder="Your Name" v-model="user"> 
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      user: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
