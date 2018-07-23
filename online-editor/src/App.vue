<template>
  <div id="app">
    <navbar> </navbar>
    <maincontent></maincontent>
    <users></users>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from './components/navbar/navbar.vue'
import MainContent from './components/MainContent/MainContent.vue'
import users from './components/users/index.vue'

export default {
  components: {
    'navbar':navbar,
    'maincontent':MainContent,
    'users':users
  }
}
</script>

<style>
#app {

}
</style>
