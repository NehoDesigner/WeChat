// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false
import App from './App'

//vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import { routes } from './router/index'
const router = new VueRouter({
	routes
});

//字体
import './static/css/font.css';

//httpService
import httpService from './service/httpService';
window.httpService = httpService;

//sessionHelper
import sessionHelper from './service/sessionHelper';
//扩展
import './extend/mixin'

//base css
import './static/css/base.css';

//vuex
import store from './vuex'

/* eslint-disable no-new */
window.ROOT_APP = new Vue({
	router,
	store,
	methods: {
		login: function(value) {
			sessionHelper.setToken(value);
			this.$store.dispatch('loginStatus', true);
			this.goto('/index');
		},
		logout: function() {
			localStorage.clear();
			this.$store.dispatch('loginStatus', false);
			this.goto('/');
		}
	},
	created: function() {
		if(sessionHelper.isOnline()) {
			this.$store.dispatch('loginStatus', true);
			this.goto('/index');
		}
	},
	render: h => h(App)
}).$mount('#app-box')