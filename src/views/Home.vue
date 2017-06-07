<template>
	<div class="h100">
		<router-view></router-view>

		<nav-footer>
			<template slot="list">
				<router-link to="/shelf">
					<div>ico</div>
					<div>书架</div>
				</router-link>
				<router-link to="/cards">
					<div>ico</div>
					<div>卡片</div>
				</router-link>
				<router-link to="/gene">
					<div>ico</div>
					<div>基因</div>
				</router-link>
			</template>
		</nav-footer>
	</div>
</template>
<script>
	import NavFooter from '@/components/NavFooter.vue'
	export default {
		components: {
			NavFooter
		}
	}
</script>
