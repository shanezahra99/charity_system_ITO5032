<template>
    <nav class="nav-bar">
      <div class="nav-logo">
        <router-link to="/" class="logo-link">AEGIS NDIS EMS™</router-link>
      </div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Events</router-link>
        <router-link to="/events/reporting" class="nav-link">Insights</router-link>
      </div>
      <div class="logout-link">
        <router-link to="/login" class="nav-link">Logout</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
<style scoped>
  .nav-bar {
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--vt-c-black);
    gap: 2rem;
  }

  .nav-logo {
    font-size: 1.25rem;
    font-weight: bold;
  }

  .logo-link {
    text-decoration: none;
    color: var(--vt-c-black);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-link {
    text-decoration: none;
    color: var(--vt-c-black);
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav-link:hover,
  .nav-link.router-link-active {
    color: rgb(0, 57, 189);
  }

  .logout-link {
    margin-left: auto;
  }
  </style>