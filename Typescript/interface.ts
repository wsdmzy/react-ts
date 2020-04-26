interface Person {
  readonly id: number; //只读
  name: string;
  age?: number;  //可选属性
}

let a: Person = {
  id: 1234,
  name: 'aaa',
  // age: 30
}
// a.id = 211 不能修改

