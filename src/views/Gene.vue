<template>
	<div class="wrap" v-bind:style="{ background: bgColor }">
		<header class="wrap-hd">
			<div class="avator"></div>
			<p>阅读基因</p>
		</header>
		<section class="wrap-bd">
			<swiper :options="swiperOption" ref="mySwiper" class="swipe-wrap">
			    <!-- slides -->
			    <swiper-slide class="swipe-item" v-for="(item, index) in swiperData" :key="item">
			    	<card :tt="item.tt" :desc="item.desc" :ico="item.ico">
			    		<template slot="cnt">
			    			<ul class="pill list-wrap" v-if="index == 0">
			    				<li>程序设计</li>
			    			</ul>
			    			<ul class="lst list-wrap" v-if="index == 1">
			    				<li>
			    					<span>2017</span>
			    					<span></span>
			    					<span>0本</span>
			    				</li>
			    			</ul>
			    			<div v-if="index==4">
			    				<dl class="lst list-wrap">
			    					<dt>最爱出版社</dt>
			    					<dd v-for="lst in publisher.pub">
			    						<span>{{lst.left}}</span>
			    						<span></span>
			    						<span>{{lst.right}}本</span>
			    					</dd>
			    				</dl>
			    				<dl class="lst list-wrap">
			    					<dt>最爱作者</dt>
			    					<dd v-for="lst in publisher.author">
			    						<span>{{lst.left}}</span>
			    						<span></span>
			    						<span>{{lst.right}}本</span>
			    					</dd>
			    				</dl>
			    			</div>
			    			<ul class="lst list-wrap" v-else>
			    				<li v-for="lst in getCardCnt(index)">
			    					<span>{{lst.left}}</span>
			    					<span></span>
			    					<span>{{lst.right}}</span>
			    				</li>
			    			</ul>
			    		</template>
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
		        		ico: '&#xe653;',
		        		tt: '阅读基因',
		        		desc: 'You Are What You Read',
		        		refer: '',
		        		bd: []
		        	},{
		        		ico: '&#xe653;',
		        		tt: '新鲜指数',
		        		desc: '读的是小鲜肉还是老八股',
		        		refer: '——根据出版年份统计——',
		        		bd: []
		        	},{
		        		ico: '&#xe653;',
		        		tt: '阅读品味',
		        		desc: '阅读品味比得上颜值吗？',
		        		refer: '——参考豆瓣评分统计——',
		        		bd: []
		        	},{
		        		ico: '&#xe653;',
		        		tt: '啃书字数',
		        		desc: '吃的米多还是啃得字多',
		        		refer: '——根据页数统计——',
		        		bd: []
		        	},{
		        		ico: '&#xe653;',
		        		tt: '专一程度',
		        		desc: '你最钟情的作者和出版社',
		        		refer: '',
		        		bd: []
		        	},{
		        		ico: '&#xe653;',
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

		        },
		        sections: {
		        	price: [20, 35, 40],
		        	pages: [100, 200, 300, 400],
		        	rating: [5.5, 7.0, 8.5]
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

				// console.log(statics)
				// console.log(this.getMost(statics.author, 2))
				this.publisher.pub = this.getMost(statics.publisher, 2)
				this.publisher.author = this.getMost(statics.author, 2)

				let sections = this.sections

				this.category.price = this.constructObj(sections.price, this.classifyNumber(statics.price, sections.price), '元')
				this.category.pages = this.constructObj(sections.pages, this.classifyNumber(statics.pages, sections.pages), '页')
				this.category.rating = this.constructObj(sections.rating, this.classifyNumber(statics.rating.map(item=>item.average), sections.rating))
				console.log(this.category)
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
						left: o,
						right: obj[o]
					})
				}
				sorted.sort((a,b)=>{
					return b.right - a.right
				})
				return sorted.splice(0, num)
			},
			classifyNumber(arr, sep){
				if (!Array.isArray(arr) || !Array.isArray(sep)) {return}
				let len = sep.length;
				let sorted = new Array(len+1).fill(0)
				// console.log(arr)
				// console.log(sep)
				// console.log(sep[len-1])
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
			},
			constructObj(keyArr, valArr, unit){
				let uni = unit ? unit : ''
				if (keyArr.length + 1 !== valArr.length) {return}
				let obj = {}, arr = []
				for(let i=0; i<valArr.length; i++){
					if (i==0) {
						obj.left = `${keyArr[i]}${uni}以下`
					}else if(i==valArr.length-1){
						obj.left = `${keyArr[i-1]}${uni}以上`
					}else{
						obj.left = `${keyArr[i-1]}-${keyArr[i]}${uni}`
					}
					obj.right = `${valArr[i]}本`

					arr.push(obj)
					obj = {}
				}
				return arr
			},
			getCardCnt(index){
				switch(index){
					case 0: ;break;
					case 1: ;break;
					case 2: 
						return this.category.rating;
					case 3: 
						return this.category.pages;
					case 4: ;break;
					case 5: 
						return this.category.price;
					default:;
				}
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