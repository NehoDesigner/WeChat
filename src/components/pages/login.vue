<template>
	<div id="login">
		<div class="header">
			<x-header :left-options="{showBack: true}">使用手机号登陆</x-header>
		</div>
		<div class="container"></div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		components:{
			XHeader
		}
	}
</script>

<style>
</style>