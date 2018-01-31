import jsonp from './jsonp'
import {commonParams,options} from './config'

export function getSingerDetails(singermid){
	const url='https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
	const data=Object.assign({},commonParams,{
		  g_tk:5381,
		  loginUin:0,
		  hostUin:0,
		  platform:'yqq',
		  needNewCode:0,
		  singermid:singermid,
		  order:'listen',
		  begin:0,
		  num:30,
		  songstatus:1
	})
	return jsonp(url,data,options)
}
