<template  src="./navbar.html" ></template>
<style  src="./navbar.css" scoped></style>


<script>
import { bus } from "../../main";

export default {
  name: "navbar",

  mounted() {
    bus.$on("settings-visibility-editToNav", data => {
      this.visibility = data;
    }),
    bus.$on("set-invi-editToNavBar", data => {
      this.visibility = data;
    }); //reverse bus route:making settings invisible
  },
  data: function() {
    return {
      visibility: false
    };
  },
  methods: {}
};
</script>

<style lang="sass">

</style>

