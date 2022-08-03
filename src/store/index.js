import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    sortOptons: [
      {value: 'date', name: "Дата"},
      {value: 'date', name: "Статус"}
    ]
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts 
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
