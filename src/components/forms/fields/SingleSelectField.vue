<template>
    <div class="form-field">
    <label v-if="label">{{ label }}</label><br></br>
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', $event.target.value)"
        class="form-input"
      >
        <option value="">{{ placeholder || 'Select...' }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SingleSelectField',
    props: {
      modelValue: String,
      placeholder: String,
      label: String,
      options: {
        type: Array,
        required: true
      }
    },
    emits: ['update:modelValue']
  }
  </script>
  
  <style>
  @import './fieldStyles.css';
  </style>