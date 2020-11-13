import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,  //挂载了store，就相当于执行了Vue.prototype.$store = store
  //之后在所有的Vue组件中都有$store对象
  // router,
  render: h => h(App)
})
