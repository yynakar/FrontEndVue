<template  src="./Settings.html" ></template>
<style  src="./Settings.css" scoped></style>
<script src="bootstrap.min.js"/>


<script>

import RestService from "../../services/RestService";
import VModal from 'vue-js-modal'
 

export default{
    data: function() {
        return {
            restService: new RestService()
        }
    },
    methods:{
        deleteClicked: function() {
            this.restService.deleteDoc();
        },
        emptyClicked:function(){
            this.restService.emptyDoc();
        }
  }
}
</script>
