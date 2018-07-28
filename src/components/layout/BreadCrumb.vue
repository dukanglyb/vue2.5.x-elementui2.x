<template>
  <div class="breadcrumb">
    <slot></slot>
    <span v-for="(m, index) in breadCrumbList">
      <a class="breadcrumb-z" href="javascript:void(0)" v-if="(breadCrumbList.length - 1) !== index">{{m.name}} </a>
      <span v-else class="breadcrumb-c">{{m.name}}</span>
      <span v-if="(breadCrumbList.length - 1) !== index" style="color:#999;">&nbsp;&nbsp;>&nbsp;&nbsp;</span>
    </span>
  </div>
</template>

<script type="text/javascript">
  import {mapGetters, mapMutations} from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters([
        'breadCrumbList'
      ])
    },
    mounted() {

    },
    methods: {
      breadcrumbEvent(m, index){
        if(index === 0) return;
        let _self = this;
        _self.breadCrumbList.splice(index + 1,_self.breadCrumbList.length + 1 - index);
      }
    },
    components: {
    },
    watch:{

    }
  }
</script>

<style lang="less">
  @import '~assets/styles/variable.less';
  .breadcrumb{
    padding:0 10px;
    position: fixed;
    width: 100%;
    height: @bread-crumb-height;
    line-height: @bread-crumb-height;
    background-color: @bread-crumb-background;
    .breadcrumb-z{
      color: #657180;
      font-size: 14px;
      font-weight: 700;
      &:hover{
        color: #5cadff;
      }
    }
    .breadcrumb-c{
      font-size: 14px;
      color: #657180;
      font-weight: 700;
    }
  }
</style>