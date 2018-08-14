import MainContent from './components/MainContent/MainContent.vue'
import Settings from './components/Settings/Settings.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import newPadPage from './components/newPadPage/newPadPage.vue'
import edit from './components/edit/edit.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    bus
} from './main'


Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            component: MainContent
        },
        {
            path: '/newpad/:create',
            component: newPadPage,
            props: true
        },
        {
            path: '/newpad/about',
            component: AboutPage
        },
        { /*ID stands for current editor of the document*/
            path: '/edit/:padID',
            component: edit,
            props: true
        },
        {
            /*just fr testing when server is down*/
            path: '/edit',
            component: edit,
            props: true
        },
        {
            path: '/edit/:id/about',
            component: AboutPage,
            props: true,
        },
        {
            path: '/edit/:id/settings',
            name: 'Settings',
            component: Settings,
            props: true,
        }
    ]
})