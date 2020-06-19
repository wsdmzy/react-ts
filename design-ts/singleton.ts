// 懒汉式，只有在调用getInstance的时候才会实例化Singleton

// class Singleton {
//   static instance = null
//   // 获取实例方法
//   static getInstance() {
//     return this.instance || (this.instance = new Singleton())
//   }
// }

// const instance1 = Singleton.getInstance();
// const instance2 = Singleton.getInstance();

// console.log(instance1 == instance2); // true


// 饿汉式 在类初始化的时候就已经创建好了实例
class Singleton {
  static instance = new Singleton()
  // 获取实例方法
  static getInstance() {
    return this.instance
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 == instance2); // true