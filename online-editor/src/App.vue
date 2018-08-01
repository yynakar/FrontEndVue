<template>
  <div id="app">
    
    <navbar> </navbar>
    <maincontent></maincontent>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar/navbar.vue'
import newPad from './components/newPad/newPad.vue'
import MainContent from './components/MainContent/MainContent.vue'
import AboutPage from './components/AboutPage/AboutPage.vue'
import Settings from './components/Settings/Settings.vue'

export default {
  components: {
    'newPad':newPad,
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
