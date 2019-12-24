import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
// import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
Vue.use(ElementUi)
// Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
