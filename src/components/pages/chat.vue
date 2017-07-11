<template>
	<div id="chat">
		<div class='container'>
			<div class="chat-item" v-for="item in 1">
				<div class="item-left">
					<img src="../../assets/vux_logo.png">
				</div>
				<div class="item-right">
					<label>女神</label>
					<p>我玩的时候看到你在线就拉你</p>
				</div>
				<i>昨天</i>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped>
	.chat-item {
		padding: 0.5rem 1rem;
		background: white;
		overflow: hidden;
		position: relative;
		border-bottom: 1px solid RGBA(195, 195, 195, 0.4);
		.item-left {
			float: left;
			width: 15%;
			height: 40px;
			line-height: 40px;
			img {
				width: 40px;
				height: 40px;
				vertical-align: middle;
			}
		}
		.item-right {
			float: left;
			width: 85%;
			label {
				display: block;
				line-height: 20px;
				font-size: 1rem;
			}
			p {
				line-height: 20px;
				color: gray;
			}
		}
		i {
			position: absolute;
			top: 0.5rem;
			right: 1rem;
			color: gray;
		}
	}
</style>