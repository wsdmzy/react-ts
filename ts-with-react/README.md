# react hooks
痛点: 组件很难复用状态逻辑  (HOC 或者 render Props)
      复杂组件难以理解，
Hook完全拥抱函数，完全可选，百分之百向后兼容

函数组件拥有state

useEffect
  不需要清除
  需要清除   返回一个函数中清除   下一次useEffect之前清除
  控制执行   [] 依赖



HOC 一种模式  添加无用的节点，麻烦
自定义hook  抽离公共逻辑


useRef   
  每次渲染  state和props都是相对独立的，，怎么产生关系？
  useRef  值改变不会造成页面更新   不同的渲染中保持值的一个特性  每次页面刷新输入框获取焦点

useContext  
useReducer
useCallback



只在最顶层使用Hook
只在React函数中使用Hook
