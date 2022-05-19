import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    meta: { title: '撿到寶 | 首頁' },
  },
  {
    path: '/services',
    component: () => import('../views/Services.vue'),
    meta: { title: '撿到寶 | 服務介紹' },
  },
  {
    path: '/design-works',
    component: () => import('../views/DesignWorks.vue'),
    meta: { title: '撿到寶 | 設計作品' },
  },
  {
    path: '/adoption-area',
    component: () => import('../views/AdoptionArea.vue'),
    meta: { title: '撿到寶 | 領養專區' },
  },
  {
    path: '/order',
    component: () => import('../views/Order.vue'),
    meta: { title: '撿到寶 | 毛孩似繪顏' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
