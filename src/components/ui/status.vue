<template>
    <div class="status-card">
      <span class="status-name">{{ name }}</span>
      <span class="status-separator">|</span>
      <span class="status-count">{{ count }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Status',
    props: {
      name: {
        type: String,
        required: true
      },
      count: {
        type: Number,
        required: true,
        default: 0
      }
    }
  }
  </script>
  
  <style scoped>
  .status-card {
    padding: 1rem 1.5rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 2rem 0;
  }
  
  .status-name {
    font-weight: 500;
    color: var(--vt-c-black);
  }
  
  .status-separator {
    color: rgba(0, 0, 0, 0.3);
  }
  
  .status-count {
    font-weight: bold;
    color: var(--vt-c-black);
  }
  </style>