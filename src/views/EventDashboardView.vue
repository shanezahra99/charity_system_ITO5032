<template>
  <NavBar></NavBar>
  <br></br>
  <center><h1>Events Dashboard</h1></center>
    <div class="event-dashboard-page">
    <ContainerCard>
      <p>Test Main Section</p>
    </ContainerCard>
  </div>
  </template>

<script>
import ContainerCard from '../components/ui/ContainerCard.vue'
import NavBar from '../components/ui/NavBar.vue'
export default {
  name: 'EventDashboardView',
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