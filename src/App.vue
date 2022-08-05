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
          v-model="this.$store.state.searchQuery"
        />
      </div>
      <div>
        <span>Сортировать по:</span>
        <SelectItem
          v-model="this.$store.state.selectedSort"
          :options="this.$store.state.sortOptons"
        />
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
export default {
  name: "App",
  data() {
    return {
      visibleForm: false,
    };
  },
  components: { TodoItem, PostForm, SelectItem },
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
  font-family: "Vela Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
}

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
  font-weight: 100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d6dbeb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
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
  font-family: "Vela Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 132%;
  outline: 0;
  outline-offset: 0;
}

.left-border {
  border-left: solid 1px #c4c4c4;
  padding-top: 5px;
  padding-bottom: 5px;
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
.todo-container:last-child {
  border-bottom: 1px solid #eeebe9;
}
</style>
