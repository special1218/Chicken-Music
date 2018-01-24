<template>
  <div id="playlists">
  	  <p class="list">热门歌单推荐</p>
    	<div v-for="data in playList">
    		<img :src="data.imgurl"/>
    		
    	</div>
    	
  </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
	data(){
		return{
			playList:[]
		}
	},
  created(){
  	
	 	const url="http://www.taoquan.store/qqmusic/musiclist.php "

		this.$http.get(url).then((res)=>{
			this.playList=res.data.data.list
			console.log(res.data.data.list)
		})

  }
}
</script>

<style scoped>
.list{
	text-align: center;
	color: #F8C731;
	padding: 8px 0;
}
img{
	width: 100px;
	height: 100px;
}
</style>
