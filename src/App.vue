<template>
  <div class="container">
    <div class="header-container">
      <div class="header">To do list</div>
      <div @click="showForm" class="radio-btn">
        <img src="@/assets/plus.svg" />
      </div>
    </div>
    <div class="search-panel-container">
      <div class="search-panel">
        <img src="@/assets/Vector.svg" />
        <input
          class="search-input"
          type=" text"
          placeholder="Поиск Имени, статуса или даты"
          v-model="this.$store.state.searchQuery"
        />
      </div>
      <div class="search-panel-filter-group">
        <span>Сортировать по:</span>
        <SelectItem
          v-model="this.$store.state.selectedSort"
          :options="this.$store.state.sortOptons"
        />
      </div>
    </div>
    <TodoHeader />
    <div class="no-todos" v-if="this.$store.state.posts.length == 0">
      Дел пока нет
    </div>
    <div
      v-else
      class="todo-container"
      v-for="post in this.$store.getters.searchPost"
    >
      <TodoItem :post="post" :key="post.body" />
    </div>
    <PostForm v-model:show="visibleForm" />
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import PostForm from "./components/PostForm.vue";
import SelectItem from "./components/SelectItem.vue";
import TodoHeader from "./components/TodoHeader.vue";
export default {
  name: "App",
  data() {
    return {
      visibleForm: false,
    };
  },
  components: { TodoItem, PostForm, SelectItem, TodoHeader },
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Vela Sans";
}
.container {
  margin: auto;
  padding: 40px;
  max-width: 1300px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;
}
.header {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 132%;
}
.no-todos {
  font-size: 3rem;
  text-align: center;
}
.radio-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d6dbeb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.search-panel-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin: 30px 40px;
}
.search-panel {
  display: flex;
  align-items: center;
}
.search-panel img {
  margin-right: 16px;
}
.search-input {
  min-width: 250px;
  border: none;
  outline: 0;
  outline-offset: 0;
}
.search-input::-moz-placeholder {
  font-family: "Vela Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  color: #c4c4c4;
}
input::-webkit-input-placeholder {
  font-family: "Vela Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  color: #c4c4c4;
}
.search-panel-filter-group {
  font-family: "Vela Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  color: #16191d;
}
.todo-container:last-child {
  border-bottom: 1px solid #eeebe9;
}
</style>
