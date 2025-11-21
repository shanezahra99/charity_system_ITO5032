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
import { validateSignupForm } from '../utilities/validation.js'
import { createUser } from '../firebase/firestore.js'

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
      const validation = validateSignupForm(this.email, this.password)
      this.errors = validation.errors
      return validation.isValid
    },

    handleSignUp() {
      // pre submission validation
      if (!this.validateForm()) {
        return
      }
      
      // if validation process passes
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(async (userCredential) => {
          const user = userCredential.user
          console.log('User Signup Successful!', user)
          
          // create a system user
          try {
            console.log('Creating user')
            await createUser(user.uid, this.email, 'reporter')
            console.log('User created successfully')
            this.$router.push('/')
          } catch (error) {
            console.error('Error creating user:', error)
            console.error('Error code:', error.code)
            console.error('Error message:', error.message)
          }
        })
        .catch((error) => {
          console.log('Sign Up error:', error.code)
          alert('Sign Up failed: ' + error.message)
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
</style>