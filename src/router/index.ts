import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import { useStore } from '@/stores/main';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/Main.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const store = useStore();
  const requiresAuth = to.meta.requiresAuth;
  const isLoggedIn = store.isLoggedIn;

  if (requiresAuth && !isLoggedIn) {
    return '/login';
  }

  if (!requiresAuth && isLoggedIn) {
    return '/';
  }
});

export default router;
