<template>
	<div class="wrap" v-bind:style="{ background: bgColor }">
		<header class="wrap-hd">
			<div class="avator"></div>
			<p>阅读基因</p>
		</header>
		<section class="wrap-bd">
			<swiper :options="swiperOption" ref="mySwiper" class="swipe-wrap">
			    <!-- slides -->
			    <swiper-slide class="swipe-item" v-for="item in swiperData" :key="item">
			    	<card :tt="item.tt" :desc="item.desc">
			    		<template slot="refer" v-if="item.refer">
							{{item.refer}}
			    		</template>
			    	</card>
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			  </swiper>
		</section>
	</div>
</template>
<script>
	import card from '@/components/Card.vue'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import { mapState } from 'vuex'
	export default {
		data(){
			return {
				bgColor: '#deeff8',
				colors: ['#deeff8','#def0ea','#ecebeb','#edeaf6','#faeceb','#faf4e4','#fb5a3d','#fb8e3d'],
				dots:['#ff7000','#ffa633','#ffc466','#ffd899'],
				posi:{
					left:0
				},
				swiperOption: {
		          autoplay: 0,
		          direction : 'horizontal',
		          grabCursor : true,
		          setWrapperSize :true,
		          autoHeight: false,
		          pagination : '.swiper-pagination',
		          paginationClickable :false,
		          mousewheelControl : false,
		          observeParents:true,
		          onSlideChangeEnd: this.slideChangeEnd
		        },
		        swiperData: [
		        	{
		        		tt: '阅读基因',
		        		desc: 'You Are What You Read',
		        		refer: '',
		        		bd: []
		        	},{
		        		tt: '新鲜指数',
		        		desc: '读的是小鲜肉还是老八股',
		        		refer: '——根据出版年份统计——',
		        		bd: []
		        	},{
		        		tt: '阅读品味',
		        		desc: '阅读品味比得上颜值吗？',
		        		refer: '——参考豆瓣评分统计——',
		        		bd: []
		        	},{
		        		tt: '啃书字数',
		        		desc: '吃的米多还是啃得字多',
		        		refer: '——根据页数统计——',
		        		bd: []
		        	},{
		        		tt: '专一程度',
		        		desc: '你最钟情的作者和出版社',
		        		refer: '',
		        		bd: []
		        	},{
		        		tt: '土豪指数',
		        		desc: '藏书总价能卖几平米房子',
		        		refer: '——根据定价统计——',
		        		bd: []
		        	}
		        ],
		        publisher: {
		        	pub:'',
		        	author: ''
		        },
		        category:{

		        }
			}
		},
		mounted(){
			this.statistic()
		},
		computed: {
			...mapState({
				books: state => state.books
			})
		},
		methods: {
			slideChangeEnd(){
				// console.log(this.$refs.mySwiper)
				this.bgColor = this.colors[this.$refs.mySwiper.swiper.activeIndex] || '#eee'
			},
			statistic(){
				// 页码， 价格， 出版社， 标签， 评分，出版日期
				// publisher "机械工业出版社",
				// price "109.00元"
				// "pages": "954",
				// "rating""average": "8.9",
				// "pubdate": "2007-8",
				// "tags" []
				let keys = ['publisher', 'price', 'pages', 'rating', 'pubdate', 'tags', 'author']
				if (!Array.isArray(this.books)) {return}
				let statics = this.books.reduce((acc, item)=>{
					for (let i = 0; i < keys.length; i++) {
						let key = keys[i]
						if (acc[key]) {
							acc[key].push(item[key])
						}else{
							acc[key] = []
						}
					}

					return acc
				},{})

				console.log(statics)
				console.log(this.getMost(statics.author, 2))
				this.publisher.pub = this.getMost(statics.publisher, 2)
				this.publisher.author = this.getMost(statics.author, 2)

				this.category.price = this.classifyNumber(statics.price, [20, 35, 40])
				this.category.pages = this.classifyNumber(statics.pages, [100, 200, 300, 400])
				this.category.rating = this.classifyNumber(statics.rating, [5.5, 7.0, 8.5])

				console.log(this.classifyNumber(statics.pages, [100, 600, 800]))
			},
			getMost(arr, num){
				if (!Array.isArray(arr)) {return}
				let most = parseInt(num) || 1
				let sorted = [], obj;

				obj = arr.reduce((acc, item)=>{
					if (item in acc) {
						acc[item]++
					}else{
						acc[item] = 1
					}

					return acc
				},{})
				for(let o in obj){
					sorted.push({
						key: o,
						val: obj[o]
					})
				}
				sorted.sort((a,b)=>{
					return b.val - a.val
				})
				return sorted.splice(0, num)
			},
			classifyNumber(arr, sep){
				if (!Array.isArray(arr) || !Array.isArray(sep)) {return}
				let len = sep.length;
				let sorted = new Array(len+1).fill(0)
				console.log(arr)
				console.log(sep)
				console.log(sep[len-1])
				arr.forEach((item)=>{
					if (parseFloat(item) > sep[len-1]) {
						sorted[len]++
					}else{

						for(let i = 0; i < len; i++){

							if (sep[i] >= parseFloat(item)) {
								sorted[i]++
								break
							}
						}
					}
				})

				return sorted
			}
		},
		components: {
			card,
			swiper,
    		swiperSlide
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
		width: 100vw;
		// overflow: hidden;
	}
	.swipe-wrap {
		height: 9rem;
		// display: flex;
		// width: 600vw;
		// transform: translate(-150vh,0);
		.swipe-item {
			width: 100vw;
			display: flex;
			justify-content: center;

		}
	}
</style>