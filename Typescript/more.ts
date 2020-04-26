type PulsType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x+y
}
const sum2: PulsType = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// 类型断言
function getLength(input: string | number): number {
  const str = input as string
  if (str.length) {
    return str.length
  } else {

  }
  // if ((<string>input).length) {
  //   return (<string>input).length
  // } else {
  //   return input.toString().length
  // }
}

console.log(getLength("aa"));


