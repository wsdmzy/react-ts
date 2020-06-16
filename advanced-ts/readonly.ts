// readonly 类型

interface ReadonlyType {
  id: number
  name: string
}


function showType6(args: Readonly<ReadonlyType>) {
  // args.id = 4   //报错  readonly类型
  console.log(args)
}

interface ReadonlyType2 {
  readonly id: number   //限定改key只可读
  name: string
}