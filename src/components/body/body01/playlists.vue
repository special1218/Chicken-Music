<template>
  <div id="playlists">
  	  <p class="list">热门歌单推荐</p>

    	<ul class="lists">
    		<li v-for="data in playList">
    			<div id="left">
    				<img v-lazy="data.imgurl"/>
    			</div>
    			<div id="right">
    				<p class="top">{{data.creator.name}}</p>
    				<p class="botttom">{{data.dissname}}</p>
    			</div>
    		</li>
    	</ul>
    	
    	
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
	padding: 12px 0;
}
img{
	width: 76px;
	height: 76px;
	float: left;
	padding: 0 18px;
}
.lists li{
	list-style: none;
	width: 100%;
	height: 120px;
	
}
.top{
	padding: 6px 0;
}
.botttom{
	padding: 6px 0;
	font-size: 14px;
	color: grey;
}
</style>
