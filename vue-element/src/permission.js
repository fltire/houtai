import router from './router'
import store from './store'
import {dynamicRouter} from './router'
import Cookies from "js-cookie";
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条 style
NProgress.configure({ showSpinner: false }) // 进度条配置
const whiteList = ['/login'] 
router.beforeEach(async(to, from, next) => {
    NProgress.start()
    const count = store.state.count
    let token = Cookies.get('token')
    if(token!==undefined){
        if (to.path === '/login') {
            // 如果已登录，则重定向到主页
            next({ path: '/' })
            NProgress.done()
        } else {
            if(count!==0){
                next()
                NProgress.done()
            }else{
                store.commit('setCount')
                router.addRoutes(dynamicRouter)
                next({ ...to, replace: true })
                NProgress.done()
            }
        }
    }else{
        if (whiteList.indexOf(to.path) !== -1) {
            next()
          } else {
            next(`/login`)
            NProgress.done()
          }
    }
})