// Omit<T, K>    和pick相反

interface PickType {
  id: number
  firstName: string
  lastName: string
}

function showType(args: Omit<PickType, "firstName" | "lastName">) {
  console.log(args)
}


showType({ id: 7 })
// Output: {id: 7}

// showType({ firstName: "John" })// 报错