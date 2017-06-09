<template>
	<div>
		<header-title heading="搜索"></header-title>
		<div class="search-box">
			<input type="text" placeholder="搜索书名或作者" v-model="formData.q" @keyup.enter="fetchSearchBook(true)">
		</div>
		<div class="search-wrap">
			<!-- <div>搜索你想要添加到书架里的书籍</div> -->
			<ul class="search-list">
				<li v-for="book in bookList" @click="goDetail(book.id, book)">
					<div class="bookface">
						<img :src="book.image" :alt="book.title">
					</div>
					<div class="bookinfo">
						<h2>{{book.title}}</h2>
						<p>{{book.summary}}</p>
						<a href="javascript:;" @click.stop="addToShelf(book)">{{isOnShelf(book) ? '已在书架': '放入书架'}}</a>
					</div>
				</li>
			</ul>
			<p v-show="isMoreData">没有更多了</p>
			<p v-show="isLoading">加载中</p>
		</div>
	</div>
</template>
<script>
	import HeaderTitle from '@/components/Header.vue'
	import { mapActions, mapState, mapMutations } from 'vuex'
	import Route from '@/router/index'
	import * as util from '@/util/util'

	export default {
		data(){
			return {
				formData: {
					q: ''
				}

			}
		},
		mounted(){
			window.addEventListener('scroll', util.throttle(this.pageScroll, 200))

		},
		computed: {
			...mapState({
				bookList: state => state.searchList,
				books: state => state.books,
				start: state => state.currentPage,
				pageSize: state => state.pageSize,
				isMoreData: state => state.isMoreData,
				isLoading: state => state.isLoading
			})
			
		},
		methods: {
			...mapActions({
				searchBook: 'searchBook'
			}),
			...mapMutations({
				addBook: 'ADD_BOOK',
				setBookDetail: 'SET_BOOK_DETAIL'
			}),
			isOnShelf(book){

				return this.books.indexOf(book) !== -1
				 
			},
			fetchSearchBook(isReset){

				if (isReset) {
					this.formData.start = 0
				}else{
					this.formData.start = this.currentPage++
				}
				this.formData.count = this.pageSize

				this.searchBook({form: this.formData, isReset: isReset})
			},
			goDetail(id, book){
				if (id) {
					this.setBookDetail(book)
					Route.push({name: 'detail', params: { id: id }})
				}
			},
			addToShelf(book){
				if(this.isOnShelf(book)){
					return false
				}else{
					this.addBook(book)
				}
			},
			pageScroll(){
				let body = document.querySelector('body')
				let scrollTop = body.scrollTop,
					clientHeight = document.documentElement.clientHeight,
					scrollHeight = document.documentElement.scrollHeight

				if (scrollHeight - clientHeight - scrollTop < 50) {
					this.fetchSearchBook(false)
				}


			}
		},
		components: {
			HeaderTitle
		}
	}
</script>
<style lang="less" scoped>
	.search-box {
		padding: .15rem .2rem .25rem;
		background: #f5f5fa;
		input {
			width: 100%;
			height: .45rem;
			border: none;
			border-radius: 4px;
			padding-left: .5rem;
			background: #fff;

		}
	}
	.search-wrap {
		.search-list {
			margin-bottom: 1rem;
			li {
				display: flex;
				justify-content: flex-start;
				padding: .28rem .4rem;
				border-bottom: 1px solid #ddd;
				&:last-child {
					border-bottom: none;
				}
			}
			.bookface {
				flex: none;
				width: 1.4rem;
				height: 2rem;
				margin-right: .4rem;
				overflow: hidden;
				box-shadow: 0 0 5px 0 #000;
				img {
					width: 100%;
				}
			}
			.bookinfo {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				text-align: left;
				h2 {
					font-size: .3rem;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				p {
					font-size: .24rem;
					overflow : hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				a {
					width: 1.6rem;
					margin-top: .3rem;
					padding: .18rem 0 .15rem;
					border: 1px solid #333;
					border-radius: 8px;
					font-size: .24rem;
					text-align: center;
				}
			}
		}
	}
</style>