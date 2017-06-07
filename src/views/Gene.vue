<template>
	<div class="wrap" v-bind:style="{ background: bgColor }">
		<header class="wrap-hd">
			<div class="avator"></div>
			<p>阅读基因</p>
		</header>
		<section class="wrap-bd">
			<card></card>
		</section>
	</div>
</template>
<script>
	import card from '@/components/Card.vue'
	export default {
		data(){
			return {
				bgColor: '#eee',
				colors: ['#deeff8','#def0ea','#ecebeb','#edeaf6','#faf4e4','#faeceb','#fb5a3d','#fb8e3d'],
				dots:['#ff7000','#ffa633','#ffc466','#ffd899']
			}
		},
		components: {
			card
		}
	}
</script>
<style lang="less" scoped>
	.wrap {
		height: 100%;
		background: #fff;
	}
	.wrap-hd {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 2.3rem;
	}
	.wrap-bd {
		display: flex;
		justify-content: center;
	}
</style>