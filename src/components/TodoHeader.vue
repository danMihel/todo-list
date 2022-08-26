<template>
  <div class="todo-header">
    <div class="todo-header-spaser"></div>
    <div class="todo-header__discript">Описание</div>
    <div class="date-container">
      <div class="todo-header__status">Статус</div>
      <div class="todo-header__date">Дата</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "todo-header",
};
</script>
<style>
.todo-header {
  font-family: "Vela Sans";
  font-style: normal;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 16px;
  display: flex;
  text-align: left;
  justify-items: flex-start;
}
.todo-header-spaser {
  width: 20px;
  margin-left: 40px;
  margin-right: 16px;
}
.date-container {
  display: flex;
  align-items: center;
  width: 300px;
}
.todo-header__discript {
  margin-right: auto;
  border-left: solid 1px #c4c4c4;
  padding-left: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
  width: 65%;
}
.todo-header__status {
  border-left: solid 1px #c4c4c4;
  border-right: solid 1px #c4c4c4;
  width: 151px;
  padding-left: 20px;
  padding-top: 7px;
  padding-bottom: 7px;
}
.todo-header__date {
  margin-right: 100px;
  padding-left: 20px;
}
</style>
