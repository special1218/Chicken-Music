<template>
	<transition name="slide">
		<div id="header">
			<ul class="singers">
				<li v-for="(data,index) in singerList">
					<p class="group"><span style="padding-left: 20px;">{{data.title}}</span></p>
					<div id="center" v-for="im in data.item" @click="singer(im.Fsinger_mid)">
						<img v-lazy="`https://y.gtimg.cn/music/photo_new/T001R150x150M000${im.Fsinger_mid}.jpg?max_age=2592000`" />
						<p>{{im.Fsinger_name}}</p>
					</div>
				</li>
			</ul>

			<div id="list">
				<ul>
					<li v-for="item in shortcutList" @click="scrollElement(item,shortcutList)">
						{{item}}
					</li>
				</ul>
			</div>

			<router-view></router-view>
		</div>
	</transition>
</template>

<script>
	import { getSingerList } from '../../api/singers'
	export default {
		data() {
			return {
				singerList: []
			}
		},
		created() {
			getSingerList().then((res) => {
				return res.data.list
			}).then((resp) => {
				var jsonGroup = {};
				var hot = resp.splice(0, 10);
				for(var i = 0; i < hot.length; i++) {
					if(jsonGroup["hot"] == undefined) {
						jsonGroup["hot"] = [];
						jsonGroup["hot"].push(hot[i])
					} else {
						jsonGroup["hot"].push(hot[i])
					}
				}
				for(var i = 0; i < resp.length; i++) {
					if(jsonGroup[resp[i].Findex] == undefined) {
						jsonGroup[resp[i].Findex] = []
						jsonGroup[resp[i].Findex].push(resp[i])
					} else {
						jsonGroup[resp[i].Findex].push(resp[i])
					}
				}
				return jsonGroup
			}).then((res) => {
				var alphabeta = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
				this.singerList.push({
					'item': res['hot'],
					"title": '热门'
				});
				for(var i = 0; i < alphabeta.length; i++) {
					if([res[alphabeta[i]]][0] !== undefined) {
						this.singerList.push({
							'item': res[alphabeta[i]],
							title: alphabeta[i]
						})
					}
				}
				console.log(this.singerList)
			})
		},
		computed:{
			shortcutList(){
				return this.singerList.map((group)=>{
					return group.title.substr(0,1)
				})
			}
		},
		methods:{
			scrollElement(groupIndex,shortcutList){
				let grouplists=shortcutList.join('')
				var index=0
				if(groupIndex!='hot'){
					index=grouplists.indexOf(groupIndex)
				}
				let jump=document.querySelectorAll('.group')
				let total=jump[index].offsetTop
				document.documentElement.scrollTop = total-90
			},
			singer(item){
				console.log(item)
				this.$router.push({path:'/singer/'+item})
			}
		}
	}
</script>

<style scoped>
	#header {
		color: #7E7D80;
	}
	.group {
		width: 100%;
		height: 30px;
		background: #323232;
		line-height: 30px;
	}
	
	.singers li {
		list-style: none;
	}
	
	#center {
		width: 100%;
		display: flex;
	}
	
	#center p {
		margin-top: 26px;
	}
	
	img {
		margin: 12px 20px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	#list{
	   position: fixed;
	   top: 25%;
	   right: 10px;
	   height: 435px;
	   background: #222222;
  }
	#list ul li {
		list-style: none;
		margin: 3px 0;
		font-size: 12px;
		text-align: center;
	}
	
	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.3s;
	}
	
	.slide-enter,
	.slide-leave-to {
		transform: translate3d(100%, 0, 0);
	}

</style>