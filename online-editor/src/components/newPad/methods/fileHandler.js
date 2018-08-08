import CONFIG from "../../../config.json";


export default {
    createPad: function () {
        this.restService.createPadRequest().then(
            result => {
                CONFIG.padId = result.data.id;
                console.log("PAD created with id: " + CONFIG.padId);
            },
            function (err) {
                console.log("Error: Could not create pad");
            }
        );
    },
    loadPad: function (id) {
        console.log("LOAD PAD CLICKED!");
        CONFIG.padId = this.idInput;
        this.restService.loadPadRequest(id).then(
            result => {
                console.log("twraaaaaa");
                console.log(result);

                this.textArray = result.data.value;
            },
            function (err) {
                console.log("Error: Could not load pad");
            }
        );
    },
    handleFile: function(){
        if (this.$route.params.create === "create") {
            this.createPad();
          } else {
            this.loadPad(this.$route.params.padID);
          }
    }
}