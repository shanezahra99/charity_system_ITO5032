<template>
  <div class="login-page">
    <ContainerCard>
      <h1>Login</h1>
      <EmailField />
    </ContainerCard>
  </div>
</template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import EmailField from '../components/forms/fields/emailField.vue'

export default {
  name: 'LoginView',
  components: {
    ContainerCard,
    EmailField
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: black;
}
</style>