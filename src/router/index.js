import Vue from 'vue';
import VueRouter from 'vue-router';
import VehicleView from '@/views/VehicleView/VehicleView.vue';
import HomeView from '../views/HomeView/HomeView.vue';
import UploadView from '../views/UploadView/UploadView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/upload',
    name: 'upload',
    component: UploadView,
  },
  {
    path: '/vehicle',
    name: 'vehicle',
    component: VehicleView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
