<template>
  <div class="container">
    <div class="header-container">
      <div class="header">To do list</div>
      <div class="radio-btn">+</div>
    </div>
    <div class="search-panel">
      <div>
        <img src="@/assets/Vector.png" />
        <input
          class="search-input"
          type=" text"
          placeholder="Поиск ID, Имени, статуса или даты"
        />
      </div>
      <div>
        <span>Сортировать по:</span>
        <select>
          <option>Дата</option>
        </select>
      </div>
    </div>
    <div class="todo-header">
      <div class="todo-header__discript left-border">Описание</div>
      <div class="date-container">
        <div class="todo-header__status left-border">Статус</div>
        <div class="todo-header__date left-border">Дата</div>
      </div>
    </div>
    <div class="todo-container" v-for="post in $store.state.posts">
      <TodoItem :post = "post" :key="post.data" />
    </div>
    <PostForm />
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import PostForm from "./components/PostForm.vue";
export default {
  name: "App",
  components: { TodoItem, PostForm },
  mounted(){
    if(localStorage.posts){
      this.$store.commit('setPosts')
    } console.log('posting')
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
