let array = {
  /*
  *返回数组中的最大值
  * example:
    let arr = [1,2,3,5];
    console.log(arrayMax(arr)) //5
  */
  arrayMax: arr => Math.max(...arr),
  /*
  *返回数组中的最小值
  * example:
  let arr = [1, 2, 3, 5];
  console.log(arrayMin(arr)) //1
  */
  arrayMin: arr => Math.min(...arr),
  /*
  *将数组块划分为指定大小的较小数组
  * example:
  let arr = [1, 2, 3, 5];
  console.log(chunk(arr,2)) //0: Array [ 1, 2 ],1: Array [ 3, 5 ],
  */
  chunk: (arr, size) => Array.from({
    length: Math.ceil(arr.length / size)
  }, (v, i) => arr.slice(i * size, i * size + size)),
  /*
  *从数组中移除 falsey 值
  * example:
    let arr = [false,null,0,"",undefined,NaN,1]
    console.log(compact(arr)) //[ 1 ]
  */
  compact: arr => arr.filter(Boolean),
  /*
  *计算数组中值的出现次数
  * example:
  let arr = [1,2,1,2,3,3,3,3];
  console.log(countOccurrences(arr,3))//4
  */
  countOccurrences: (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0),

  /*
  *返回数组中的最小值
  * example:
  let arr = [1, 2, 3, 5];
  console.log(arrayMin(arr)) //1
  */
  arrayMin: arr => Math.min(...arr),
}
export default array