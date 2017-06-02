<template>
	<div id="index">
		<div class="index-bg">
			<div class="index-but">
				<div class="but-inner">
					<span class="index-login" @click="goto('/login')">登陆</span>
					<span class="index-regist">注册</span>
				</div>
			</div>
			<label>English</label>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.index-bg {
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background: url(../../static/images/index_bg.png) no-repeat;
		background-size: 100%;
		.index-but {
			position: absolute;
			bottom: 0px;
			left: 0px;
			width: 100%;
			.but-inner {
				overflow: hidden;
				.index-login {
					float: left;
					background: RGB(0, 255, 0);
					padding: 5px 30px;
					color: white;
					font-size: 1rem;
					margin:2rem;
					border-radius: 2px;
				}
				.index-regist {
					float: right;
					background: RGB(255, 252, 245);
					padding: 5px 30px;
					color: black;
					font-size: 1rem;
					margin:2rem;
					border-radius: 2px;
				}
			}
		}
		label{
			position:absolute;
			top:1rem;
			right:1rem;
			color:white;
			font-size: 1rem;
		}
	}
</style>