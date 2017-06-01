//APP应用的全局配置
import Qs from 'qs'
export default {
	serviceConfig: {
		//请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
		url: '/',

		// 请求方法同上
		method: 'post', // default
		// 基础url前缀
		baseURL: 'http://localhost:90/',

		transformRequest: [function(data) {
			// 这里可以在发送请求之前对请求数据做处理
			var serizeData = Qs.stringify(data);
			return serizeData;
		}],

		transformResponse: [function(data) {
			// 这里提前处理返回的数据
			var objData = Qs.parse(data);
			return objData;
		}],

		// 请求头信息
		headers: {
			'X-Requested-With': 'XMLHttpRequest'
		},
		//post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
		data: {
			//默认空对象
		},

		//设置超时时间
		timeout: 100000,
		//返回数据类型
		responseType: 'json', // default
	}
}