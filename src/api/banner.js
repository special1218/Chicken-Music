import jsonp from 'jsonp'
export function bannerList(){
	const url="https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1516678046534"
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
