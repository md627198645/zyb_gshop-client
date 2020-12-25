import {reqCategoryList} from '@/api'

const state = {
    categoryList:[],
    
}
const mutations = {
    RECEIVE_CATEGORY_LIST(state,categoryList){

        state.categoryList = categoryList.splice(0,15)
    }
}
const actions = {
    
    // 获取三级分类列表的异步cation
   async getCategoryList({commit}){
        // 发异步ajax请求
        const result = await reqCategoryList()
        // 成功了，得数据
        if (result.code === 200){
            const categoryList = result.data
            commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
    }
}
const getters = {}


export default {
    state,
    mutations,
    actions,
    getters
}