<template>
	<div id="explore">
		<div class='container'>
			<div class="explore-item">
				<div class="item-left">
					<i class="iconfont">&#xe639;</i>
				</div>
				<div class="item-right">
					<span>朋友圈</span>
				</div>
			</div>
			<div class="explore-item">
				<div class="item-inner">
					<div class="item-left">
						<i class="iconfont">&#xe60e;</i>
					</div>
					<div class="item-right">
						<span>附件的人</span>
					</div>
				</div>
				<div class="item-inner">
					<div class="item-left">
						<i class="iconfont">&#xe619;</i>
					</div>
					<div class="item-right">
						<span>购物</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang='less' scoped>
	.explore-item {
		margin-top: 1rem;
		background: white;
		padding: 0.5rem 1rem;
		overflow: hidden;
		.item-left {
			float: left;
			width: 10%;
			i {
				line-height: 30px;
				color: RGB(0, 162, 232);
				font-size: 1.5rem;
			}
		}
		.item-right {
			float: left;
			width: 90%;
			span {
				line-height: 30px;
				font-size: 1rem;
			}
		}
	}
	
	.item-inner {
		border-bottom: 1px solid RGBA(195, 195, 195, 0.4);
		overflow: hidden;
		margin-bottom: 0.5rem;
		padding-bottom: 0.5rem;
	}
	
	.item-inner:last-child {
		border: none;
		margin: 0px;
		padding: 0px;
	}
</style>