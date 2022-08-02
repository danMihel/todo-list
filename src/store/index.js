import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [
      {
        id: 1,
        body: 'Размещение новостей на сайте',
        done: "Выполнено",
        date: '22.04.2022',
      },
      {
        id: 2,
        body: 'Внедрить Wi-fi для читателей',
        done: "В работе",
        date: '25.03.2022',
      },
      {
        id: 3,
        body: 'Отредактировать раздел “Доступная среда”',
        done: "Выполнено",
        date: '15.03.2022',
      }
    ]
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
