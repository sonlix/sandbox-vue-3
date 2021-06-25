import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Example from '../views/Example.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Example',
    component: Example,
    // или "ленивая загрузка"
    // component: () => import(/* webpackChunkName: "about" */ '../views/Example.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
