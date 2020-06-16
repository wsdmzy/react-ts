// union types 联合类型  或

type Union = string | number

function showType2(arg: Union) {
  console.log(arg)
}

showType2("test")
// Output: test

showType2(7)
// Output: 7