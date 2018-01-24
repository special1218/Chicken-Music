<template>
  <swiper :options="swiperOption" ref="mySwiper">
    
    <swiper-slide v-for="data in arr">
    	<img :src="data.picUrl"/>
    </swiper-slide>
    
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
 
<script>
	import jsonp from 'jsonp' 
	import { getDiscList } from '../../../api/recommend'
	import { ERR_OK } from '../../../api/config'
  export default {
    data() {
      return {
      	arr:[],
        swiperOption: {
        	loop:true,
        	autoplay:true
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    created(){
    	const baseUrl="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516678046534"

//			jsonp(baseUrl,{
//				param:"jsonpCallback"
//			},function(err,resp){
//				this.arr=resp.data.slider
//				console.log(resp.data.slider)
//			})
				
				const p=new Promise(function(resolve,reject){
					jsonp(baseUrl,{
						param:"jsonpCallback"
					},function(err,resp){
						if(!err){
							resolve(resp.data)
						}else{
							reject("Error")
						}
					})
				})
			p.then((resp)=>{
				this.arr=resp.slider
				console.log(resp.slider)
			},function(){
				console.log("45446545644")
			})
			
			this._getDiscList()
			
   },
   methods:{
   	_getDiscList(){
   		getDiscList().then((res)=>{
   			if(res.code===ERR_OK){
   				console.log(res.data.list)
   			}
   		})
   	}
   }
  }
</script>


<style scoped>
#banner{
	width: 100%;
	height: 26vh;
}
img{
	width: 100%;
	height: 100%;
}
</style>
