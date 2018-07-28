<template>
	<div class="app-header box-shadow" :class="{'header-fold':asideFolded}">
		<div class="header-left">
			<span class="fab fa-html5 fa-1x"></span>
			<span v-show="!asideFolded" v-text="appName"></span>
		</div>
		<div class="header-right clearfix">
			<div class="left">
				<dl @click="_setAsideFolded">
					<dd><span class="fas" :class="{'fa-outdent':!asideFolded,'fa-indent':asideFolded}"></span></dd>
				</dl>
			</div>
			<div class="right">
				<dl>
					<dd><span>当前用户:</span><span v-text="userInfo.accName"></span></dd>
					<dd class="icon-bell"><span class="fas fa-bell"></span></dd>
					<dd>修改密码</dd>
					<dd @click="signOut">
						<span class="fas fa-sign-out-alt"></span>
						<span>退出</span>
					</dd>
				</dl>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters,mapMutations,mapActions} from 'vuex'
	import * as utils from 'utils/comm'
	export default {
		data() {
			return {
				appName:'',
				userInfo:{
					accName:'Admin'
				}
			}
		},
		created(){
			this.appName = utils.appName;
		},
	    computed: {
	      ...mapGetters([
	        'asideFolded'
	      ])
	    },
		methods: {
			...mapActions([
				'setAsideFolded'
			]),
			_setAsideFolded(){
				this.setAsideFolded(!this.asideFolded);
			},
			signOut(){
				this.$router.push({path: '/'})
			}
		},
		components: {},
		watch:{}
	}
</script>

<style lang="less" rel="stylesheet/less">
	@import '~assets/styles/variable.less';
	.app-header{
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 10;
		background-color: @header-background;
		height: @header-height;
		line-height: @header-height;
		.header-left{
			flex:0 0 @menu-width;
			background-color: @header-left-background;
			color:@header-text-color;
			text-align: center;
			cursor: pointer;
		}
		.header-right{
			flex:1;
			padding: 0 15px;
			color:@header-text-color;
			height: 100%;
			.left,.right{
				display: inline-block;
			}
			.left{
				dl{
					dd{
						display: inline-block;
						cursor: pointer;
					}
				}
			}
			.right{
				float:right;
				text-align: right;
				dl{
					dd{
						display: inline-block;
						cursor: pointer;
						padding: 0 15px;
					}
				}
			}

		}
	}
</style>
