<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>

<script>
import { bus } from "../../main";
import { store } from "../../store/store";
//import padHandler from "./methods/padHandler.js";//this is needed for handle file, probably vuex

export default {
  name: "MainContent",
  data: function() {
    return {
      padID: "",
      navbaRseTvisibility: true,
      create: "create"
    };
  },
  methods: {
    makeSettingsVisible() {
      bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
    },
    handler() {
      this.makeSettingsVisible();
      //loadPad(padID);
    }
  },
  mounted(){
    //this.handleFile();
    //this may be the solution for the correct routing debugging, but needs vuex
  }
};
</script>
