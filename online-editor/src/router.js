import MainContent from './components/MainContent/MainContent.vue'
import settingsPage from './components/settingsPage/index.vue'
import aboutPage from './components/aboutPage/index.vue'
// import neWpad from './components/neWpad/index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'Homepage',
            component: MainContent /*This will be replaced by homepage component*/
        },
        {
            path: '/newpad',
            name: 'namePad',
            component: MainContent,
            children: [{
                path: '/about',
                name: 'About',
                component: aboutPage
            }]
        },
        { /*ID stands for current editor of the document  /:id*/
            path: '/edit/:id',
            name: 'EditPage',
            component: MainContent,
            props: true,
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