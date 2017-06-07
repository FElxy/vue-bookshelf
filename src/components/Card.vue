<template>
	<div class="card">
		<div class="hd">333</div>
		<div class="bd"></div>
		<div class="ft">
			——根据页数统计——
		</div>
	</div>
</template>
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
		}
		.ft {
			position: absolute;
			bottom: .6rem;
			left: 0;
			width: 100%;
			text-align: center;
		}
	}
</style>