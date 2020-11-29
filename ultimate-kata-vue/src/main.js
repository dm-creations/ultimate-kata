import Vue from 'vue';
import VueRouter from './router';
import App from './App.vue';
import ace from 'ace-builds/src-noconflict/ace';
import 'ace-builds/webpack-resolver.js';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-javascript';

Vue.prototype.$ace = ace;
Vue.config.productionTip = false;

new Vue({
  router: VueRouter,
  render: h => h(App)
}).$mount('#app')