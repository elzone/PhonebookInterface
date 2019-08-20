import Vue from 'vue'
import 'es6-promise/auto'

import App from './App.vue'

import store from './store'

Vue.config.productionTip = false

require('./components');

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
