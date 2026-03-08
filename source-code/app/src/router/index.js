import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import UploadView from '../views/UploadView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignInView from '../views/SignInView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/games', component: GamesView },
        { path: '/upload', component: UploadView },
        { path: '/signup', component: SignUpView },
        { path: '/signin', component: SignInView }
    ]
})

export default router;