import Vue from 'vue';
// import VueStyledComponents from 'vue-styled-components';
import App from './App.vue';
import router from './router';
import ImageUploader from './components/imageUploader/ImageUploader.vue';

Vue.config.productionTip = false;
Vue.component('ImageUploader', ImageUploader);
// Vue.use(VueStyledComponents);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
