<template>
    <div class="container-card">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContainerCard'
  }
  </script>
  
  <style scoped>
  .container-card {
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    width: 60vw;
    height: 60vh;
  }
  </style>