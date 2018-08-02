import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'


Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')