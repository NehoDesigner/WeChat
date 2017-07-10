import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'


Vue.use(Vuex)

import moduleUser from './user/module'
import statusUser from './status/module'


import * as plugins from './plugins'
var socket = io.connect('127.0.0.1:3000');
const plugin = plugins.createWebSocketPlugin(socket);

export default new Vuex.Store({
	modules:{
		user:moduleUser,
		status:statusUser
	},
	plugins:[plugin]
})



