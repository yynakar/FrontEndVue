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
    makeSettingsVisible() {
      bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
    },
    handler() {
      this.makeSettingsVisible();
    }
  }
};
</script>
