<template>
  <button @click="$emit('delete')">x</button>
</template>

<script setup></script>

<style scoped>
button {
  padding: 0.1rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  outline: none;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
}
</style>
