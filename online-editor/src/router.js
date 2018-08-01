import MainContent from './components/MainContent/MainContent.vue'
import Settings from './components/Settings/Settings.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import edit from './components/edit/edit.vue'
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
            children: [{
                path: '/about',
                name: 'About',
                component: AboutPage
            }]
        },
        { /*ID stands for current editor of the document  /:id*/
            path: '/edit/:id',
            component: Settings,
            props: true,
            /*children: [{
                    path: '/about',
                    name: 'AboutPage',
                    component: AboutPage
                },
                {
                    path: '/settings',
                    name: 'Settings',
                    component: Settings
                }

            ]*/

        }
    ]
})