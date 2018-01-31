import jsonp from 'jsonp'

export function getSingerList(){
 	const url="https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
	return new Promise(function(resolve,reject){
		jsonp(url,{
			param:'jsonpCallback'
		},function(err,resp){
			if(!err){
				resolve(resp)
			}else{
				reject(err)
			}
		})
	})
}

//export function getSingerDetails(singermid){
//	const url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?g_tk=5381&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&singermid='+singermid+'&order=listen&begin=0&num=30&songstatus=1"
//	return new Promise(function(resolve,reject){
//		jsonp(url,{
//			param:'jsonpCallback'
//		},function(err,res){
//			if(!err){
//				resolve(res)
//				console.log(res)
//			}else{
//				reject(err)
//			}
//		})
//	})
//}


