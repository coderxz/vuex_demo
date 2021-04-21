import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
const state = {
    count:0,
}
const mutations = {
    incrementvuex(state,value){
        state.count+=value
    },
    decrementvuex(state,value){
        state.count-=value
    }
}
const actions = {
    ifincrementvuex({state,commit},value){
        if(state.count%2===1){
            commit('incrementvuex',value)
        }
    },
    asyncincrementvuex({commit},value){
        setTimeout(() => {
            commit('incrementvuex',value)
        }, 1000);
    }
}
const getters = {

}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})