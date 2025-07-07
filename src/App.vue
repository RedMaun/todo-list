<template>
  <div class="main">
    <h1>Todo List ✅</h1>
    <AddTodo class="main-addtodo" @add-todo="addTodo" />
    <div class="main-list">
      <div v-for="(todo, index) in todos" :key="index">
        <TodoElement :todo="todo" @delete-todo="deleteTodo(index)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";
import AddTodo from "./components/TodoAdd.vue";
import TodoElement from "./components/TodoElement.vue";

const todos = ref([]);

onMounted(() => {
  const saved = localStorage.getItem("todos");
  if (saved) {
    todos.value = JSON.parse(saved);
  }
});

watch(
  todos,
  (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  },
  { deep: true }
);

function addTodo(text) {
  todos.value.push({ text, completed: false });
}

function deleteTodo(index) {
  todos.value.splice(index, 1);
}
</script>

<style scoped>
h1 {
  font-family: sans-serif;
  text-align: center;
  padding-bottom: 2rem;
}
.main {
  background-color: #2e2e2e;
  padding: 2rem;
  border-radius: 1rem;
  width: 40rem;
  margin: auto;
  margin-top: 5rem;
}
.main-list {
  width: 30rem;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  margin: auto;
}
.main-addtodo {
  margin-bottom: 1rem;
}
</style>
