import * as types from './mutation-types'
export default {
  [types.LOGIN_STATUS] (state,data){
  	//用户状态
    state.loginStatus=data;
  }
}
