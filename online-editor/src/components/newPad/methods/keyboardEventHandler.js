import CONFIG from "../../../config.json";


export default {
  handleEvent: function (info) {
    switch (this.kindOfInput(info)) {

      case this.inputKindsEnum["STRING END"]:
        this.insertStringAtTheEnd(info);
        break;

      case this.inputKindsEnum["STRING INSIDE"]:
        this.insertStringInside(info);
        break;

      case this.inputKindsEnum["ERASE END"]:
        if (this.textWasSelected) {
          this.eraseSelectedString(info);
        } else {
          this.eraseChar(info);
        }
        break;

      case this.inputKindsEnum["ERASE INSIDE"]:
        if (this.textWasSelected) {
          this.eraseSelectedString(info);
        } else {
          this.eraseChar(info);
        }
        break;

      case this.inputKindsEnum["REPLACE END"]:
      this.replaceString(info);
      break;

      case this.inputKindsEnum["REPLACE INSIDE"]:
      this.replaceString(info);
        break;

      case this.inputKindsEnum["KEY PATTERN"]:
        //console.log("KEY PATTERN");
        break;
        
      default:
        console.log("UNCAUGHT ENUMERATOR");
    }
  },
  textIsSelected: function () {
    return this.selectionActive;
  },
  controlKeyIsDown() {
    if (this.ctrlKeyDown) {
      return true;
    } else {
      return false;
    }
  },
  replaceText: function () {
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
  handleLastSelected: function () {
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
  kindOfInput: function (info) {
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
}