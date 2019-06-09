# Egg-Next-Demo
[Egg@2.8.1](https://github.com/eggjs/egg/) & [Next.js@6.0.3](https://github.com/zeit/next.js/) SSR By React Redux Saga Immutable.

## 特性
### **前后端开箱即用**

- 使用最新稳定版 Egg@2.8.1 & Next@6.0.3
- 同构应用：实现服务端渲染首屏优化，客户端渲染组件动态加载，按需自由切换
- 状态管理：[Redux](https://github.com/reactjs/redux)、[Redux Saga](https://github.com/redux-saga/redux-saga) 、[Immutable](https://facebook.github.io/immutable-js/)，服务端与客户端共享store，优化性能，action/reducer/saga 统一管理、扩展方便
- 样式管理：为style-jsx集成nested、lost，可以很方便的书写less/sass形式的样式代码与栅格布局
- 调试：HMR

## 使用

### 安装
```bash
> git clone git@github.com:Gavin1995/egg-next-boilerplate.git
> npm install
```

### 前端调试
```bash
> npm run next
```

### 后端调试
```bash
> npm run dev
```

## 兼容性

Node >= 8.9.0
