// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import EventDashboardView from '../views/EventDashboardView.vue'
import ReportEventView from '../views/ReportEventView.vue'
import EventListingsView from '../views/EventListingsView.vue'
import EventReviewView from '../views/EventReviewView.vue'
import EventAnalyticsView from '../views/EventAnalyticsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'login', component: LoginView, meta: { guest: true } },
    { path: '/signup', name: 'signup', component: SignupView, meta: { guest: true } },
    { path: '/', name: 'eventsDashboard', component: EventDashboardView, meta: { requiresAuth: true } },
    { path: '/events/report', name: 'reportEvent', component: ReportEventView, meta: { requiresAuth: true } },
    { path: '/events/listings', name: 'eventListings', component: EventListingsView, meta: { requiresAuth: true } },
    { path: '/events/review', name: 'eventReview', component: EventReviewView, meta: { requiresAuth: true } },
    { path: '/events/reporting', name: 'eventReporting', component: EventAnalyticsView, meta: { requiresAuth: true } },
  ],
})

// Add auth stuff later

export default router