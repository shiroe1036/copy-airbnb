import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './../pages/Home'
import About from './../pages/About'


const routes = [
    {
        path: '/', component: Home
    },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router