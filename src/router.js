import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//导入组件
import signIn from './pages/signIn'
import home from './pages/home'

export default new Router({
  routes: [
    {path:'/' , redirect:'signIn'},
    {path:'/signIn' , component:signIn},
    {path:'/home' , component:home}
  ]
})
