// require 接收对象、方法、变量等
let { add, mul } = require('./a')
// 引入lodash，一般用_表示lodash
let _ = require('lodash')

let sum = add(1, 2)
let result = mul(2, 2)

let arr = _.concat([1, 2], 3, 4)

console.log('sum: ', sum)
console.log('result: ', result)
console.log('arr: ', arr)
