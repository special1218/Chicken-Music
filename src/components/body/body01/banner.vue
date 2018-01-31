<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="data in bannerList">
    	<img :src="data.picUrl"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>
</template>
 
<script>
import { bannerList } from '../../../api/banner'
export default {
    data() {
      return {
      	bannerList:[],
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
    	bannerList().then((res)=>{
    		this.bannerList=res.data.slider
    		console.log(res.data.slider)
    	})
	//	jsonp(baseUrl,{
	//			param:"jsonpCallback"
	//	},function(err,resp){
	//			this.arr=resp.data.slider
	//			console.log(resp.data.slider)
	//		})
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
