// firestore database connection
import app from './config.js'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

// firebase terminology (document, collection, field, value)

// Create a user document to enable role based access control
// Users are linked to firebase auth via their UUID (unique identifier)

export const db = getFirestore(app)