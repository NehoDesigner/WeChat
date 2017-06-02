<template>
	<div id="layout">
		<div class="header">
			<div class="header-box">
				<span>微信</span>
				<i class="iconfont">&#xe755;</i>
				<i class="iconfont">&#xe60e;</i>
			</div>
		</div>
		<router-view></router-view>
		<div class="nav">
			<tabbar>
				<tabbar-item selected link="/chat">
					<i class="iconfont" slot='icon'>&#xe61b;</i>
					<span slot="label">微信</span>
				</tabbar-item>
				<tabbar-item link="/contact">
					<i class="iconfont" slot='icon'>&#xe6a7;</i>
					<span slot="label">通讯录</span>
				</tabbar-item>
				<tabbar-item link="/explore">
					<i class="iconfont" slot='icon'>&#xe607;</i>
					<span slot="label">发现</span>
				</tabbar-item>
				<tabbar-item link="/me">
					<i class="iconfont" slot='icon'>&#xe60d;</i>
					<span slot="label">我</span>
				</tabbar-item>
			</tabbar>
		</div>
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'
	export default {
		components: {
			Tabbar,
			TabbarItem
		}
	}
</script>

<style lang="less" scoped>
	.header-box {
		height: 46px;
		background: RGB(53,73,94);
		span {
			float: left;
			line-height: 46px;
			color: white;
			font-size: 1rem;
			margin-left: 1rem;
		}
		i {
			float: right;
			line-height: 46px;
			color: white;
			font-size: 1rem;
			margin-right: 1rem;
		}
		i:nth-child(2n+1) {
			padding-right: 1rem;
		}
	}
</style>