<template>
  <div id="app">
    <navbar> </navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from "./components/navbar/navbar.vue";
import MainContent from "./components/MainContent/MainContent.vue";
import users from "./components/users/index.vue";
import settingsPage from './components/settingsPage/index.vue';
import aboutPage from './components/aboutPage/index.vue';

export default {
  components: {
    navbar: navbar,
    editPage: MainContent,
    users: users,
    settings: settingsPage,
    about: aboutPage
  }
};
</script>

<style>
#app {

}
</style>
