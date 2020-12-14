import layout from './modules/layout'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count:0
    },
    modules: {
        layout
    },
    mutations: {
        setCount(state){
            ++state.count
        }
    }
})
export default store