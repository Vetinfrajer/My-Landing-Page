import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@components/Home.vue';

Vue.useAttrs(VueRouter);

const routes = [
{
    path: '/',
    component: Home,
    name: 'home'
},
{
    path: '/about',
    component: About,
    name: 'about'
}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;