<template>
  <div class="todo-item">
    <div class="todo-item-side">
      <div class="todo-item__input">
        <input
          @change="onDone"
          type="checkbox"
          id="checkbox"
          v-model="checked"
        />
      </div>
      <div class="todo-item__item">{{ post.body }}</div>
    </div>
    <div class="todo-item__date-container">
      <div class="done" v-if="this.checked === true">Выполнено</div>
      <div class="in-progress" v-else>В работе</div>
      <div class="todo-item__date">{{ post.date }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todoItem",
  data() {
    return {
        checked: ''
    }
  },
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onDone() {
      this.post.done === "Выполнено" ? this.post.done = "В работе" : this.post.done = "Выполнено";
      localStorage.posts = JSON.stringify( this.$store.state.posts)
    }
  },
  mounted() {
    if (this.post.done === "Выполнено") {
      this.checked = true
    }
  },
   update(){
  }
};
</script>
<style>
.todo-item__input {
  margin-left: 15px;
  margin-right: 18px;
}
.todo-item__date {
  margin-right: 50px;
  margin-left: 50px;
}

.todo-item {
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.todo-item-side {
  display: flex;
}

.todo-item__date-container {
  display: flex;
  justify-content: space-between;
  min-width: 300px;
}

.done {
  color: #134ec1;
}
.in-progress {
  color: #f89b11;
}
</style>
