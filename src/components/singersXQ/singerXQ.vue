<template>
  <div id="singer">
  	 	<span class="back" @click="back()">&lt;</span>
  		<p class="name">{{singer_name}}</p>
  		<p class="all">随机播放全部</p>
  		<div id="mb"></div>
  		<img class="img" :src="`https://y.gtimg.cn/music/photo_new/T001R300x300M000${singer_mid}.jpg?max_age=2592000`"/>
  		<div id="body" >
  			<ul>
  				<li v-for="data in singerdetails">
  					<p>{{data.musicData.songname}}</p>
  					<p class="gray">{{singer_name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{data.musicData.albumname}}</p>
  				</li>
  			</ul>
  		</div>
  </div>
</template>

<script>
import {getSingerDetails} from '../../api/singer'
export default {
	data(){
		return {
			singerdetails:[],
			singer_name:'',
			singer_mid:''
		}
	},
	created(){
		var id=this.$route.params.id
		getSingerDetails(id).then((res)=>{
			this.singerdetails=res.data.list
			console.log(res.data)
			this.singer_mid=res.data.singer_mid
			this.singer_name=res.data.singer_name
		})
	},
	methods:{
		back(){
			this.$router.push({path:'/singer'})
		}
	}
}
</script>

<style scoped>
#singer{
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	background: #222;
	width: 100%;
	z-index: 1000;
	color: white;
}
.back{
	z-index: 10;
	position: absolute;
	padding-left: 6px;
	font-size: 20px;
}
.all{
	width: 160px;
	height: 38px;
	line-height: 38px;
	border-radius: 26px 26px 26px 26px;
	position: absolute;
	z-index: 100;
	top: 28%;
	left: 28%;
	text-align: center;
	color: #F8C731;
	border: 2px solid #F8C731;
}
.name{
	position: absolute;
	width: 100%;
	z-index: 1;
	padding-top: 6px;
	text-align: center;
}
.img{
	width: 100%;
	height: 38vh;
}
#mb{
	width: 100%;
	height: 38vh;
	background: black;
	position: absolute;
	top: 0;
	opacity: 0.3;
}
#body{
	width: 100%;
}
#body ul li{
	list-style: none;
	padding: 8px 0px 6px 26px;
}
#body ul li p{
	height: 28px;
}
.gray{
	color: #7E7D80;
}
</style>