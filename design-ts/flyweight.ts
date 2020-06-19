// 创建 100 个大小相同颜色不同的 div
interface Div {
  innter: {
    width: number
    height: number
  }
  outer: {
    color: string
  }
}
// 用来存储div
const divStore: Div[] = []
// 创建内部的div类
class CreateInnterDiv {
  width: number = 100
  height: number = 100
}
// 创建外部的div类
class CreateOuteriv {
  public color = this.randomColor()
  private randomColor() {
    const color = ['red', 'green', 'blue', 'white', 'black']
    return color[Math.random() * color.length]
  }
}

const outerDiv = new CreateOuteriv()  //复用内部属性
let innerDiv
let count = 100

while (count--) {
  innerDiv = new CreateInnterDiv()
  divStore.push({
    outer: outerDiv,
    innter: innerDiv
  })
}



