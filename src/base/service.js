//http请求配置
import axios from 'axios'
import config from '../config/base'
export default{
  post:function(url,params,successCallBack){
    //设置请求参数
    config.serviceConfig.data=params;
    //返回请求数据
    axios.post(url,{},config.serviceConfig)
    .then(function (response) {
      //成功回调
      successCallBack(response.data);
    })
    .catch(function (response) {
      //失败回调
      console.log(response);
    });
  }
}
