import Vue from 'vue'
import App from './App.vue'
import store from './store'

import 'bootstrap';
import '@fortawesome/fontawesome-free';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
