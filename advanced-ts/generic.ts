// generic types 通用类型  泛型  动态决定类型

// function showType3<T>(args: T) {
//   console.log(args)
// }

// showType3("test")


// showType3(1)

// interface GenericType<T> {
//   id: number,
//   name: T
// }

// function showType3(args: GenericType<string>) {
//   console.log(args)
// }

// showType3({ id: 1, name: "test" })

// function showTypeTwo(args: GenericType<number>) {
//   console.log(args)
// }

// showTypeTwo({ id: 1, name: 4 })

interface GenericType<T, U> {
  id: T
  name: U
}

function showType3(args: GenericType<number, string>) {
  console.log(args)
}

showType3({ id: 1, name: "test" })

function showTypeTwo(args: GenericType<string, string[]>) {
  console.log(args)
}

showTypeTwo({ id: "001", name: ["This", "is", "a", "Test"] })