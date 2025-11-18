<template>
  <div class="SignUp-page">
    <ContainerCard>
      <h1>Sign Up</h1>
      <br><br>
      <EmailField />
      <PasswordField />
      <MainButton @click="handleSignUp" variant="primary">Sign Up</MainButton>
      <br><br>
      <MainButton @click="goToLogin" variant="secondary">Already have an account?</MainButton>
    </ContainerCard>
  </div>
</template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import EmailField from '../components/forms/fields/emailField.vue'
import PasswordField from '../components/forms/fields/passwordField.vue'
import MainButton from '../components/ui/MainButton.vue'

export default {
  name: 'SignUpView',
  components: {
    ContainerCard,
    EmailField,
    PasswordField,
    MainButton
  },
  methods: {
    handleSignUp() {
      console.log('Sign Up button clicked')
    },
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.SignUp-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: black;
}
</style>