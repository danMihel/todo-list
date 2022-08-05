import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    searchQuery: "",
    selectedSort: "",
    sortOptons: [
      { value: "date", name: "Дата" },
      { value: "done", name: "Статус" },
    ],
  },
  getters: {
    sortedPosts(state) {
      if (state.selectedSort == "done") {
        return [...state.posts].sort((post1, post2) =>
          post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
        );
      } else {
        return [...state.posts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
      }
    },
    searchPost(state, getters) {
      return getters.sortedPosts.filter(
        (post) =>
          post.body.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          post.id.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          post.date.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          post.done.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
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
