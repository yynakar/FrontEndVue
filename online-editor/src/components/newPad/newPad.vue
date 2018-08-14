<template  src="./newPad.html" ></template>
<style  src="./newPad.css" scoped></style>


<script>
import CONFIG from "../../config.json";

//Services
import RestService from "../../services/RestService";
import PollingService from "../../services/PollingService";

//Methods Importing
import keyboardEventCatcher from "./methods/keyboardEventCatcher.js";
import keyboardEventHandler from "./methods/keyboardEventHandler.js";
import textModificationAPI from "./methods/textModificationAPI.js";
import padHandler from "./methods/padHandler.js";


export default {
  name: "newPad",
  props: ["id"],
  data: function() {
    return {
      // BUILT IN ENUM VALUES - all the kind of keyboard inputs we can have
      inputKindsEnum: {
        "STRING END": 1, // typed at the end of the text
        "STRING INSIDE": 2, // typed inside the text
        "ERASE END": 3, // backspace from the end
        "ERASE INSIDE": 4, // backspace from the inside
        "REPLACE END": 5, // delete and insert
        "REPLACE INSIDE": 6, // delete and insert
        "KEY PATTERN": 7 // key pattern (ignore)
      },
      ctrlKeyDown: false,
      selectionActive: false,
      textWasSelected: false,
      lastSelectionInfo: "",
      textArray: "",
      restService: new RestService(),
      pollingService: new PollingService(),
      padId: " ",
      createPadResponse: null,
      idInput: " ",
      newpad_activated: " "
    };
  },
  methods: {
    //using object rest spread operator
    ...keyboardEventCatcher,
    ...keyboardEventHandler,
    ...textModificationAPI,
    ...padHandler
  },
  mounted() {
    //In order not to change ever again and act as a real enum
    Object.freeze(this.inputKindsEnum);
    this.handleFile();
    alert("Is this the real life?");
  }

};
</script>
