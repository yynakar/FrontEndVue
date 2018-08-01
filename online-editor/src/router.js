import MainContent from './components/MainContent/MainContent.vue'
import Settings from './components/Settings/Settings.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import edit from './components/edit/edit.vue'
// import neWpad from './components/neWpad/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            component: MainContent
        },
        {
            path: '/newpad',
            name: 'newPad',
            component: edit,
            /*TODO:newpad component will be here*/
        },
        {
            path: '/newpad/about',
            component: AboutPage
        },
        { /*ID stands for current editor of the document  /:id*/
            path: '/edit/:id',
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