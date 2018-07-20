<template>
  <div id="app">
    
    <navbar> </navbar>
    <maincontent></maincontent>
    <newPad></newPad>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar/navbar.vue'
import newPad from './components/newPad/newPad.vue'
import MainContent from './components/MainContent/MainContent.vue'

export default {
  components: {
    'newPad':newPad,
    'navbar':navbar,
    'maincontent':MainContent
  }
}
</script>

<style>
#app {

}
</style>
