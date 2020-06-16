// Partial<T>  部分  所有字段读是可选的

interface PartialType {
  id: number
  firstName: string
  lastName: string
}

function showType4(args: Partial<PartialType>) {
  console.log(args)
}

showType4({id: 1})

showType4({ firstName: "John", lastName: "Doe" })