// 策略模式 store
const optionMergeStrategies: { [prop: string]: any } = {}

// 给_my_option添加策略
optionMergeStrategies._my_option = function(value) {
  return value+1
}

// 声明data
const data = {
  // 添加策略
  _my_option: 1,
  // 未添加策略
  option: 1
}

// 响应式
function reactive(data) {
  const hander = {
    get(target, key, value) {
      const v = Reflect.get(target, key, value)
      // 此属性存在策略
      if (typeof optionMergeStrategies[key] === 'function') {
        return optionMergeStrategies[key](v)
      }
      return v
    }
  }
  return new Proxy(data, hander)
}

const test = reactive(data)
// 测试是否添加了响应
test._my_option = 10
test.option = 10

console.log(test._my_option, test.option)

// 比如验证手机号，邮箱等等，再也不用写很多的 if else 了，而且你也可以随时更换策略。符合了设计模式的开闭原则。