<template>
  <div id="header">
    <banner1></banner1>
    <playlists></playlists>
  </div>
</template>

<script>
import banner1 from './body01/banner.vue'
import playlists from './body01/playlists.vue'
export default {
  components:{
	    banner1,
	    playlists
    }
}
</script>

<style scoped>
#header{
  color: white;
}
</style>
