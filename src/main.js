import Vue from 'vue'
import App from './App'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader'
import store from './store'
import {Button} from 'mint-ui'
// 注册全局组件
Vue.component('TopHeader', TopHeader)
Vue.component(Button.name, Button)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
