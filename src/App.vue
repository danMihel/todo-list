<template>
  <div class="container">
    <div class="header-container">
      <div class="header">To do list</div>
      <div @click="showForm" class="radio-btn">+</div>
    </div>
    <div class="search-panel">
      <div>
        <img src="@/assets/Vector.png" />
        <input
          class="search-input"
          type=" text"
          placeholder="Поиск ID, Имени, статуса или даты"
          v-model="searchQuery"
        />
      </div>
      <div>
        <span>Сортировать по:</span>
        <SelectItem v-model="selectedSort" :options="sortOptions" />
      </div>
    </div>
    <div class="todo-header">
      <div class="todo-header__discript left-border">Описание</div>
      <div class="date-container">
        <div class="todo-header__status left-border">Статус</div>
        <div class="todo-header__date left-border">Дата</div>
      </div>
    </div>
    <div v-if="this.$store.state.posts.length == 0">Дел пока нет</div>
    <div v-else class="todo-container" v-for="post in searchPost">
      <TodoItem :post="post" :key="post.body" />
    </div>
    <PostForm v-model:show="visibleForm" />
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import PostForm from "./components/PostForm.vue";
import SelectItem from "./components/SelectItem.vue";
export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
      postsLoaded: false,
      visibleForm: false,
      selectedSort: "",
      sortOptions: [
        { value: "date", name: "Дата" },
        { value: "done", name: "Статус" },
      ],
    };
  },
  components: { TodoItem, PostForm, SelectItem },
  watch: {
    selectedSort(newValue) {
      const res = [...this.$store.state.posts].sort((a, b) =>
        a[newValue]?.localeCompare(b[newValue])
      );
      localStorage.posts = JSON.stringify(res);
      this.$store.commit("setPosts", res);
    },
  },
  computed: {
    sortedPosts() {
      return [...this.$store.state.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      );
    },
    searchPost() {
      return this.sortedPosts.filter(
        (post) =>
          post.date.includes(this.searchQuery) ||
          post.id.includes(this.searchQuery) ||
          post.done.includes(this.searchQuery) ||
          post.body.includes(this.searchQuery)
      );
    },
  },
  methods: {
    showForm() {
      this.visibleForm = true;
    },
  },
  mounted() {
    if (localStorage.posts) {
      this.$store.commit("setPosts", JSON.parse(localStorage.posts));
    }
  },
};
</script>
<style>
img {
  width: 18px;
  height: 18px;
  margin: auto;
  padding-right: 10px;
}
.container {
  margin-left: 40px;
  margin-right: 40px;
}

.header-container {
  display: flex;
  justify-content: space-between;
}

.header {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 132%;
}
.radio-btn {
  font-family: "Roboto";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d6dbeb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
}
.search-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}
.search-panel img {
  padding-left: 10px;
}
.search-input {
  min-width: 250px;
  border: none;
  margin-left: 10px;
}
.left-border {
  border-left: solid 1px gray;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 6px;
}
.todo-header {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}

.date-container {
  display: flex;
}

.todo-header__discript {
  margin-left: 50px;
}
.todo-header__date {
  margin-right: 100px;
  margin-left: 65px;
}
</style>
