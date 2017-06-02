<template>
	<div id="setting">
		<div class="header">
			<x-header :left-options="{showBack: true}">设置</x-header>
		</div>
		<div class="container">
			<group>
				<cell title="隐私"></cell>
				<cell title="通用"></cell>
				<cell title="账号与安全" disabled></cell>
			</group>
			<group>
				<cell title="注销" @click.native="logout()"></cell>
			</group>
		</div>
	</div>
</template>

<script>
	import { Group, Cell, XHeader } from 'vux'
	export default {
		components: {
			Group,
			Cell,
			XHeader
		},
		methods: {
			logout: function() {
				const _self = this
				this.$vux.confirm.show({
					title: '提示',
					content: '注销会清空当前用户的聊天记录',
					onCancel() {
						//
					},
					onConfirm() {
						ROOT_APP.logout();
					}
				})
			}
		}
	}
</script>

<style>

</style>