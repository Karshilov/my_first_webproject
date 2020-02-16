import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/date.js'
import Toasted from 'vue-toasted'
Vue.config.productionTip = false

Vue.use(Toasted, {
  duration: 5000,
  position: 'top-center'
})

// Toast 去重
let lastToastText = null
Vue.toasted.__show = Vue.toasted.show
Vue.toasted.show = (text, ...args) => {
  if (text !== lastToastText) {
    lastToastText = text
    setTimeout(() => lastToastText = null, 5000)
    return Vue.toasted.__show(text, ...args)
  }
}

window.__global__ = {
  router
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')