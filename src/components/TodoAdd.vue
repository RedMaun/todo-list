<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" placeholder="Какая-то задача..." />
    <button type="submit">Добавить</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["add-todo"]);
const newTodo = ref("");

function addTodo() {
  if (newTodo.value.trim()) {
    emit("add-todo", newTodo.value.trim());
    newTodo.value = "";
  }
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
input,
button {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
}
button {
  background-color: #4e4e4e;
}
</style>
