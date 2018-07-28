<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import '~assets/styles/variable.less';
  .app{
  	height: 100%;
    min-width: @bodyminwidth;
  }
</style>
