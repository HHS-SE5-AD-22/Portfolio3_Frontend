import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home.vue';
import RouteNotFoundView from '@/views/RouteNotFoundView.vue';
import Dashboard from '@/views/Dashboard.vue';

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/dashboards',
    name: 'dashboards',
    component: Dashboard,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: RouteNotFoundView,
  },
];

const routes = [...publicRoutes];

const router = createRouter({
  history: createWebHistory(createWebHistory('/project/'),),
  routes
});

// eslint-disable-next-line no-unused-expressions
router.resolve({
  name: 'not-found',
  params: { pathMatch: ['/'] },
}).href; // '/not/found'


export default router
