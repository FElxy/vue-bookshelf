<template>
	<div class="wrap">
		<div class="note">
			<div class="cnt">
				<p>满地都是六便士，他却抬头看见了月亮</p>
			</div>
			<div class="info">
				<div class="box-left">
					<img class="avatar" :src="avatar" alt="">
					<div class="reader">
						<p>name</p>
						<p>来自《月亮与六便士》</p>
					</div>
				</div>
				<div class="box-right">969次Up</div>
			</div>
		</div>
	</div>
</template>
<script>
	import logo from '@/assets/logo.png'
	export default {
		data(){
			return {
				avatar: logo
			}
		},
		methods: {
			moveCard(){
				
			}
		}
	}
</script>
<style lang="less" scoped>
	.wrap {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.note {
		width: 6.7rem;
		margin-top: -.96rem;
		padding: .3rem;
		border-radius: 3px;
		box-shadow: 0 0 5px 0 #ddd;
		.cnt {
			height: 8.8rem;
			display: flex;
			align-items: center;
		}
		.info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 1.5rem;
			.avatar {
				width: .7rem;
				height: .7rem;
				border-radius: 50%;
				border: 1px solid #ccc;
			}
			.box-left {
				display: flex;
				justify-content: flex-start;
				text-align: left;
			}
			.reader {
				margin-left: .2rem;

			}
		}
	}
</style>