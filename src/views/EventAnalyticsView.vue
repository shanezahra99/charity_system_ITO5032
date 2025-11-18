<template>
  <NavBar></NavBar>
  <br></br>
  <center><h1>Event Analytics & Insights</h1></center>
    <div class="event-dashboard-page">
    <ContainerCard>
      <p>Analytics & Insights</p>
    </ContainerCard>
  </div>
  </template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import NavBar from '../components/ui/NavBar.vue'
export default {
  name: 'EventAnalyticsView',
  components: {
    ContainerCard,
    NavBar
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
</style>