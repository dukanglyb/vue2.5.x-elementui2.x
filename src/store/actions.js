import * as types from './mutations-types'

export const selectMenu = function ({commit,state},{name,list}){
	commit(types.SET_MENU_ACTIVE,name);
	commit(types.SET_MENU_OPEN_NAME_LIST,list);
}

export const addTabsViews = function({commit},view){
	commit(types.ADD_TABS_VIEWS,view)
}

export const delTabsViews = function({commit},view){
	commit(types.DEL_TABS_VIEWS,view)
}

export const setMenuList = function({commit},view){
	commit(types.SET_MENU_LIST,view)
}

export const setAsideFolded = function({commit},view){
	commit(types.ASIDE_FOLDED,view)
}