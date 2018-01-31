<template>
  <div id="app">
    <div id="header1">
    	<header1></header1>
      <nav1></nav1>
    </div>
    <div id="empty"></div>
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
#header1{
	width: 100%;
	z-index: 10;
	background: #222;
	position: fixed;
}
#empty{
	width: 100%;
	height: 100px;
}
</style>
