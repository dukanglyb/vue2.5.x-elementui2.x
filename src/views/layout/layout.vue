<template>
	<div class="layout">
		<my-header></my-header>
		<div class="content">
			<my-menu></my-menu>
			<div class="app-content">
				<bread-crumb><i class="fas fa-home"></i></bread-crumb>
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
  	import {mapGetters,mapMutations,mapActions} from 'vuex'
	import MyHeader from 'components/layout/MyHeader'
	import MyMenu from 'components/layout/MyMenu'
	import BreadCrumb from 'components/layout/BreadCrumb'

	import adminMenu from 'menus/adminMenu'
	export default {
		data(){
			return {}
		},
	    created() {
	      this.setMenuList(adminMenu);
	    },
	    computed: {
	      ...mapGetters([
	        'asideFolded'
	      ])
	    },
	    methods: {
	    	...mapActions([
	    	    'setMenuList'
	    	]),
	    },
		components:{
			MyHeader,
			MyMenu,
			BreadCrumb
		}
	}
</script>

<style lang="less">
	@import '~assets/styles/variable.less';
	  	.layout{
			height: 100%;
			padding-top: @header-height;
	        box-sizing: border-box;
			.content {
				display: flex;
				height: 100%;
				.app-content{
					flex:1;
					position: relative;
					height: 100%;
					background-color: @content-background;
					overflow-y: scroll;
					&::-webkit-scrollbar {
					  display: none;
					}
					> div:nth-child(2){
						padding-top: @bread-crumb-height;
					}
				}
			}
	  	}
</style>