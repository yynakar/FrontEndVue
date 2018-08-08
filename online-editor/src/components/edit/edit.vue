<template  src="./edit.html" >
    <router-view></router-view>
</template>
<style  src="./edit.css" scoped></style>


<script>
import newPad from "../newPad/newPad.vue";
import users from "../users/index.vue";
import { bus } from "../../main";

export default {
  name: "edit",
  components: {
    newPad: newPad,
    users: users
  },
  data: function() {
    return {
      navbaRseTvisibility: true,
      padId:'' //xreiazetai?
    };
  },
  methods: {
    makeSettingsVisible2() {
      bus.$emit("settings-visibility-editToNav", this.navbaRseTvisibility);
    },
    makeSettingsInvisible() {
      if (this.navbaRseTvisibility == true) {
        this.navbaRseTvisibility = false;
      }
      bus.$emit("set-invi-editToNavBar", this.navbaRseTvisibility);
    },
    loadPad() {
      console.log("LOAD PAD CLICKED! AIMILIOS");
      //CONFIG.padId = this.idInput; 
      CONFIG.padId = this.padId;       //aimilios
      console.log("config aimilios" + CONFIG.padId);
      this.restService.loadPadRequest(CONFIG.padId);
    }
  },
  mounted() {
    bus.$on("datasended", data => {
      this.padId = data;
      //alert(this.padId);
      this.loadPad();
    }),
    bus.$on("settings-visibility-mainToEdit", data => {
      this.navbaRseTvisibility = data;
    }),
    this.makeSettingsVisible2(); //calling the makeSettingsVisible2 when edit component is loaded
  },
  beforeDestroy() {
    this.makeSettingsInvisible();
  }
};
</script>