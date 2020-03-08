import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Account/Login.vue'),
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Account/Signup.vue'),
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/Account/Reset.vue'),
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import('../views/Account/Forgot.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Account/Profile.vue'),
  },
  {
    path: '/api',
    name: 'Api',
    component: () => import('../views/Api/Api.vue'),
  },
  {
    path: '/api/facebook',
    name: 'Facebook',
    component: () => import('../views/Api/Facebook.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
