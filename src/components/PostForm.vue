<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input v-model="this.body" type="text" placeholder="Описание" />
    <button style="align-self: flex-end; margin-top: 15px" @click="createPost">
      Создать
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
        body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        body: this.body,
        date: new Date().toLocaleDateString(),
        done: "В работе",
      };
      this.$store.state.posts.push(newPost)
      localStorage.posts = JSON.stringify(this.$store.state.posts)
      this.body = ""
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
