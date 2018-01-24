<template>
  <div id="app">
    <header1></header1>
    <nav1></nav1>
    <keep-alive>
    	<router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>

import header1 from './components/head/header.vue'
import nav1 from './components/nav/nav.vue'
export default {
  name: 'App',
  components:{
    header1,
    nav1
  }
}
</script>

<style>
*{
  margin: 0;
  padding:0; 
}

</style>
