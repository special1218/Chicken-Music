import jsonp from '../assets/js/jsonp'
import {commonParams,options} from './config'

export function getRecommend(){
//	g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516688564884
	const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"
	
	const data=Object.assign({},commonParams,{
		platform:'h5',
		uin:0,
		needNewCode:1
	})
	return jsonp(url,data,options)
}

export function getDiscList() {
	const url="https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg"
	
	const data=Object.assign({},commonParams,{
		platform:'yqq',
		hosUin:0,
		sin:0,
		ein:29,
		sortId:5,
		needNewCode:0,
		categoryId:10000000,
		rnd:Math.random()
	})
	return jsonp(url,data,options)
}
