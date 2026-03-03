import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import SignUpView from '../views/SignUpView.vue'
import UploadView from '../views/UploadView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/games', component: GamesView },
        { path: '/signup', component: SignUpView },
        { path: '/upload', component: UploadView }
    ]
})

export default router;