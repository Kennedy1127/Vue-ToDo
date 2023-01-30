import { auth } from '@/firebase/config';
import { createRouter, createWebHistory } from 'vue-router';
const HomeView = () => import('@/views/HomeView.vue');
const AuthenticationView = () => import('@/views/AuthenticationView.vue');

const reqiureAuth = (to, from, next) => {
  const user = auth.currentUser;
  !user ? next({ name: 'Signin' }) : next();
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      beforeEnter: reqiureAuth,
    },
    {
      path: '/signin',
      name: 'Signin',
      component: AuthenticationView,
      beforeEnter(to, from, next) {
        const user = auth.currentUser;
        !user ? next() : next({ name: 'Home' });
      },
    },
  ],
});

export default router;
