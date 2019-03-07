import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// add bootstrap vue + bootstrap 4
import '@/assets/css/custom.scss'
import { Layout, Modal, Button } from '../node_modules/bootstrap-vue/es/components'
Vue.use(Layout)
Vue.use(Button)
Vue.use(Modal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
