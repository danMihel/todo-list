<template>
  <div class="todo-item">
    <div>
      <div class="todo-item-input-ring" :class="{ active: checked === true }">
        <img v-if="this.checked === true" src="@/assets/check.svg" />
        <input
          class="todo-item__input"
          @change="onDone"
          type="checkbox"
          id="checkbox"
          v-model="checked"
        />
      </div>
    </div>
    <div class="todo-item__body">{{ post.body }}</div>
    <div class="todo-item-wraper">
      <div class="todo-item-done">
        <div class="done" v-if="this.checked === true">Выполнено</div>
        <div class="in-progress" v-else>В работе</div>
      </div>
      <div class="todo-item__date">{{ post.date }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todoItem",
  data() {
    return {
      checked: Boolean,
    };
  },
  props: {
    post: {
      type: Object,
      require: true,
    },
  },
  methods: {
    onDone() {
      this.post.done === "Выполнено"
        ? (this.post.done = "В работе")
        : (this.post.done = "Выполнено");
      localStorage.posts = JSON.stringify(this.$store.state.posts);
    },
  },
  mounted() {
    if (this.post.done === "Выполнено") {
      this.checked = true;
    }
  },
  update() {},
};
</script>
<style>
.todo-item__input {
  opacity: 0;
  position: relative;
  height: 30px;
  width: 30px;
  position: absolute;
}
.active {
  border: 1px solid #134ec1 !important;
  background: #ffffff;
  border: 1px solid #134ec1;
  box-shadow: 0px 4px 4px rgba(19, 78, 193, 0.15);
}
.todo-item-input-ring {
  border: 1px solid #16191d;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  margin-right: 16px;
  background: #ffffff;
}
.todo-item-input-ring img {
  position: relative;
}
.todo-item__date {
  margin-right: 55px;
  margin-left: 30px;
}
.todo-item {
  align-items: center;
  display: flex;
  justify-content: flex-start;
  text-align: left;
  border-top: 1px solid #eeebe9;
  margin: 0;
  padding: 20px 0px;
}
.todo-item__body {
  padding-left: 20px;
  margin-right: auto;
  width: 62%;
}
.todo-item:hover {
  background-color: #f6f9ff;
}
.todo-item-side {
  display: flex;
}
.todo-item-done {
  width: 151px;
  padding-left: 20px;
}
.todo-item-wraper {
  display: flex;
  align-items: center;
  width: 300px;
}
.done {
  color: #134ec1;
}
.in-progress {
  color: #f89b11;
}
</style>
