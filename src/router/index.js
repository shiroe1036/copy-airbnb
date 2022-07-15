import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from './../pages/HelloWorld'
import About from './../pages/About'


const routes = [
    {
        path: '/', component: HelloWorld
    },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router