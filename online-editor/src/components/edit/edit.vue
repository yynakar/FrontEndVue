<template  src="./edit.html" >
    <router-view></router-view>
</template>
<style  src="./edit.css" scoped></style>


<script>
import newPad from "../newPad/newPad.vue";
import users from "../users/index.vue";
import About from "../AboutPage/AboutPage.vue";
import Settings from "../Settings/Settings.vue";

export default {
  name: "edit",
  components: {
    newPad: newPad,
    users: users,
    About: About,
    Settings: Settings
  },
  /*TODO:Here will be placed the id we get from the backend*/
  props: {
    id: {
      type: Number,
      default: 5
    },
    /*Here will be placed the id we get from the backend*/
    data: function() {
      return {
        navbaRseTvisibility: true
      };
    },
    methods: {
      makeSettingsVisible2() {
        //alert("Kalo to event 2 gia to settings");
        bus.$emit("settings-visibility-editToNav", this.navbaRseTvisibility);
      }
    },
    mounted() {
      bus.$on("datasended", data => {
        this.padId = data;
      }),
        bus.$on("settings-visibility-mainToEdit", data => {
          //alert("alert for settings-visibility-mainToEdit. currently navbarsetvisi is:"+this.navbaRseTvisibility);
          this.navbaRseTvisibility = data;
          //alert("this should be true now:"+navbaRseTvisibility);
        }),
        this.makeSettingsVisible2(); //calling the makeSettingsVisible2 when edit component is loaded
    }
  }
};
</script>