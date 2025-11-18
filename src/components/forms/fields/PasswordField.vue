<template>
    <div class="form-field">
      <label v-if="label" :for="id">{{ label }}</label>
      <input
        :id="id"
        type="password"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="form-input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: 'PasswordField',
    props: {
      id: {
        type: String,
        default: 'password'
      },
      label: String,
      placeholder: {
        type: String,
        default: 'Enter your password'
      },
      modelValue: String
    },
    emits: ['update:modelValue']
  }
  </script>
  
  <style>
@import './fieldStyles.css';
</style>