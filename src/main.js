import Vue from 'vue';
// import VueStyledComponents from 'vue-styled-components';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
// Vue.use(VueStyledComponents);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
