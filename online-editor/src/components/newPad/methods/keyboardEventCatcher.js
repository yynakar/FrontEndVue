export default{
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
  
}