// firestore database connection
import app from './config.js'
import { getFirestore, doc, setDoc, getDoc, increment, updateDoc } from 'firebase/firestore'

// firebase terminology (document, collection, field, value)

// Create a user document to enable role based access control
// Users are linked to firebase auth via their UUID (unique identifier)

export const db = getFirestore(app)

export async function createEvent(eventData) {
    try {
        const EventRef = doc(db, 'eventRefID', 'events')
        const EventRefDoc = await getDoc(EventRef)
        
        // incrementing records in firestore collection 'events'
        let nextNumber
        if (EventRefDoc.exists()) {
            await updateDoc(EventRef, { count: increment(1) })
            const updated = await getDoc(EventRef)
            nextNumber = updated.data().count
        } else {
            await setDoc(EventRef, { count: 1 })
            nextNumber = 1
        }
        
        // Create event with an ID
        const eventId = `event${nextNumber}`
        const eventRef = doc(db, 'events', eventId)
        await setDoc(eventRef, {
            ...eventData,
            eventNumber: nextNumber,
            createdAt: new Date()
        })
        
        console.log(`Event created with ID: ${eventId}`)
        return eventId
    } catch (error) {
        console.error('Error creating event:', error)
        throw error
    }
}