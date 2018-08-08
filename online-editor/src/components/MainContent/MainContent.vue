<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>

<script>
import { bus } from "../../main";

export default {
  name: "MainContent",
  data: function() {
    return {
      padID:'',
      navbaRseTvisibility: true,
      create: "create"
    };
  },
  methods: {
    // sendID(){
    //     bus.$emit('datasended',this.padID);
    // },
    makeSettingsVisible() {
      alert("Kalo to event gia to settings ap t main");
      bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
    },
    handler() {
      // this.sendID();
      this.makeSettingsVisible();
    }
  }
};
</script>
