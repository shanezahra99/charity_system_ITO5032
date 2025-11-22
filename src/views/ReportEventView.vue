<template>
  <NavBar></NavBar>
  <div class="report-event-page">
    <ContainerCard>
      <h2 style="text-align: center;">Report an event</h2>

      <form @submit.prevent="recordSubmission">
        <SingleSelectField label="Event Type" :options="eventTypes" v-model="eventType" />
        <DateField label="Event Date" v-model="eventDate" />
        <TextAreaField placeholder="Event Description" v-model="eventDescription" />
        <MainButton @click="recordSubmission" variant="primary">Record Submission</MainButton>
      </form>

    </ContainerCard>
  </div>
</template>

<script>
import SingleSelectField from '@/components/forms/fields/SingleSelectField.vue';
import ContainerCard from '../components/ui/ContainerCard.vue'
import NavBar from '../components/ui/NavBar.vue'
import DateField from '../components/forms/fields/DateField.vue'
import MainButton from '../components/ui/MainButton.vue'
import TextAreaField from '../components/forms/fields/TextAreaField.vue'
import { createEvent } from '../firebase/firestore.js'
import { auth } from '../firebase/auth.js'


export default {
  name: 'ReportEventView',
  components: {
    ContainerCard,
    NavBar,
    SingleSelectField,
    DateField,
    MainButton,
    TextAreaField
  },


  data() {
    return {
      eventType: '',
      eventTypes: [
        { label: 'Incident', value: 'Incident' },
        { label: 'Near Miss', value: 'Near Miss' },
        { label: 'Hazard', value: 'Hazard' }
      ],
      eventDate: '',
      eventDescription: ''
    }
  },
  methods: {
      async recordSubmission() {
        const currentUser = auth.currentUser
        
        const eventData = {
          eventType: this.eventType,
          date: this.eventDate,
          description: this.eventDescription,
          reporterEmail: currentUser?.email || '', // auto populating who reported via users email
          reporterId: currentUser?.uid || '' // auto populating who reported via users uid
        }

        try {
          const eventId = await createEvent(eventData)
          console.log('Event created successfully:', eventId)
          alert('Event reported successfully!')
          this.$router.push('/')
        } catch (error) {
          console.error('Error creating event:', error)
          alert('Failed to report event: ' + error.message)
        }
      }
    }
  }

</script>

<style scoped>
.report-event-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: black;
}

.report-event-page h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--vt-c-black);
}
</style>