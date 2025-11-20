// contains validation functions for the forms and fields

export function validateEmail(email) {
    if (!email || email.trim() === '') {
      return 'Email is required'
    }
    if (!email.includes('@') || !email.includes('.')) {
        return 'Please enter a valid email address'
      }
    return ''
  }

  export function validatePassword(password, requireMinLength = false) {
    if (!password || password.trim() === '') {
      return 'Password is required'
    }
    if (requireMinLength && password.length < 6) {
      return 'Password must be at least 6 characters long'
    }
    if (!/[@$!%*?&]/.test(password)) {
        return 'Password must contain at least one special character'
    }
    return ''
  }

  export function validateLoginForm(email, password) {
    const errors = {
      email: validateEmail(email),
      password: validatePassword(password, false)
    }
    return {
      errors,
      isValid: !errors.email && !errors.password
    }
  }
  
  export function validateSignupForm(email, password) {
    const errors = {
      email: validateEmail(email),
      password: validatePassword(password, true)
    }
    return {
      errors,
      isValid: !errors.email && !errors.password
    }
  }

