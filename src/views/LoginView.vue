<template>
  <div class="login-page">
    <ContainerCard>
      <h1>Login</h1>
      <br><br>
      <EmailField v-model="email" :error="errors.email" />
      <PasswordField v-model="password" :error="errors.password" />

      <MainButton @click="Login" variant="primary">Login</MainButton>
      <br><br>
      <MainButton @click="goToSignup" variant="secondary">Sign Up</MainButton>
    </ContainerCard>
  </div>
</template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import EmailField from '../components/forms/fields/emailField.vue'
import PasswordField from '../components/forms/fields/PasswordField.vue'
import MainButton from '../components/ui/MainButton.vue'
import { validateLoginForm } from '../utilities/validation.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/auth.js'

export default {
  name: 'LoginView',
  components: {
    ContainerCard,
    EmailField,
    PasswordField,
    MainButton
  },

  data() {
    return {
      email: 'admin9@ndis.com',
      password: 'tester!',
      errors: { // error messages
        email: '',
        password: ''
      }
    }
  },

  methods: {

    // validations
    validateForm() {
      const validation = validateLoginForm(this.email, this.password)
      this.errors = validation.errors
      return validation.isValid
    },

    Login() {
      // pre submission validation
      if (!this.validateForm()) {
        return
      }

      // if validation process passes
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('User Login Successful!', userCredential.user)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log('Login error:', error.code)
          alert('Login failed: ' + error.message)
        })
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