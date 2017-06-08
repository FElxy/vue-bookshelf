<template>
	<nav class="nav-bottom">
		<div class="nav-list">
			<slot name="list"></slot>
		</div>
	</nav>
</template>
<style lang="less">
	@activeColor: #e84417;
	.nav-bottom {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: .96rem;
		background: #fff;
		.nav-list {
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-top: 1px solid #b2b2b2;
			user-select: none;
		}
	}
</style>