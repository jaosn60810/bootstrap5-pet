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
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});
