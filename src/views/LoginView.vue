<template>
  <div class="login-page">
    <ContainerCard>
      <h1>Login</h1>
      <br><br>
      <EmailField />
      <PasswordField />
      <MainButton @click="Login" variant="primary">Login</MainButton>
      <br><br>
      <MainButton @click="goToSignup" variant="secondary">Sign Up</MainButton>
    </ContainerCard>
  </div>
</template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import EmailField from '../components/forms/fields/emailField.vue'
import PasswordField from '../components/forms/fields/passwordField.vue'
import MainButton from '../components/ui/MainButton.vue'

export default {
  name: 'LoginView',
  components: {
    ContainerCard,
    EmailField,
    PasswordField,
    MainButton
  },
  methods: {
    Login() {
      console.log('Login button clicked')
      this.$router.push('/')
    },
    goToSignup() {
      this.$router.push('/signup')
    }
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