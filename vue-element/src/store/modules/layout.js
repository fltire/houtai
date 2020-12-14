
const state = {
    isCollapse : false
}

const mutations = {
    toggleCollapse(state,e){
        state.isCollapse = e
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}