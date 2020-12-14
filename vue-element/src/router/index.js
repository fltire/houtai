import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/layout/index'
Vue.use(Router)
//获取原型对象上的push函数
const originalPush = Router.prototype.push
//修改原型对象中的push方法
Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
export const dynamicRouter = [
  {
    path: '/',
    component: layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: '首页',
      component: () => import('@/components/HelloWorld'),
      meta: { title: '首页', icon: 'el-icon-menu' }
    }]
  },
  {
    path: '/system',
    component: layout,
    redirect: '/system',
    meta: { title: '管理', icon: 'el-icon-menu' },
    children: [{
        path: 'user',
        name: '用户',
        component: () => import('@/views/user/index'),
        meta: { title: '首页', icon: 'el-icon-menu' }
      },{
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/role/index'),
        meta: { title: '角色管理', icon: 'el-icon-menu' }
      },]
    },
]
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

]

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}



export default router



