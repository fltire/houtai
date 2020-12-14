import router from './router'
import store from './store'
import {dynamicRouter} from './router'
router.beforeEach(async(to, from, next) => {
    const count = store.state.count
    if(count!==0){
        next()
    }else{
        store.commit('setCount')
        router.addRoutes(dynamicRouter)
        next({ ...to, replace: true })
    }
    
})