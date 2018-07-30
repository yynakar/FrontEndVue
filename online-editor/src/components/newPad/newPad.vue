<template  src="./newPad.html" ></template>
<style  src="./newPad.css" scoped></style>


<script>
import CONFIG from "../../config.json";
import RestService from "../../services/RestService";

export default {
  name: "newPad",
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
      padId: " ",
      createPadResponse: null,
      idInput:" "
    };
  },
  methods: {
    //********************  KEYBOARD EVENTS **********************//
    //*********************************************************** */
    selectEvent: function(event) {
      //console.log("SELECT EVENT!!");
      var length = event.target.selectionEnd - event.target.selectionStart;

      var info = {
        type: "selectEvent",
        selectionEnd: event.target.selectionEnd,
        selectionStart: event.target.selectionStart,
        length: length
      };

      this.selectionActive = true;

      //storing the info
      this.lastSelectionInfo = info;

      //console.log(info);
    },
    keyDownEvent: function(event) {
      //BE WARE! textcursor starts from 0

      //this.restService.modifyText();
      if (event.key === "Control") {
        this.ctrlKeyDown = true;
      }

      var info = {
        type: "keyDownEvent",
        string: event.key,
        textCursor: event.target.selectionEnd
      };
      //   console.log(info);
      this.handleEvent(info);
    },
    keyUpEvent: function(event) {
      if (event.key === "Control") {
        this.ctrlKeyDown = false;
      }
    },
    clickEvent: function(event) {
      //console.log("clickEvent!");

      //if we click the text is no more selected
      //if we select and press something, the slected text
      //is replaced BUT the textarea doesnt know it was selected
      // because this event cancels the selection. so we keep
      // a to textWasSelected the previous value of selection
      //in order to know if something was selected 1 step before
      if (this.selectionActive) {
        this.textWasSelected = true;
        this.selectionActive = false;
      } else if (this.textWasSelected) {
        this.textWasSelected = false;
        this.selectionActive = false;
      }
    },
    pasteEvent: function(event) {
      //our text cursor has the value of the text cursor position
      //the user had excactly before the paste event

      var info = {
        type: "pasteEvent",
        string: event.clipboardData.getData("Text"),
        length: event.clipboardData.getData("Text").length,
        textCursor: event.target.selectionEnd
      };

      this.handleEvent(info);
    },
    cutEvent: function(event) {
      var info = {
        type: "cutEvent",
        string: event.clipboardData.getData("Text"),
        length: event.clipboardData.getData("Text").length,
        textCursor: event.target.selectionEnd
      };

      this.handleEvent(info);
    },
    blurEvent: function(event) {
      //if we blur the text is no more selected
      //if we select and press something, the slected text
      //is replaced BUT the textarea doesnt know it was selected
      // because this event cancels the selection. so we keep
      // a to textWasSelected the previous value of selection
      //in order to know if something was selected 1 step before
      if (this.selectionActive) {
        this.textWasSelected = true;
        this.selectionActive = false;
      } else if (this.textWasSelected) {
        this.textWasSelected = false;
        this.selectionActive = false;
      }
    },

    //****************************************************************** */
    //********************  END OF KEYBOARD EVENTS **********************//

    //**************LOGIC ************************** */
    handleEvent: function(info) {
      //console.log("HANDLE");
      // console.log(info);
      //console.log(this.textIsSelected());

      // console.log (this.inputKindsEnum["KEY PATTERN"] === this.kindOfInput());

      //  if(this.kindOfInput() == this.inputKintdsEnum["KEY"] )

      switch (this.kindOfInput(info)) {
        case this.inputKindsEnum["STRING END"]:
          if (info.type === "keyDownEvent") {
            console.log("INSERT CHAR " + info.string + " AT THE END");
          } else if ((info.type = "pasteEvent")) {
            console.log("INSERT STRING " + info.string + " AT THE END");
          }

          break;
        case this.inputKindsEnum["STRING INSIDE"]:
          if (info.type === "keyDownEvent") {
            console.log(
              "INSERT CHAR " + info.string + " TO POSITIONS " + info.textCursor
            );
          } else if ((info.type = "pasteEvent")) {
            console.log(
              "INSERT STRING " +
                info.string +
                " TO POSITIONS " +
                info.textCursor +
                " TO " +
                (info.string.length + info.textCursor - 1)
            );
          }
          break;
        case this.inputKindsEnum["ERASE END"]:
          if (this.textWasSelected) {
            console.log(
              "ERASE " +
                (this.lastSelectionInfo.selectionEnd -
                  this.lastSelectionInfo.selectionStart) +
                " CHARS FROM THE END"
            );
          } else {
            console.log("ERASE LAST CHAR ");
          }

          break;
        case this.inputKindsEnum["ERASE INSIDE"]:
          if (this.textWasSelected) {
            console.log(
              "ERASE STRING FROM POSITIONS " +
                this.lastSelectionInfo.selectionStart +
                " TO " +
                (this.lastSelectionInfo.selectionEnd - 1)
            );
          } else {
            console.log("ERASE 1 CHAR  FROM POSITION " + (info.textCursor - 1));
          }
          break;
        case this.inputKindsEnum["REPLACE END"]:
          console.log("REPLACE END");

          console.log(
            "REMOVE " +
              (this.lastSelectionInfo.selectionEnd -
                +this.lastSelectionInfo.selectionStart) +
              " CHARS FROM THE END AND REPLACE THEM WITH " +
              info.string
          );

          break;
        case this.inputKindsEnum["REPLACE INSIDE"]:
          console.log(
            "REMOVE " +
              (this.lastSelectionInfo.selectionEnd -
                +this.lastSelectionInfo.selectionStart) +
              " CHARS FROM " +
              this.lastSelectionInfo.selectionStart +
              " TO " +
              (this.lastSelectionInfo.selectionEnd - 1) +
              " AND REPLACE THEM WITH " +
              info.string
          );
          break;
        case this.inputKindsEnum["KEY PATTERN"]:
          //console.log("KEY PATTERN");
          break;
        default:
          console.log("UNCAUGHT ENUMERATOR");
      }
    },
    textIsSelected: function() {
      return this.selectionActive;
    },
    controlKeyIsDown() {
      if (this.ctrlKeyDown) {
        return true;
      } else {
        return false;
      }
    },
    replaceText: function() {
      // this function is used to check our input events
      // and see if we have selected a text 1 step before
      // in this case the selected text is going to be removed
      // so we fire our ERASE event first and then we insert
      // the string ( keydown or paste).
      if (this.lastSelectionInfo.selectionEnd == this.textArray.length) {
        return this.inputKindsEnum["REPLACE END"];
      } else {
        return this.inputKindsEnum["REPLACE INSIDE"];
      }
    },
    handleLastSelected: function() {
      //if we press a key the text is no more selected
      //if we select and press something, the slected text
      //is replaced BUT the textarea doesnt know it was selected
      // because this event cancels the selection. so we keep
      // a to textWasSelected the previous value of selection
      //in order to know if something was selected 1 step before
      if (this.selectionActive) {
        this.textWasSelected = true;
        this.selectionActive = false;
      } else if (this.textWasSelected) {
        this.textWasSelected = false;
        this.selectionActive = false;
      }
    },
    kindOfInput: function(info) {
      // console.log(info);

      switch (info.type) {
        case "keyDownEvent":
          //we don't care about keydown events
          //if it's a ctrl+x or ctrl+v
          if (this.isKeyPattern()) {
            return this.inputKindsEnum["KEY PATTERN"];
          }

          this.handleLastSelected();

          //if it's backspace we use the erase command
          if (info.string === "Backspace") {
            if (info.textCursor === this.textArray.length) {
              return this.inputKindsEnum["ERASE END"];
            } else {
              return this.inputKindsEnum["ERASE INSIDE"];
            }
          }

          //means there are 2 commands. erase and insert
          if (this.textWasSelected) {
            return this.replaceText();
          }

          if (info.textCursor === this.textArray.length) {
            return this.inputKindsEnum["STRING END"];
          } else {
            return this.inputKindsEnum["STRING INSIDE"];
          }

          break;
        case "pasteEvent":
          //console.log("paste");

          this.handleLastSelected();

          //means there are 2 commands. erase and insert
          if (this.textWasSelected) {
            return this.replaceText();
          }

          if (info.textCursor === this.textArray.length) {
            return this.inputKindsEnum["STRING END"];
          } else {
            return this.inputKindsEnum["STRING INSIDE"];
          }

          break;
        case "cutEvent":
          //console.log("cutEvent event!");

          this.handleLastSelected();

          if (info.textCursor === this.textArray.length) {
            return this.inputKindsEnum["ERASE END"];
          } else {
            return this.inputKindsEnum["ERASE INSIDE"];
          }
          break;
      }

      return this.inputKindsEnum["-1"];
    },
    isKeyPattern() {
      // All the logic that let us know if at this moment
      // we are having a keyboard pattern or not
      if (this.controlKeyIsDown()) {
        //only ctrl checking for now
        return true;
      } else {
        return false;
      }
    },
    getPadID: function() {
      return this.padId;
    },
    createPad: function() {
      this.restService.createPadRequest().then(
        result => {
          CONFIG.padId = result.data.id;
          console.log("PAD created with id: "+CONFIG.padId);
          console.log(CONFIG);
        },
        function(err) {
          console.log("Error: Could not create pad");
        }
      );
    },
    loadPad:function(){
      console.log("LOAD PAD CLICKED!");
      this.restService.loadPadRequest(this.idInput)
    }
  },
  mounted() {
    //console.log(this.$refs);

    //in order not to change ever again and act as a real enum
    Object.freeze(this.inputKindsEnum);
    console.log(CONFIG);
  }
};
</script>
