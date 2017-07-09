import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moduleUser from './user/module'
import statusUser from './status/module'

import * as plugins from './plugins'

export default new Vuex.Store({
	modules:{
		user:moduleUser,
		status:statusUser
	},
	plugins:[plugins.statusPlugin]
})



