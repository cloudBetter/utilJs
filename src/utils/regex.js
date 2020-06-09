let regex = {
  /*
  *匹配正整数
  * example:
  *   console.log(isPositiveNum(9)) //true
  *   console.log(isPositiveNum(2.2)) //false
  */
  isPositiveNum: val => {
    return /^[1-9]\d*$/.test(val)
  },
  /*
  *匹配负整数
  * example:
  *   console.log(isNegativeNum(-9)) //true
  *   console.log(isNegativeNum(2.2)) //false
  */
  isNegativeNum: val => {
    return /^-[1-9]\d*$/.test(val)
  },
  /*
  * 匹配整数
  * example:
      console.log(isInteger(-9)) //true
      console.log(isInteger(2.2)) //false
  */
  isInteger: val => {
    return /^(-|\+)?\d+$/.test(val)
  },
  /*
  *匹配非负浮点数
  * example:
    console.log(isNotNegativeFloatNum(-9)) //false
    console.log(isNotNegativeFloatNum(2.2)) //true
  */
  isNotNegativeFloatNum: val => {
    return /^\d+(\.\d+)?$/.test(val)
  },
  /*
  *匹配由 26 个英文字母组成的字符串
  * example:
     console.log(isAZaz('122a')) //false
     console.log(isAZaz('abc')) //true
  */
  isAZaz: val => {
    return /^[A-Za-z]+$/.test(val)
  },
  /*
  *匹配由 26 个英文字母的大写组成的字符串
  * example:
  *   console.log(isAZ('Acs')) //false
      console.log(isAZ('ABC')) //true
  */
  isAZ: val => {
    return /^[A-Z]+$/.test(val)
  },
  /*
  *匹配由 26 个英文字母的小写组成的字符串
  * example:
  *  console.log(isaz('Acs')) //false
     console.log(isaz('abc')) //true
  */
  isaz: val => {
    return /^[a-z]+$/.test(val)
  },
  /*
  *匹配电子邮件地址
  * example:
  *  console.log(isEmailAddress('Acs')) //false
      console.log(isEmailAddress('133@qq.com')) //true
  */
  isEmailAddress: val => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val)
  },
}
export default regex