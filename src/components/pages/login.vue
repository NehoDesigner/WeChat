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
						<input type="text" placeholder="你的手机号码" />
					</div>
				</div>
				<div class="box-item">
					<div class="item-left">
						<span>密码</span>
					</div>
					<div class="item-right">
						<input type="password" placeholder="填写密码" />
					</div>
				</div>
				<div class="login-submit" @click="userLogin()">
					<span>登陆</span>
				</div>
				<div class="login-msg">
					<span>用短信验证码登陆</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		components: {
			XHeader
		},
		methods:{
			userLogin:function(){
				this.goto('/chat');
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