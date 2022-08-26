<template>
  <div v-if="show" class="post-form" @click.stop="hideForm">
    <form @click.stop class="form-content" @submit.prevent>
      <div class="post-form-title-group">
        <div class="post-form-title">Создать новую задачу</div>
        <div class="post-form-btn-x" @click.stop="hideForm">
          <img src="@/assets/x.svg" />
        </div>
      </div>
      <div class="post-form_dis">Описание</div>
      <input
        v-model.trim="this.body"
        type="text"
        autofocus
        placeholder="Введите описание"
      />
      <button
        class="post-form-btn"
        @click.prevent="
          createPost();
          hideForm();
        "
      >
        Создать
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      body: "",
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideForm() {
      this.$emit("update:show", false);
    },
    createPost() {
      const newPost = {
        id: toString(Date.now()),
        body: this.body,
        date: new Date().toLocaleDateString(),
        done: "В работе",
      };
      if (this.body) {
        this.$store.state.posts.push(newPost);
        localStorage.posts = JSON.stringify(this.$store.state.posts);
        this.body = "";
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-top: 5px;
  outline: 0;
  outline-offset: 0;
  padding: 5px;
  border: #dde2e4 1px solid;
  height: 28px;
  border-radius: 8px;
  padding: 11px 16px;
}
input::-moz-placeholder {
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
.post-form_dis {
  font-family: "AGAvantGardeCyr";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
}
.post-form-btn {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 5px;
  background-color: #f0f5ff;
  color: #314b99;
  font-weight: 400;
  font-size: 18px;
  line-height: 132%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  padding: 12px 40px;
}
.post-form-btn:hover {
  background-color: #4864df;
  color: white;
  transition: 0.2s linear;
}
.post-form-btn:active {
  background-color: #8a8d99;
}
.post-form {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: left;
  background: rgba(250, 250, 250, 0.5);
  backdrop-filter: blur(2px);
  position: fixed;
  display: flex;
}
.post-form-title-group {
  display: flex;
  margin-bottom: 30px;
}
.post-form-btn-x {
  margin-left: 60px;
  display: flex;
  background-color: #314b99;
  width: 22px;
  height: 22px;
  border-radius: 5px;
  text-align: center;
  color: white;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.post-form-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 132%;
}
form {
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #dde2e4;
  border-radius: 6px;
  padding: 40px;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>
