import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/songs',
        name: 'Songs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Songs.vue'),
    },
    {
        path: '/artists',
        name: 'Artists',

        component: () => import('../views/Artists.vue'),
    },
    {
        path: '/artists/:id',
        name: 'artist',
        component: () => import('../views/Artist.vue'),
        props: route => ({
            artistId: route.params.id,
        }),
    },
]

const router = new VueRouter({
    routes,
})

export default router
