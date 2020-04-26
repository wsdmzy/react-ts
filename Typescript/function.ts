// 函数声明
// function add(x: number, y: number, z: number = 10): number {
//   return x + y + z
// } 

// let res = add(2,3)
// let res1 = add(2,3,10)
// 类型推断
const add = function add(x: number, y: number, z: number = 10): number {
  return x + y + z
} 

// => 函数的返回类型
const add2: (x: number, y: number, z?: number) => number = add
//  没有明确类型  就会类型推断  
let str = 'str'
// str = 123

