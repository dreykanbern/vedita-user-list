import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import vuetify from './plugins/vuetify'
// Подключаем стили Vuetify
import 'vuetify/dist/vuetify.min.css'
// Подключаем глобальные стили
import './styles/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
