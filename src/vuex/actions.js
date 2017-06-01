import * as types from './mutation-types'
export default {
  //全局辅助功能
  loginStatus({commit}, data){
    commit(types.LOGIN_STATUS, data);
  },
}
