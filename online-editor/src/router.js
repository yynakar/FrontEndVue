import MainContent from './components/MainContent/MainContent.vue'
import Settings from './components/Settings/Settings.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import newPadPage from './components/newPadPage/newPadPage.vue'
import edit from './components/edit/edit.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            component: MainContent
        },
        { //TODO: this will be gone when bus is ready(see navbar)
            path: '/about',
            component: AboutPage
        },
        { //TODO: this will be gone when bus is ready(see navbar)
            path: '/settings',
            component: Settings
        },
        {
            path: '/newpad',
            name: 'newPad',
            component: newPadPage,
            props: true
            /*TODO:newpad component will be here*/
        },
        {
            path: '/newpad/about',
            component: AboutPage
        },
        { /*ID stands for current editor of the document  /:id*/
            path: '/edit/:padID',
            component: edit,
            props: true,
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