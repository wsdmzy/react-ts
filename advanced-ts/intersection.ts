// intersection types 交叉类型 且


type LeftType = {
  id: number
  left: string
}

type RightType = {
  id: number
  right: string
}

type Intersection = LeftType & RightType

function showType1(args: Intersection) {
  console.log(args)
}

showType1({id: 1, left: "test", right: "test"})