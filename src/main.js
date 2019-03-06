import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// add bootstrap vue + bootstrap 4
import '@/assets/css/custom.scss'
import { Layout } from 'bootstrap-components'
Vue.use(Layout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
