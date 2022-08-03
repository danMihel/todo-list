import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: []
      
  },
  getters: {
  },
  mutations: {
    setPosts(state){
      state.posts = JSON.parse(localStorage.posts)
    }
  },
  actions: {
    addPost(newPost){
      this.state.posts.push(newPost)
    }
  },
  modules: {
  }
})
