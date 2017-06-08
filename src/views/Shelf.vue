<template>
	<div>
		<header class="header">
			<div><em>{{booksSum}}</em>本</div>
			<div class="btn btn-add" @click="addNewBook"></div>
		</header>
		<section class="content">
			<ul class="book-list">
				<li v-for="book in books">
					<a href="javascript:;" @click="goDetail(book.id, book)">
						<div class="bookface">
							<img :src="book.image" alt="">
						</div>
						<caption>{{book.title}}</caption>
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import Route from '@/router/index'
	import { mapMutations, mapState } from 'vuex'
	export default {
		data(){
			return {

			}
		},
		computed: {
			...mapState({
				books: state => state.books
			}),
			booksSum(){
				return this.books.length || 0
			}
		},
		methods: {
			...mapMutations({
				setBookDetail: 'SET_BOOK_DETAIL'
			}),
			goDetail(id, book){
				if (id) {
					this.setBookDetail(book)
					Route.push({name: 'detail', params: { id: id }})
				}
			},
			addNewBook(){
				Route.push({name: 'search'})
			}
		}
	}
</script>
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
		margin-bottom: 1rem;
		.book-list {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			li {
				width: 33.3%;
				min-width: 1.4rem;
				padding: .48rem;
				.bookface {
					width: 1.4rem;
					height: 2rem;				
					overflow: hidden;
					box-shadow: 0 0 5px 0 #000;
				}
				img {
					width: 100%;
					box-shadow: 0 0 3px #333;
				}
				caption {
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					font-size: .24rem;
					margin-top: .2rem;
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