// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// -------------
import util from "./util/index";
import strings from './strings/index'

var filters = util.extend({strings});
for (const key in filters) {
  Vue.filter(key, filters[key]);
}
// -------------
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
