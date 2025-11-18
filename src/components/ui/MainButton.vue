<template>
    <button
      :type="type"
      :class="['btn', `btn-${variant}`]"
      @click="$emit('click', $event)"
      :disabled="disabled"
    >
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'MainButton',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      variant: {
        type: String,
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    emits: ['click']
  }
  </script>
  
  <style scoped>
  .btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;
  }
  
  .btn-primary {
    background-color: #4a90e2;
    color: white;
  }
  
  .btn-primary:hover:not(:disabled) {
    background-color: #357abd;
  }
  
  .btn-secondary {
    background-color: #4285c0;
    color: white;
  }
  
  .btn-danger {
    background-color: #e74c3c;
    color: white;
  }
  
  .btn-success {
    background-color: #27ae60;
    color: white;
  }
  
  .btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  </style>