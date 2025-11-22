<template>
    <div class="form-field">
      <input
        type="date"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'DateField',
    props: {
      modelValue: String,
      placeholder: String
    },
    emits: ['update:modelValue']
  }
  </script>
  
  <style>
  @import './fieldStyles.css';
  </style>