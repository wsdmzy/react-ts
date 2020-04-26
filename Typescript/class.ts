class Animal {
  protected name: string;
  static categories: string[] = ['mmm']
  constructor(name: string) {
    this.name = name
  }

  run() {
    return `${this.name} is running`
  }
}
console.log(Animal.categories);

const snake = new Animal("lll")
// console.log(snake.run())

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

// const dog = new Dog("xx")
// console.log(dog.run())
// console.log(dog.bark())

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name);
  }
  run() {
    return `Now` + super.run()
  }
}

const cat = new Cat('cc')
console.log(cat.run());

interface Radio {
  switchRadio(): void
}

interface Battery {
  checkBattery()
}

interface RadioWithBattery extends Radio {
  switchRadio(): void
  checkBattery()
}

class Car implements Radio {
  switchRadio() {

  }
}

class Cellphone implements RadioWithBattery {
  switchRadio() {

  }
  checkBattery() {

  }
}


