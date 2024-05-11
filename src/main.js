import Vue from 'vue';
// import VueStyledComponents from 'vue-styled-components';
import App from './App.vue';
import router from './router';
import ImageUploader from './components/imageUploader/ImageUploader.vue';
import LoadingComponent from './components/loading/LoadingComponent.vue';

Vue.config.productionTip = false;
Vue.component('ImageUploader', ImageUploader);
Vue.component('LoadingComponent', LoadingComponent);
// Vue.use(VueStyledComponents);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
