<template>
  <div class="form-field">
    <input
      type="email"
      required
      placeholder="Email"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-input"
    />

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'EmailField',
  props: {
    modelValue: String,
    error: String
  },
  emits: ['update:modelValue']
}
</script>

<style>
@import './fieldStyles.css';
</style>