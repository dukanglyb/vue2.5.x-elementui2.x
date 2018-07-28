<template>
	<el-menu router :default-active="$route.path" class="my-menu" :unique-opened="true" :collapse="asideFolded" background-color="#1c2b36" text-color="#fff">
      <template v-for="(item,mIndex) in menuList">
        <el-menu-item v-if="!item.noDropdown && item.children.length === 0" :index="item.path">
          <i class="fas" :class="item.icon"></i>
          <span slot="title" v-text="item.name"></span>
        </el-menu-item>
        <el-submenu v-if="item.noDropdown" :index="item.id">
          <template slot="title">
            <i class="fas" :class="item.icon"></i>
            <span v-text="item.name"></span>
          </template>
          <template v-for="(c,cIndex) in item.children">
            <el-menu-item v-if="c.children.length === 0 && c.isEnabled" :index="c.path" v-text="c.name"></el-menu-item>
            <el-submenu v-if="c.children.length>0" :index="c.id">
              <template slot="title">
                <span slot="title" v-text="c.name"></span>
              </template>
              <el-menu-item v-for="(t,tIndex) in c.children" v-if="t.isEnabled" :key="tIndex" :index="t.path">
                <span slot="title" v-text="t.name"></span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
  </el-menu>
</template>

<script>
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    created() {},
    computed: {
      ...mapGetters([
        'menuList',
        'asideFolded'
      ])
    },
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '~assets/styles/variable.less';
  //影响hover展示子菜单，需要展示子菜单删除overflow-x: hidden; overflow-y: scroll;
  .my-menu{
    height: 100%;
    border: 0;
    border-radius: 0;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
    }
    &:not(.el-menu--collapse) {
      width: @menu-width;
      overflow-y: scroll;
    }
  }
</style>