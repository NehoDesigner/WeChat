<template>
	<div id="login">
		<div class="header">
			<x-header :left-options="{showBack: true}">使用手机号登陆</x-header>
		</div>
		<div class="container">
			<div class="login-box">
				<div class="box-item">
					<div class="item-left">
						<span>国家/地区</span>
					</div>
					<div class="item-right text-r">
						<label>中国</label>
					</div>
				</div>
				<div class="box-item">
					<div class="item-left">
						<span>+86</span>
					</div>
					<div class="item-right">
						<input type="text" placeholder="你的手机号码" v-model="user.account" />
					</div>
				</div>
				<div class="box-item">
					<div class="item-left">
						<span>密码</span>
					</div>
					<div class="item-right">
						<input type="password" placeholder="填写密码" v-model="user.psw" />
					</div>
				</div>
				<div class="login-submit" @click="userLogin()">
					<span>登陆</span>
				</div>
				<div class="login-msg">
					<span>用短信验证码登陆</span>
				</div>
			</div>
			<toast v-model="toast.show" type="text" :time="800" is-show-mask :text="toast.text" :position="toast.position"></toast>
		</div>
	</div>
</template>

<script>
	import { XHeader,Toast } from 'vux'
	export default {
		data() {
			return {
				user: {
					account: '',
					psw: ''
				},
				toast:{
					show:false,
					text:'填写完整账号信息',
					position:'middle'
				}
			}
		},
		components: {
			XHeader,
			Toast
		},
		methods: {
			userLogin: function() {
				if(this.user.account == '' || this.user.psw == '') {
					this.toast.show = true
				} else {
					const _self = this;
					let data = {
						account: this.user.account,
						psw: this.user.psw
					}
					httpService.login(data, function(res) {
						if(res.success == true){
							ROOT_APP.login(res.token);
						}else{
							_self.toast.show = true;
							_self.toast.text = '密码错误';
						}
					});
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.login-box {
		padding: 1rem 10px 0px 10px;
		.box-item {
			overflow: hidden;
			border-bottom: 1px solid RGBA(195, 195, 195, 0.5);
			padding: 0px 1rem;
			.item-left {
				float: left;
				width: 30%;
				span {
					font-size: 0.9rem;
					line-height: 2.5rem;
				}
			}
			.item-right {
				float: left;
				width: 70%;
				label {
					font-size: 0.9rem;
					line-height: 2.5rem;
				}
				input {
					line-height: 2.5rem;
					border: none;
					outline: none;
					background: none;
				}
			}
		}
		.login-submit {
			text-align: center;
			line-height: 2.5rem;
			background: RGB(34, 177, 76);
			margin: 1rem 0px;
			color: white;
			font-size: 1rem;
			border-radius: 2px;
		}
		.login-msg {
			text-align: center;
			line-height: 2.5rem;
			color: RGB(0, 162, 232);
			font-size: 1rem;
		}
	}
</style>