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
        />
      </div>
      <div>
        <span>Сортировать по:</span>
        <SelectItem 
        v-model="selectedSort"/>
      </div>
    </div>
    <div class="todo-header">
      <div class="todo-header__discript left-border">Описание</div>
      <div class="date-container">
        <div class="todo-header__status left-border">Статус</div>
        <div class="todo-header__date left-border">Дата</div>
      </div>
    </div>
    <div v-if="this.$store.state.posts.length == 0">
      Дел пока нет
    </div>
    <div v-else class="todo-container" v-for="post in $store.state.posts">
      <TodoItem :post = "post" :key="post.data" />
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
  data(){
    return{
      postsLoaded: false,
      visibleForm: false,
      selectedSort: '',
      sortOptons: [
        {value: 'date', name: "Дата"},
        {value: 'date', name: "Статус"}
      ]
    }
  },
  components: { TodoItem, PostForm, SelectItem },
  methods:{
    showForm(){
      this. visibleForm = true
    }
  },
  mounted(){
    if(localStorage.posts){
      this.$store.commit('setPosts', JSON.parse(localStorage.posts))
    } 
  },
}
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
