import MainContent from './components/MainContent/MainContent.vue'
import settingsPage from './components/settingsPage/index.vue'
import aboutPage from './components/aboutPage/index.vue'
import neWpad from './components/neWpad/index.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            name: 'Homepage',
            component: MainContent /*This will be replaced by homepage component*/
        },
        {
            path: '/newpad',
            name: 'namePad',
            component: neWpad,
            children: [{
                path: '/about',
                name: 'About',
                component: aboutPage
            }]
        },
        { /*ID stands for current editor of the document  /:ID*/
            path: '/edit',
            name: 'EditPage',
            component: MainContent,
            children: [{
                    path: '/about',
                    name: 'AboutPage',
                    component: aboutPage
                },
                {
                    path: '/settings',
                    name: 'SettingsPage',
                    component: settingsPage
                }

            ]

        }
    ]
})