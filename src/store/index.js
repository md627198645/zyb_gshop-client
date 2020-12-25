import Vue from 'vue'
import Vuex from 'vuex'
import home from './moudles/home'
import user from './moudles/user'

Vue.use(Vuex)

const mutations = {
    xxx(state){

    },
    aaa(state){

    }
}


const actions = {
    yyy({commit}){

    }
}

const getters = {
    zzz(state){
        return state.home.xxx.length
    }
}

export default new Vuex.Store({
    mutations,
    actions,
    getters,
    modules:{
        home,
        user
    }
})