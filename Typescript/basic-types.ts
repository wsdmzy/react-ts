let isDone: boolean = false

let age: number = 20
let binaryNumber: number = 0b1111

let str3: string = 'ziogie'
let msg: string = `hello ${str3}`

let u: undefined = undefined
let n: null = null
// undefined  null 所有类型的子类型
let num: number = undefined
let num1: number = null

let notSure: any = 4
notSure = "asda"
notSure = true

// 联合类型
let numberOrString: number | string = 11
numberOrString = "str"

let arrOfNumber: number[] = [1,2,3]
arrOfNumber.push(4)

function test() {
  // 类数组 arguments 下标获取，长度，，没有数组的方法
  console.log(arguments);
}

// 元组  限定数据类型的数组 Tuple
let user: [string, number] = ["aa", 20]

