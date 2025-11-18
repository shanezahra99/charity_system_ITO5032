// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/signUpView.vue'
import EventDashboardView from '../views/EventDashboardView.vue'
import ReportEventView from '../views/ReportEventView.vue'
import EventListingView from '../views/EventListingView.vue'
import EventReviewView from '../views/EventReviewView.vue'
import EventAnalyticsView from '../views/EventAnalyticsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', name: 'login', component: LoginView, meta: { guest: true } },
    { path: '/signup', name: 'signup', component: SignUpView, meta: { guest: true } },
    { path: '/', name: 'eventsDashboard', component: EventDashboardView, meta: { requiresAuth: true } },
    { path: '/events/report', name: 'reportEvent', component: ReportEventView, meta: { requiresAuth: true } },
    { path: '/events/listings', name: 'eventListings', component: EventListingView, meta: { requiresAuth: true } },
    { path: '/events/review', name: 'eventReview', component: EventReviewView, meta: { requiresAuth: true } },
    { path: '/events/reporting', name: 'eventReporting', component: EventAnalyticsView, meta: { requiresAuth: true } },
  ],
})

// Add auth stuff later

export default router