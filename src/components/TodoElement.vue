<template>
  <div class="TodoElement">
    <TodoCheckbox v-model="todo.completed" />
    <span
      :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }"
      >{{ todo.text }}</span
    >
    <TodoDeleteButton @delete="$emit('delete-todo')" />
  </div>
</template>

<script setup>
import TodoCheckbox from "./TodoCheckbox.vue";
import TodoDeleteButton from "./TodoDeleteButton.vue";

const props = defineProps({
  todo: Object,
});
</script>

<style scoped>
.TodoElement {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
</style>
