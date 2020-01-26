import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { animate } from './backgroundAnimation'

Vue.config.productionTip = false

animate()
new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
