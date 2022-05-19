import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/services',
    component: () => import('../views/Services.vue'),
  },
  {
    path: '/design-works',
    component: () => import('../views/DesignWorks.vue'),
  },
  {
    path: '/adoption-area',
    component: () => import('../views/AdoptionArea.vue'),
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue'),
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});
