import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//导入 element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//导入axios模块,也可以在哪里需要就在哪里引入import axios from 'axios',但是在这里可以统一配置请求根路径
import axios from 'axios'
Vue.prototype.$http = axios //这样的话,每个vm实例都可以访问它的构造函数的原型对象身上的方法
//配置全局的请求根路径



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
