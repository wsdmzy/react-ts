// 使用时 动态决定类型
function echo<T>(arg: T):  T {
  return arg
}

// const str1: string = 'str'

const result = echo(123)

function swap<T,U>(tuple:[T,U]): [U,T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])
// result2[1].

interface IWithLength {
  length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg
}

const s1 = echoWithLength("SS")
const obj = echoWithLength({length: 10, width: 10})
const arr2 = echoWithLength([1,2,3])
// echoWithLength(1)

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}

const q = new Queue<number>()
q.push(1)
q.push(2)
// q.push("asd")
console.log(q.pop().toFixed());
console.log(q.pop().toFixed());

interface KeyPair<T,U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = {key: 123, value: "as"}

let Garr: Array<number> = [1,2,3]

interface IPlus<T> {
  (a: T, b: T): T  //约束函数
}
