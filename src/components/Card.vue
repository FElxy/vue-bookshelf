<template>
	<div class="card">
		<div class="hd">
			<div class="ico">ico</div>
			<div class="heading">
				<h2>{{tt}}</h2>
				<p>{{desc}}</p>
			</div>
		</div>
		<div class="bd">
			<slot name="cnt">
					
				<ul class="lst">
					<li><span>8.0</span><span>-----------</span><span>1本</span></li>
					<li><span>8.0</span><span>-----------</span><span>1本</span></li>
					<li><span>8.0</span><span>-----------</span><span>1本</span></li>
					<li><span>8.0</span><span>-----------</span><span>1本</span></li>
				</ul>
			</slot>
		</div>
		<div class="ft">
			<slot name="refer"></slot>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			tt: String,
			desc: String,
			ico: String
		}
	}
</script>
<style lang="less" scoped>
	.card {
		width: 5.9rem;
		height: 7.2rem;
		padding: .6rem;
		border-radius: 3px;
		box-shadow: 0 0 5px 1px #ddd;
		position: relative;
		background: #fff;
		.hd {
			display: flex;
			justify-content: flex-start;
			position: relative;
			border-bottom: 2px solid #e3deda;
			&:after {
				content:'';
				display: block;
				width: 100%;
				height: 1px;
				position: absolute;
				bottom: -5px;
				background: #e3deda;
			}
			.ico {
				width: 1rem;
				height: 1rem;
			}
			.heading {
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				text-align: left;
				p {
					font-size: .24rem;
					color: #999;
				}
			}
		}
		.bd {
			.lst {
				margin-top: .4rem;
				li {
					display: flex;
					justify-content: space-between;
					line-height: .64rem;
				}
			}
		}
		.ft {
			position: absolute;
			bottom: .6rem;
			left: 0;
			width: 100%;
			text-align: center;
			font-size: .24rem;
			color: #ccc;
		}
	}
</style>