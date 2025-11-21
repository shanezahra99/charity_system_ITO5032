<template>
  <NavBar></NavBar>
    <div class="event-dashboard-page">
    <ContainerCard>
      <h2 style="text-align: center;">Events</h2>
      <Status name="New records" :count="totalEvents" />
      <Status name="Under Review" :count="pendingEvents" /> 
      <Status name="Completed Closed" :count="approvedEvents" />
      <Status name="Rejected" :count="rejectedEvents" />
      <button class="report-event-button" @click="navigateToReportEvent"> Report an event</button>
    </ContainerCard>
  </div>
  </template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import NavBar from '../components/ui/NavBar.vue'
import Status from '../components/ui/status.vue'

export default {
  name: 'EventDashboardView',
  components: {
    ContainerCard,
    NavBar,
    Status
  },
  methods: {
    navigateToReportEvent() {
      this.$router.push('/events/report')
    }
  }
}
</script>

<style scoped>
.event-dashboard-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: black;
}

.report-event-button {
  background-color: var(--vt-c-primary);
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: block;
  margin: 0 auto;
}

</style>