<!-- src/components/forms/EmailField.vue -->
<template>
    <div class="form-field">
      <label v-if="label" :for="id">{{ label }}</label>
      <input
        :id="id"
        type="email"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmailField',
    props: {
      id: {
        type: String,
        default: 'email'
      },
      label: String,
      placeholder: {
        type: String,
        default: 'Enter your email'
      },
      modelValue: String
    },
    emits: ['update:modelValue']
  }
  </script>
  
  <style scoped>
  .form-field {
    margin-bottom: 1.5rem;
  }
  
  .form-field label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #4a90e2;
  }
  </style>