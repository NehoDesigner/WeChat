/**
 * Created by Neho
 */
//sessionHelper
import sessionHelper from '../service/sessionHelper';
export const routes = [{
	name: 'index',
	path: '/',
	component: (resolve) => {
		require(['../components/pages/index.vue'], resolve)
	},
	beforeEnter: (to, from, next) => {
		if(sessionHelper.isOnline()) {
			next('/chat');
		} else {
			next();
		}
	}
},{
	name: 'login',
	path: '/login',
	component: (resolve) => {
		require(['../components/pages/login.vue'], resolve)
	}
},{
	name: 'layout',
	path: '/layout',
	component: (resolve) => {
		require(['../components/layout/layout.vue'], resolve)
	},
	children: [{
		name: 'chat',
		path: '/chat',
		component: (resolve) => {
			require(['../components/pages/chat.vue'], resolve)
		},
		meta: {
			routeLevel: 1
		}
	},{
		name: 'contact',
		path: '/contact',
		component: (resolve) => {
			require(['../components/pages/contact.vue'], resolve)
		},
		meta: {
			routeLevel: 1
		}
	},{
		name: 'explore',
		path: '/explore',
		component: (resolve) => {
			require(['../components/pages/explore.vue'], resolve)
		},
		meta: {
			routeLevel: 1
		}
	},{
		name: 'me',
		path: '/me',
		component: (resolve) => {
			require(['../components/pages/me.vue'], resolve)
		},
		meta: {
			routeLevel: 1
		}
	}]
}];