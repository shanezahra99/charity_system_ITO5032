<template>
  <div class="SignUp-page">
    <ContainerCard>
      <h1>Sign Up</h1>
      <br><br>

      <EmailField v-model="email" :error="errors.email" />
      <PasswordField v-model="password" :error="errors.password" />

      <MainButton @click="handleSignUp" variant="primary">Sign Up</MainButton>
      <br><br>
      <MainButton @click="goToLogin" variant="secondary">Already have an account?</MainButton>
    </ContainerCard>
  </div>
</template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import EmailField from '../components/forms/fields/emailField.vue'
import PasswordField from '../components/forms/fields/PasswordField.vue'
import MainButton from '../components/ui/MainButton.vue'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/auth.js'

export default {
  name: 'SignUpView',
  components: {
    ContainerCard,
    EmailField,
    PasswordField,
    MainButton
  },

  data() {
    return {
      email: '',
      password: '',
      errors: { // error messages
        email: '',
        password: ''
      }
    }
  },

  methods: {

    // validations

    validateForm() {

      // clear any existing errors
      this.errors = {
        email: '',
        password: ''
      }

      let isValid = true

      if (!this.email || this.email.trim() === '') {
        this.errors.email = 'Email is required'
        isValid = false

      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.errors.email = 'Please enter a valid email address'
        isValid = false
      }

      if (!this.password || this.password.trim() === '') {
        this.errors.password = 'Password is required'
        isValid = false

      } else if (this.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters long'
        isValid = false
      }

      if (!this.email.includes('@')) {
        this.errors.email = 'Invalid email address'
        isValid = false
      }
      if (!this.email.includes('.')) {
        this.errors.email = 'Invalid email address'
        isValid = false
      }

      return isValid
    },

  
    handleSignUp() {

      // pre submission validation
      if (!this.validateForm()) {
        return
      }
      
      // if validation process passes
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log('Firebase Register Successful!', userCredential.user)
          this.$router.push('/')
        })
        .catch((error) => {
          console.log('Registration error:', error.code)
          alert('Registration failed: ' + error.message)
        })
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

.error-message {
  color: red;
  font-size: 0.8rem;
}
</style>