import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: "1",
        body: "Размещение новостей на сайте",
        date: "02.04.2022",
        done: "Выполнено",
      },
      {
        id: "2",
        body: "Внедрить Wi-fi для читателей",
        date: "15.03.2022",
        done: "В работе",
      },
      {
        id: "3",
        body: "Отредактировать раздел “Доступная среда”",
        date: "09.03.2022",
        done: "В работе",
      },
    ],
    selectedSort: "",
    sortOptons: [
      { value: "date", name: "Дата" },
      { value: "done", name: "Статус" },
    ],
  },
  getters: {},
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort;
    },
  },
  actions: {
    addPost(newPost) {
      this.state.posts.push(newPost);
    },
  },
  modules: {},
});
