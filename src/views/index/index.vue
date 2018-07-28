<template>
    <div class="index">
      <header class="index-header">
        <div class="nav-wrapper">
          <div class="nav-logo" @click="_home">XX管理平台</div>
          <div class="nav-menus">
            <div class="nav-item">
              <input @click="miaodian('shouye')" ref="shouye" id="shouye" checked type="radio" name="nav">
              <label for="shouye">首页</label>
            </div>
            <div class="nav-item">
              <input @click="miaodian('doc')" id="doccenter" type="radio" name="nav">
              <label for="doccenter">文档中心</label>
            </div>
            <div class="nav-item">
              <input @click="miaodian('aboutus')" id="aboutus" type="radio" name="nav">
              <label for="aboutus">关于我们</label>
            </div>
          </div>
          <div class="nav-login">
            <el-button @click="_login">登录</el-button>
            <el-button @click="_register">注册</el-button>
          </div>
        </div>
      </header>
      <div ref="shouye_miaoshu" class="first-page">
	      <div class="jianjie">
	        <h2>产品概述</h2>
	        <p>产品描述产品描述产品描述产品描述产品描述产品描述产品描述</p>
	      </div>
	  </div>
      <article ref="cmdb_wenan" class="project-detail">
        <div class="detail-content">
          <div class="project-title tc">简介简介</div>
          <div class="project-des tc">简介简介简介简介简介简介简介简介简介简介简介简介简介简介</div>
          <div class="project-block">
            <div class="project-item">
              <div class="item-icon tc"><span class="fa fa-asl-interpreting"></span></div>
              <div class="item-leftcontent">
                <div class="item-title">易用性</div>
                <div class="item-des">易用性易用性易用性易用性易用性易用性易用性易用性易用性</div>
              </div>
            </div>
            <div class="project-item">
              <div class="item-icon tc"><span class="fa fa-cubes"></span></div>
              <div class="item-leftcontent">
                <div class="item-title">强安全</div>
                <div class="item-des">强安全强安全强安全强安全强安全强安全强安全</div>
              </div>
            </div>
          </div>
          <div class="project-block">
            <div class="project-item">
              <div class="item-icon tc"><span class="fa fa-life-saver"></span></div>
              <div class="item-leftcontent">
                <div class="item-title">低成本</div>
                <div class="item-des">低成本低成本低成本低成本低成本低成本低成本</div>
              </div>
            </div>
            <div class="project-item">
              <div class="item-icon tc"><span class="fa fa-gears"></span></div>
              <div class="item-leftcontent">
                <div class="item-title">高可靠</div>
                <div class="item-des">高可靠高可靠高可靠高可靠高可靠高可靠高可靠</div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article ref="aboutus_miaoshu" class="about-us">
        <div class="aboutus-content">
          <h2>关于我们</h2>
          <p>关于我们</p>
        </div>
      </article>
      <footer>
        <div class="version-heart">
          <div class="about-us-links">
            <div class="us-links">
              <div class="aboutus-yjfk">
                <div>联系我们</div>
                <div>加入我们</div>
              </div>
            </div>
            <div class="name-tel">
              <div class="name">北京XXXXXX科技有限公司</div>
              <div class="tel">TEL:010-0000000000</div>
            </div>
          </div>
          <div class="beian">All Rights Reserved 京ICP备xxxxxxxxxxxx号</div>
        </div>
      </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        computed: {},
        methods: {
          _home(){
            this.$refs.shouye.checked = true;
            this.$router.replace('/index');
            this.$refs['shouye_miaoshu'].scrollIntoView();
          },
          _login(){
            this.$router.push({path: 'dashboard'})
          },
          _register(){
            // this.$router.push({path: 'register'})
          },
          miaodian(key){
            if(key === 'shouye'){
              this.$refs['shouye_miaoshu'].scrollIntoView();
            }else if(key === 'doc'){
              this.$refs['cmdb_wenan'].scrollIntoView();
            }else if(key === 'aboutus'){
              this.$refs['aboutus_miaoshu'].scrollIntoView();
            }
          }
        },
        components: {}
    }
</script>

<style lang="less">
  @import '~assets/styles/variable.less';
</style>
