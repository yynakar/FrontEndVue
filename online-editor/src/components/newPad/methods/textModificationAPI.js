import CONFIG from "../../../config.json";

export default {

    insertStringAtTheEnd: function (info) {
        console.log("insert at the end calleddd");
        var modInfo = {
            Req_date: null,
            Value: info.string,
            Start: info.textCursor,
            End: info.textCursor,
            Pad_ID: CONFIG.padId,
        };

        this.restService.modifyPad(modInfo);
    },
    insertStringInside: function (info) {
        var modInfo = {
            Req_date: null,
            Value: info.string,
            Start: info.textCursor,
            End: info.textCursor,
            Pad_ID: CONFIG.padId
        };

        // if (info.type === "keyDownEvent") {
        //   console.log(
        //     "INSERT CHAR " + info.string + " TO POSITIONS " + info.textCursor
        //   );
        // } else if ((info.type = "pasteEvent")) {
        //   console.log(
        //     "INSERT STRING " +
        //       info.string +
        //       " TO POSITIONS " +
        //       info.textCursor +
        //       " TO " +
        //       (info.string.length + info.textCursor - 1)
        //   );
        // }

        this.restService.modifyPad(modInfo);
    },
    eraseChar: function (info) {
        var modInfo = {
            Req_date: Date.now(),
            Value: "",
            Start: info.textCursor - 1,
            End: info.textCursor,
            Pad_ID: CONFIG.padId
        };

        this.restService.modifyPad(modInfo);
    },
    eraseSelectedString: function (info) {
        var modInfo = {
            Req_date: Date.now(),
            Value: "",
            Start: this.lastSelectionInfo.selectionStart,
            End: this.lastSelectionInfo.selectionEnd,
            Pad_ID: CONFIG.padId
        };

        this.restService.modifyPad(modInfo);
    },

}