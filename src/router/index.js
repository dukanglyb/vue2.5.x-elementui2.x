import Cookies from 'js-cookie'
import Vue from 'vue'
import Router from 'vue-router'
import store from 'store'
import adminMenu from 'menus/adminMenu'
import * as utils from 'utils/comm'

Vue.use(Router)

// window.onbeforeunload = onbeforeunload_handler;
//    function onbeforeunload_handler(){
//        var warning="确认退出1111111?";
//        console.log(11111111111111111)
//        return warning;
// }
const err401 = () => import(/*webpackChunkName: "err401"*/'components/errorpages/401')

const err404 = () => import(/*webpackChunkName: "err401"*/'components/errorpages/404')

const index = () => import(/* webpackChunkName: "index" */ 'views/index/index')

const layout = () => import(/* webpackChunkName: "layout" */ 'views/layout/layout')

const dashboard = () => import(/* webpackChunkName: "dashboard" */ 'views/dashboard/dashboard')

const buttons = () => import(/*webpackChunkName: "buttons"*/'views/basemodule/buttons')

const icons = () => import(/*webpackChunkName: "icons"*/'views/basemodule/icons')

const tabs = () => import(/*webpackChunkName: "tabs"*/'views/basemodule/tabs')

const tree = () => import(/*webpackChunkName: "tree"*/'views/basemodule/tree')

const input = () => import(/*webpackChunkName: "input"*/'views/forms/input')

const select = () => import(/*webpackChunkName: "select"*/'views/forms/select')

const transfer = () => import(/*webpackChunkName: "transfer"*/'views/forms/transfer')

const table = () => import(/*webpackChunkName: "table"*/'views/datas/table')

const router = new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: '首页',
        component: index
    },
    {
      path:'/layout',
      name:'layout',
      component:layout
    },
    {
      path: '/dashboard',
      component: layout,
      children: [{name:'仪表盘', path: '/dashboard/dashboard', component: dashboard,alias:'/dashboard'}]
    },
    {
      path: '/buttons',
      name:'Button按钮',
      component: layout,
      children: [
          {name:'按钮', path: '/buttons/buttons', component: buttons,alias:'/buttons'},
          {name:'Icon图标', path: '/buttons/icons', component: icons,alias:'/icons'},
          {name:'Tabs页签', path: '/buttons/tabs', component: tabs,alias:'/tabs'},
          {name:'Tree控件', path: '/buttons/tree', component: tree,alias:'/tree'}
        ]
    },
    {
      path: '/forms',
      name:'Form组件',
      component: layout,
      children: [
          {name:'Input 输入框', path: '/forms/input', component: input,alias:'/input'},
          {name:'Select 选择框', path: '/forms/select', component: select,alias:'/select'},
          {name:'Transfer 穿梭框', path: '/forms/transfer', component: transfer,alias:'/transfer'}
        ]
    },
    {
      path: '/datas',
      name:'Data',
      component: layout,
      children: [
          {name:'Table 表格', path: '/datas/table', component: table,alias:'/table'}
        ]
    },
    {
      path: '/errors',
      name:'Errors',
      component: layout,
      children: [
          {name:'401错误页', path: '/errors/401', component: err401,alias:'/401'},
          {name:'404错误页', path: '/errors/404', component: err404,alias:'/404'}
        ]
    },
    {name:'404错误页8', path: '*', component: err404,alias:'/404'}
  ]
})

router.beforeEach((to, from, next) => {
  let breadCrumbArray = [], bcObj = new Object();
  let bcLists = utils.checkMenuToBreadCrumb(adminMenu,to.path,breadCrumbArray,bcObj);
  store.commit('SET_BREADCRUMB_LIST', bcLists.breadCrumbList);
  let checkMenu = bcLists.breadCrumbList.slice(bcLists.breadCrumbList.length-1,bcLists.breadCrumbList.length)[0];

  if(checkMenu !== undefined){
    store.commit('ADD_TABS_VIEWS',checkMenu);
    store.commit('TAB_ACTIVE_NAME',checkMenu.path)
  }else{
    store.commit('TABS_VIEWS',[]);
    store.commit('TAB_ACTIVE_NAME','')
  }
  let role = localStorage.getItem('role');
  let urole = to.meta && to.meta.role;
  if(role && role === urole || to.path === '/login' || !urole){
    next()
  }else{
    alert("没有权限")
    next(false)
  }
})

export default router
