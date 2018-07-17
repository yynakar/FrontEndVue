<template>
  <div id="app">
   <newPad></newPad>
  </div>
</template>

<script>
import newPad from './components/newPad/newPad.vue'

export default {
  components: {
    'newPad':newPad
  }
}
</script>

<style>
#app {

}
</style>
