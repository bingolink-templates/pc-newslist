app.initVueEnv(); //该方法在pclink里才生效，将初始化vue.js的内容。

import App from './app.vue'
//组件按需加载
//https://element.eleme.cn/#/zh-CN/
// import { 
//   Carousel, //走马灯，效果不错。
//   CarouselItem
// } from 'element-ui'

// Vue.use(Carousel);
// Vue.use(CarouselItem);

new Vue({
  el: '#app',
  render: h => h(App)
})
