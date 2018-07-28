import * as types from './mutations-types'

const mutations={
	[types.ASIDE_FOLDED](state,asideFolded){
		state.asideFolded = asideFolded
	},
	[types.SET_MENU_ACTIVE](state,menuActive){
		state.menuActive=menuActive
	},
	[types.SET_MENU_OPEN_NAME_LIST](state,menuOpenNameList){
		state.menuOpenNameList=menuOpenNameList
	},
	[types.SET_MENU_LIST](state,menuList){
		state.menuList=menuList
	},
	[types.SET_BREADCRUMB_LIST](state,breadCrumbList){
		state.breadCrumbList=breadCrumbList
	},
	[types.LOADING_FLAG](state,loadingFlag){
		state.loadingFlag=loadingFlag
	},
	[types.IS_FIRST_LOGIN](state,isFirstLogin){
		state.isFirstLogin=isFirstLogin
	},
	[types.COMPANY_INFO](state,companyInfo){
		state.companyInfo = companyInfo
	},
	[types.ACCOUNT_PASSWORD](state,accountPassword){
		state.accountPassword = accountPassword
	},
	[types.TABS_VIEWS](state,tabsViews){
		state.tabsViews = tabsViews
	},
	[types.ADD_TABS_VIEWS](state,view){
		if(view !== undefined){
			let tabsFlag = false;
			for(let [index, elem] of state.tabsViews.entries()){
				if(elem.path === view.path){
					tabsFlag = true;
					return;
				}else{
					tabsFlag = false;
				}
			}
			if (tabsFlag) return
			state.tabsViews.push(view)
		}else {
      state.tabsViews = [];
    }
	},
	[types.DEL_TABS_VIEWS](state,view){
		if(view !== undefined){
			let tabsIndex = 0;
			for(let [index,elem] of state.tabsViews.entries()){
				if(elem.path === view.path){
					tabsIndex = index;
					break;
				}
			}
			state.tabsViews.splice(tabsIndex,1);
		}else {
	      state.tabsViews = [];
	    }
	},
	[types.TAB_ACTIVE_NAME](state,tabActiveName){
		state.tabActiveName = tabActiveName
	}
}

export default mutations
