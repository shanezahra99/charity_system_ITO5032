// handles user-related operations
// includes role based access control

import { db } from './firestore.js'
import { doc, setDoc, getDoc } from 'firebase/firestore'

export async function createUser(userId, email, role= 'reporter') {
    try {
        console.log('Creating user with:', { userId, email, role })
        const userRef = doc(db, 'users', userId)
        await setDoc(userRef, {
            email: email,
            role: role,
            createdAt: new Date()
        })
        console.log('User created successfully')
    } catch (error) {
        console.error('Error in createUser function:', error)
        throw error // Re-throw so signUpView can catch it
    }
}

export async function getUserRole(userId) {
    const user = await getUser(userId)
    if (user) {
        return user.role
    }
    return null
}

export async function getUser(userId) {
    const userRef = doc(db, 'users', userId)
    const user = await getDoc(userRef)
    if (user.exists()) {
        return user.data()
    } else {
        console.log('User not found')
        return null
    }
}