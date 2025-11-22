<template>
    <div class="form-field">
      <input
        type="time"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimeField',
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