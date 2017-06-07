<template>
	<div>
		<header class="header">
			<div><em>2</em>本</div>
			<div class="btn btn-add"></div>
		</header>
		<section class="content">
			<ul class="book-list">
				<li>
					<a href="javascript:;">
						<img src="https://img3.doubanio.com\/mpic\/s1001902.jpg" alt="">
						<caption>book name</caption>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="https://img3.doubanio.com\/mpic\/s1001902.jpg" alt="">
						<caption>book name</caption>
					</a>
				</li>
				<li>
					<a href="javascript:;">
						<img src="https://img3.doubanio.com\/mpic\/s1001902.jpg" alt="">
						<caption>book name</caption>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>
<style lang="less">
	@btn-black: #353535;
	.header {
		height: 1.8rem;
		line-height: 1rem;
		background: #f8f8f8;
		display: flex;
		justify-content: space-between;
		padding: .4rem;
		em {
			font-size: .54rem;
			margin-right: .1rem;
		}
	}
	.content {
		.book-list {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			li {
				width: 33.3%;
				padding: .48rem;
				// background: #333;
				img {
					width: 100%;
					box-shadow: 0 0 3px #333;
				}
			}
		}
	}

	.btn {
	  display: inline-block;
	  width: .8rem;
	  height: .8rem;
	  position: relative;
	  border-radius: 100%;
	  border: 1px solid @btn-black;
	}
	.btn::before, .btn::after {
	  content: "";
	  display: block;
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  background: @btn-black;
	}

	.btn-add::before {
	  width: 50%;
	  height: 1px;
	  transform: translate(-50%, 0);
	}

	.btn-add::after {
	  width: 50%;
	  height: 1px;
	  transform: translate(-50%, 0) rotate(90deg);
	}
</style>