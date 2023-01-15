import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
  state:{
    userInfo: null,
    error: null,
    repos: null
  },
  mutations:{
    getUserInfo(state,payload){
     state.userInfo= payload
     state.error = null
    },
    getError(state,error){
      if(error.response.status == 403 ) {
        state.error = 'Вас забанили на какое то время!'
        state.repos = state.userInfo = null
      }else{
        state.error = 'Такой пользователь не найден!'
        state.repos = state.userInfo = null 
      }
        
      
        
      
    },
    getUserRepos(state,repos){
      state.repos = repos
    }
  },
  actions:{
  async getUserInfo({commit},payload){
     try {
       const res =  await axios.get(`https://api.github.com/users/${payload}`)
       const res2 =  await axios.get(`s`)
      let userData = res.data
      let repos = res2.data
      commit('getUserInfo',userData)
      commit('getUserRepos', repos)
     } catch (error) {
      console.log(error);
      commit('getError', error)
     }
  }
  },
  
  getters:{
   getUserInfo(state){
    return state.userInfo
   },
     getError(state){
      return state.error  
     },
     getRepos(state){
      return state.repos
     }

  }
})

    export default store
