<template>
	<div class="back">
		<span class="back-icon" @click="goBack"></span>
		<span class="title">{{heading}}</span>
	</div>
</template>
<script>
	export default {
		methods: {
			goBack(){
				window.history.go(-1)
			}
		},
		props: {
			heading: String
		}
	}
</script>
<style lang="less">
	.back-icon {
		display: block;
		width: .6rem;
		height: .6rem;
		&:before {
			content: "";
			display: block;
			width: .35rem;
			height: .35rem;
			border-top: 2px solid #000;
			border-left: 2px solid #000;
			transform: rotate(-45deg) translate(50%, 100%)
		}
	}
	.back {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 1px solid #ccc;
		.title {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 0);
			font-size: .36rem;
		}
	}
</style>