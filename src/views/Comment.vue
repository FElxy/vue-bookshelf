<template>
	<div>
		<header-title></header-title>
		<div class="editor">
			<textarea rows="10" placeholder="这里将记录你看书的想法"></textarea>
			<div class="upload">
				<input type="file">
			</div>
		</div>
		<a href="javascript:;" class="btn-smt">发布</a>
	</div>
</template>
<script>
	import HeaderTitle from '@/components/Header.vue'
	export default {
		components: {
			HeaderTitle
		}
	}
</script>
<style lang="less">
	.editor {
		min-height: 50vh;
		padding: .4rem;
		textarea {
			width: 100%;

		}
	}
	.upload {
		width: 2.6rem;
		height: 2.6rem;
		border: 2px dashed #ddd;
		background: #f6f8fb;
		input {
			display: block;
			width: 100%;
			height: 100%;
			opacity: 0;
		}
	}
	.btn-smt {
		display: block;
		width: 90%;
		margin: 0 auto;
		padding: .24rem;
		border-radius: 5px;
		text-align: center;
		font-size: .36rem;
		background: #ef9e89;
		color: #fff;
	}
</style>