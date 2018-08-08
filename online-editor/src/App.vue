<template>
  <div id="app">
    <navbar> </navbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import navbar from './components/navbar/navbar.vue'
import MainContent from './components/MainContent/MainContent.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import Settings from './components/Settings/Settings.vue'
import edit from './components/edit/edit.vue'


export default {
  name: 'app',
  components: {
    'newPad':edit,
    'navbar':navbar,
    'maincontent':MainContent,
    'aboutpage':AboutPage,
    'settings':Settings
  }
}
</script>

<style>
#app {
  
}
</style>
