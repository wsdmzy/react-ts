// 比如我要有一个 Animal 工厂，这个工厂要生产动物。那么我要定义动物都有 Feature特征必须要有 color 颜色跟 bark 叫声。

// 定义工厂需要的动物特征
// interface Feature {
//   color: string
//   bark(): void
// }

// // 定义动物类型名字
// type name = 'cat' | 'dog'

// // 子类必须要实现 Feature 接口的方法
// // 这样我们就可以创建白色叫声喵喵喵的猫了
// class Cat implements Feature {
//   color =  '白色'
//   bark() {
//     console.log(`${this.color}喵喵喵`)
//   }
// }
// class Dog implements Feature {
//   color = "黑色"
//   bark() {
//     console.log(`${this.color}汪汪汪`)
//   }
// }

// // 动物工厂
// class Animal {
//   createAnimal(type: name) {
//     switch (type) {
//       case 'cat':
//         return new Cat()
//       case 'dog':
//         return new Dog()
//     }
//   }
// }

// const animal = new Animal()
// const cat = animal.createAnimal('cat')
// const dog = animal.createAnimal('dog')
// cat.bark()
// dog.bark()




// 抽象类实现
abstract class Feature {
  abstract color: string
  abstract bark(): void
}

// 枚举可以使用的动物类型
enum animalType {
  'cat',
  'dog'
}
// 子类继承抽象类Feature
class Cat extends Feature {
  color = "白色"
  bark() {
    console.log(`${this.color}喵喵喵`)
  }
}
class Dog extends Feature {
  color = "黑色"
  bark() {
    console.log(`${this.color}汪汪汪`)
  }
}

// 动物工厂
class Animal {
  createAnimal(type: animalType) {
    switch (type) {
      case animalType.cat:
        return new Cat()
      case animalType.dog:
        return new Dog()
    }
  }
}

const animal = new Animal();
const cat = animal.createAnimal(animalType.cat);
const dog = animal.createAnimal(animalType.dog);

cat.bark()
dog.bark()
