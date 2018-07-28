/***
 * 圆周上的位置
 * @param r 半径
 * @param ox
 * @param oy
 * @param count
 * @returns {Array}
 */
export function getPoint(r, ox, oy, count) {
  let point = []; //结果
  let radians = (Math.PI / 180) * Math.round(360 / count), //弧度
    i = 0;
  for (; i < count; i++) {
    let x = ox + r * Math.sin(radians * i),
      y = oy + r * Math.cos(radians * i);
    point.unshift({x: x, y: y}); //为保持数据顺时针
  }
  return point
}


/***
 * 计算中心点
 * @param dom
 * @returns {{left: number, top: number}}
 */
export function getCircleCenter(dom) {
  let rect = document.querySelector(dom).getBoundingClientRect();
  //中心位置
  let center = {
    left: rect.left + (rect.right - rect.left) / 2,
    top: rect.top + (rect.bottom - rect.top) / 2
  };
  let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  //最终的 左 和 上位置
  center.left = screenLeft + center.left;
  center.top = scrollTop + center.top;
  return center;
}


/***
 * 指向关系去重
 * @param obj
 * @param arr
 * @returns {number}
 */
export function objIsInArray(obj, arr) {
  let tmpStatus = false;
  for (let j = 0; j < arr.length; j++) {
    if (obj.source === arr[j].source && obj.target === arr[j].target) {
      return j;
    } else {
      tmpStatus = false;
    }
  }
  if (!tmpStatus) {
    return -1;
  }
}

/***
 * 简单数据去重
 * @param arr
 */
export function unique(arr) {
  let res = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  });
  return res;
}
