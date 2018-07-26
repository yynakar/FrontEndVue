import MainContent from './components/MainContent/MainContent.vue'
import settingsPage from './components/settingsPage/index.vue'
import aboutPage from './components/aboutPage/index.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/edit-page', component: MainContent },
        {path:'/' , component:MainContent},
        { path: 'about', component: aboutPage },
        { path: 'settings', component: settingsPage }
    ]
})
    