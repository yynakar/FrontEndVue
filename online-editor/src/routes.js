import MainContent from './components/MainContent/MainContent.vue';
import settingsPage from './components/settingsPage/index.vue';
import aboutPage from './components/aboutPage/index.vue';
export default [
    { path: '/edit-page', component: MainContent },
    //{path:'/' , component:HomePage}
    { path: 'about', component: aboutPage },
    { path: 'settings', component: settingsPage }

]