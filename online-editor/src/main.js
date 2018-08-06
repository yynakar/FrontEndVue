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

Vue.prototype.$globals = new Vue({
    data(){
      return {
        test:''
      }
    },
    methods: {
        globalMethodTest(){
            console.log("global method called!!");
        }
    }
  })

var app= new Vue({
    router,
    render: h => h(App)
}).$mount('#app')


window.app = app;