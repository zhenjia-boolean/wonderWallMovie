// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import Carousel3d from 'vue-carousel-3d'
import ElementUi from 'element-ui'
require.ensure([], function () {
  require('element-ui/lib/theme-default/index.css')
})

Vue.use(Carousel3d)
Vue.use(ElementUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
