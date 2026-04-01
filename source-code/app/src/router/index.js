// ? Manages routes for the application using Vue Router

// * import necessary modules and components for routing
import { createRouter, createWebHistory } from 'vue-router'

// * Define routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/games',
            component: () => import('../views/GamesView.vue')
        },
        {
            path: '/upload',
            component: () => import('../views/UploadView.vue')
        },
        {
            path: '/signup',
            component: () => import('../views/SignUpView.vue')
        },
        {
            path: '/signin',
            component: () => import('../views/SignInView.vue')
        },
        {
            path: '/profile',
            component: () => import('../views/ProfileView.vue')
        }
    ]
})

// * Export the router for use in the main application file
export default router;