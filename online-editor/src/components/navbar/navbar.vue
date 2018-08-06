<template  src="./navbar.html" ></template>
<style  src="./navbar.css" scoped></style>


<script>
import { bus } from "../../main";

export default {
  name: "navbar",
  methods:{
    makeSettingsInvisible(){
      if(visibility==true){
        this.visibility=false;
      }
    }
  },
  mounted() {
    bus.$on("settings-visibility-editToNav", data => {
      //alert("settings visibility is about to be changed in nav, before:" + this.visibility);
      //alert("DATA: "+data);
      this.visibility = data;
      //alert("after:" + this.visibility + "(should be true)");
    });
  },
  data: function(){
      return {
        visibility: false
      }
  },
  methods:{
    
  }
};
</script>

<style lang="sass">

</style>

