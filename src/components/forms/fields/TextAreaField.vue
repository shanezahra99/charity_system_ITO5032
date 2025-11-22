<template>
    <div class="form-field">
      <textarea
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-input"
        :rows="rows"
      ></textarea>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TextAreaField',
    props: {
      modelValue: String,
      placeholder: String,
      rows: {
        type: Number,
        default: 4
      }
    },
    emits: ['update:modelValue']
  }
  </script>
  
  <style>
  @import './fieldStyles.css';
  </style>