<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'app',
  components: {
    vheader:header,
  }
}
</script>

<style>
@import './assets/css/reset.css';
#app{
  width: 100%;
  height: 100%;
}
</style>
