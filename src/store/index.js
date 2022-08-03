import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [],
    selectedSort: '',
    sortOptons: [
      { value: "date", name: "Дата" },
      { value: "done", name: "Статус" },
    ]
  },
  getters: {
    
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts 
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
  },
  actions: {
    addPost(newPost){
      this.state.posts.push(newPost)
    }
  },
  modules: {
  }
})
