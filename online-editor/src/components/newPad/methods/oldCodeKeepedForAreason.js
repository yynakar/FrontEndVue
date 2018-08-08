
   //console.log(this.$refs);

// handleEvent: function(info) {
//       switch (this.kindOfInput(info)) {
//         case this.inputKindsEnum["STRING END"]:
//           if (info.type === "keyDownEvent") {
//             console.log("INSERT CHAR " + info.string + " AT THE END");
//           } else if ((info.type = "pasteEvent")) {
//             console.log("INSERT STRING " + info.string + " AT THE END");
//           }

//           break;
//         case this.inputKindsEnum["STRING INSIDE"]:
//           if (info.type === "keyDownEvent") {
//             console.log(
//               "INSERT CHAR " + info.string + " TO POSITIONS " + info.textCursor
//             );
//           } else if ((info.type = "pasteEvent")) {
//             console.log(
//               "INSERT STRING " +
//                 info.string +
//                 " TO POSITIONS " +
//                 info.textCursor +
//                 " TO " +
//                 (info.string.length + info.textCursor - 1)
//             );
//           }
//           break;
//         case this.inputKindsEnum["ERASE END"]:
//           if (this.textWasSelected) {
//             console.log(
//               "ERASE " +
//                 (this.lastSelectionInfo.selectionEnd -
//                   this.lastSelectionInfo.selectionStart) +
//                 " CHARS FROM THE END"
//             );
//           } else {
//             console.log("ERASE LAST CHAR ");
//           }

//           break;
//         case this.inputKindsEnum["ERASE INSIDE"]:
//           if (this.textWasSelected) {
//             console.log(
//               "ERASE STRING FROM POSITIONS " +
//                 this.lastSelectionInfo.selectionStart +
//                 " TO " +
//                 (this.lastSelectionInfo.selectionEnd - 1)
//             );
//           } else {
//             console.log("ERASE 1 CHAR  FROM POSITION " + (info.textCursor - 1));
//           }
//           break;
//         case this.inputKindsEnum["REPLACE END"]:
//           console.log("REPLACE END");

//           console.log(
//             "REMOVE " +
//               (this.lastSelectionInfo.selectionEnd -
//                 +this.lastSelectionInfo.selectionStart) +
//               " CHARS FROM THE END AND REPLACE THEM WITH " +
//               info.string
//           );

//           break;
//         case this.inputKindsEnum["REPLACE INSIDE"]:
//           console.log(
//             "REMOVE " +
//               (this.lastSelectionInfo.selectionEnd -
//                 +this.lastSelectionInfo.selectionStart) +
//               " CHARS FROM " +
//               this.lastSelectionInfo.selectionStart +
//               " TO " +
//               (this.lastSelectionInfo.selectionEnd - 1) +
//               " AND REPLACE THEM WITH " +
//               info.string
//           );
//           break;
//         case this.inputKindsEnum["KEY PATTERN"]:
//           //console.log("KEY PATTERN");
//           break;
//         default:
//           console.log("UNCAUGHT ENUMERATOR");
//       }
//     },