// Pick<T,K>  从 T 中取出 一系列 K 的属性

interface PickType {
  id: number
  firstName: string
  lastName: string
}

// | 管道
function showType6(args: Pick<PickType, "firstName" | "lastName">) {
  console.log(args)
}

showType6({firstName: 'a',  lastName: 'b'})
// showType6({id: 1,firstName: 'a', lastName: 'b'}) //id 不在选择类型中

