<template>
	<div>
		<header-title></header-title>
		<div class="detail">
			<article class="book">
				<figure class="bookface"><img :src="bookface" alt=""></figure>
				<section class="bookinfo">
					<h3 class="title">JavaScript权威指南</h3>
					<h5 class="author">David</h5>
					<p class="intro">JavaScript权威指南JavaScript权威指南JavaScript权威指南JavaScript权威指南JavaScript权威指南JavaScript权威指南JavaScript权威指南JavaScript权威指南</p>
					<p class="score"><span>8.7</span>分</p>
				</section>
			</article>
		</div>
		<div class="tabs">
			<div class="tab-hd">
				<a class="tab active" href="javascript:;">卡片</a>
				<a class="tab" href="javascript:;">卡片</a>
			</div>
			<div class="tab-cnt">content</div>
		</div>
		<div class="nav-btm">
			<a href="javascript:;">从书架中删除</a>
			<a href="javascript:;">写读书卡片</a>
		</div>
	</div>
</template>
<script>
	import logo from '@/assets/logo.png'
	import HeaderTitle from '@/components/Header.vue'
	export default {
		data(){
			return {
				bookface: logo
			}
		},
		components: {
			HeaderTitle
		}
	}
</script>
<style lang="less" scoped>
	@activeColor: #e84817;

	.detail {
		padding: .4rem;
		.book {
			display: flex;
			justify-content: flex-start;
		}
		.bookface {
			flex: none;
			width: 2rem;
			height: 2.8rem;
			margin-right: .5rem;
			box-shadow: 0 0 5px 0 #ccc;
			img {
				width: 100%;
			}
		}
		.bookinfo {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			text-align: left;
			.title {
				line-height: .66rem;
				font-size: .38rem;
			}
			.author {
				line-height: .5rem;
				font-size: .22rem;
			}
			.intro {
				line-height: .4rem;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				color: #999;
				font-size: .22rem;
			}
			.score {
				color: #999;
				font-size: .22rem;
				span {
					color: #000;
					font-size: .28rem;
					font-weight: bold;
				}
			}
		}
	}
	.tabs {
		.tab-hd {
			display: flex;
			justify-content: space-around;
			padding: 0 .2rem;
			font-size: .28rem;
			.tab {
				min-width: .7rem;
				padding: .2rem;
				border-bottom: 3px solid transparent;
				&.active {
					color: @activeColor;
					border-bottom-color: @activeColor;
				}
			}
		}
		.tab-cnt {
			min-height: 7.2rem;
			marign-bottom: 1rem;
			background: #f5f5fa;
			color: #ccc;
		}
	}
	.nav-btm {
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1rem;
		padding: .15rem;
		border-top: 1px solid #e5e5e5;
		background: #fff;
		a {
			width: 50%;
			height: 100%;
			line-height: .7rem;
			&:first-child {
				border-right: 1px solid #e5e5e5;
			}
		}
	}
</style>