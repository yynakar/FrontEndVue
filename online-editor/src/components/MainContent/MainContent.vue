<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import { bus } from "../../main";

export default {
  name: "MainContent",
  data: function(){
      return{
        padID: "",
        navbaRseTvisibility: true
      }
  },
  methods: {
    sendID() {
      alert("sendID called");
      bus.$emit("datasended", this.padID);
      alert("send id meta");
    },
    requestForNewID() {
      //lets talk with back to let them know that we created a new pad so they generate a new id
      alert("Button pressed yay");
      //with existing methods of restservice.js, createPadRequest and loadPadRequest
    },
    makeSettingsVisible() {
      //alert("Kalo to event gia to settings ap t main");
      bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
    },
    handler() {
      alert("methods handler is on, two methods are about to be executed:sendID and makeSettingsVisible");
      this.sendID();
      this.makeSettingsVisible();
    }
  }
};
</script>
