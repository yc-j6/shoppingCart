<template>
  <div id="app">
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>

<script>
import headerNav from './components/header-nav'
export default {
  name: 'App',
  components:{
    headerNav
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
