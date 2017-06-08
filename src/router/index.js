import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
      	name: 'shelf',
      	path: 'shelf',
      	component: resolve => require(['@/views/Shelf.vue'], resolve)
      },{
      	name: 'cards',
      	path: 'cards',
      	component: resolve => require(['@/views/Cards.vue'], resolve)
      },{
      	name: 'gene',
      	path: 'gene',
      	component: resolve => require(['@/views/Gene.vue'], resolve)
      }]
    },{
    	name: 'detail',
    	path: '/detail/:id',
    	component: resolve => require(['@/views/Detail.vue'], resolve)
    },{
    	name: 'comment',
    	path: '/comment',
    	component: resolve => require(['@/views/Comment.vue'], resolve)
    },{
    	name: 'search',
    	path: '/search',
    	component: resolve => require(['@/views/Search.vue'], resolve)
    }
  ]
})


router.beforeEach((to, from, next) => {

	if (to.path == '/') {
		next({ path: '/shelf'})
	} else {
        next()
    }	

})


export default router