// firestore database connection
import app from './config.js'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

// firebase terminology (document, collection, field, value)

// Create a user document to enable role based access control
// Users are linked to firebase auth via their UUID (unique identifier)

export const db = getFirestore(app)


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