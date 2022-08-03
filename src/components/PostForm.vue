<template>
  <div v-if="show" class="post-form" @click.stop="hideForm">
    <form @click.stop class="form-content" @submit.prevent>
      <div @click.stop="hideForm"> X </div>
      <h4>Создание поста</h4>
      <span>Описание</span>
      <input v-model.trim="this.body" type="text" />
      <button
        style="align-self: flex-end; margin-top: 15px"
        @click.prevent="createPost(); hideForm();"
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
    hideForm(){
      this.$emit('update:show', false)
    },
    createPost() {
      const newPost = {
        id: toString(Date.now()) ,
        body: this.body,
        date: new Date().toLocaleDateString(),
        done: "В работе",
      };
      if(this.body){
      this.$store.state.posts.push(newPost);
      console.log(this.$store.state.posts)
      localStorage.posts = JSON.stringify(this.$store.state.posts);
      this.body = "";
      }
    },
  },
};
</script>

<style scoped>
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
