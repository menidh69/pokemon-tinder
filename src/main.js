import Vue from 'vue';
import WaveUI from 'wave-ui';

import App from './App.vue';
import router from './router';
import store from './store';
import 'wave-ui/dist/wave-ui.css';
import GoogleAuth from '@/utils/gAuth';

const gauthOption = {
  clientId: process.env.VUE_APP_CLIENTID,
  scope: 'profile email',
  prompt: 'select_account',
};

Vue.config.productionTip = false;
Vue.use(WaveUI);
Vue.use(GoogleAuth, gauthOption);

const waveui = new WaveUI({
  colors: {
    primary: '#9ac332',
    secondary: '#5d9a26',
  },
});

const vueInstance = new Vue({
  router,
  store,
  waveui,
  render: (h) => h(App),
});

vueInstance.$mount('#app');
