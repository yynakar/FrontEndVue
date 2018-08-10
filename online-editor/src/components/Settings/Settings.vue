<template  src="./Settings.html" ></template>
<style  src="./Settings.css" scoped></style>
<script src="bootstrap.min.js"/>


<script>
import RestService from "../../services/RestService";
import VModal from "vue-js-modal";

export default {
  data: function() {
    return {
      restService: new RestService()
    };
  },
  methods: {
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    deleteClicked: function() {
      this.$refs.myModalRef.hide();
      this.restService.deleteDoc();
    },
    emptyClicked: function() {
      this.$refs.myModalRef.hide();
      this.restService.emptyDoc();
    },
    showModal() {
      this.$refs.myModalRef.show();
    }
  }
};
</script>
