//页面请求方式封装
import service from "../base/service"
export default{
  login:function(params,callback){
    service.post("/api/user/login",params,callback)
  },
  regist:function(params,callback){
    service.post("/api/user/regist",params,callback)
  }
}
