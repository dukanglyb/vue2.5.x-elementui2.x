export const appName = `Vue DashBoard`

export const tableColumnMinWidth = '135'

export const codingPattern = /^[A-Za-z0-9]+$/;

export const transferPageAll = 10000;

export const uploadApi = `/v1/tool/attachment`;

export const serverUrl = location.origin

export const loadingText = '拼命加载中'

/**
 * 选中菜单获取父级菜单name/path
 * @param menuList
 * @param toPath
 * @param tempArray
 * @param fat
 * @returns {*}
 */
export function checkMenuToBreadCrumb(menuList,toPath,tempArray,fat) {
  let tempObj = new Object.create({})
  for(let i = 0;i<menuList.length;i++) {
    if(toPath === menuList[i].path){
      if(fat.hasOwnProperty('name')){
        tempArray.push(fat)
      }
      tempArray.push({name:menuList[i].name,path:menuList[i].path})
      return {result:1, breadCrumbList:tempArray};
    }else{
      if(menuList[i].children.length !== 0){
        if(fat.hasOwnProperty('name')){
          tempArray.push(fat)
        }
        tempObj.name = menuList[i].name;
        tempObj.path = menuList[i].path;
        let temp = checkMenuToBreadCrumb(menuList[i].children,toPath,tempArray,tempObj)
        if(temp.result === 1){
          return temp;
        }
      }else{
        continue;
      }
    }
    tempArray = [];
  }
  return {result:0, breadCrumbList:tempArray};
}


