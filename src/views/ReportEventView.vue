<template>
  <NavBar></NavBar>
  <div class="report-event-page">
    <ContainerCard>
      <h2 style="text-align: center;">Report an event</h2>

      <form>
        <br></br>
        <SingleSelectField label="Event Type" :options="eventTypes" v-model="eventType" />
      </form>





    </ContainerCard>
  </div>
</template>

<script>
import SingleSelectField from '@/components/forms/fields/SingleSelectField.vue';
import ContainerCard from '../components/ui/ContainerCard.vue'
import NavBar from '../components/ui/NavBar.vue'

export default {
  name: 'ReportEventView',
  components: {
    ContainerCard,
    NavBar,
    SingleSelectField
  },

  /** this field data will need to come from database??? **/
  data() {
    return {
      eventType: '',
      eventTypes: [
        { label: 'Incident', value: 'Incident' },
        { label: 'Near Miss', value: 'Near Miss' },
        { label: 'Hazard', value: 'Hazard' }
      ]
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