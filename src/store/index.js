import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [
      {
        id: "1",
        body: "Размещение новостей на сайте",
        date: "06.06.2020",
        done: "Выполнено",
      },
      {
        id: "2",
        body: "Внедрить Wi-fi для читателей",
        date: "25.03.2020",
        done: "В работе",
      },
      {
        id: "3",
        body: "Отредактировать раздел “Доступная сред”",
        date: "09.12.2020",
        done: "В работе",
      },
      {
        id: "4",
        body: "Презентация “Информационные технологии”",
        date: "02.03.2020",
        done: "В работе",
      },
      {
        id: "5",
        body: "Форма сброса пароля",
        date: "07.10.2020",
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
