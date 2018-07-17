<template  src="./newPad.html" ></template>
<style  src="./newPad.css" scoped></style>


<script>
export default {
    name:"newPad",
    methods:{
        selectEvent: function(event){

            var length = event.target.selectionEnd-event.target.selectionStart;

            var info = {
                type:'selectEvent',
                selectionEnd:event.target.selectionEnd,
                selectionStart:event.target.selectionStart,
                length:length
            }

            console.log(info);
            return info;
        },
        keyDownEvent: function(event){
            //BE WARE! textcursor starts from 0

           var info = {
                type:'keyDownEvent',
                key:event.key,
                textCursor:event.target.selectionEnd
            }

            // console.log(event);
            console.log(info);
            return info;
        },
        clickEvent: function(event){
            //console.log("clickEvent!");
            //console.log(event);
        },
        pasteEvent: function(event){
            //our text cursor has the value of the text cursor position
            //the user had excactly before the paste event

            var info = {
                type:'pasteEvent',
                string:event.clipboardData.getData('Text'),
                length:event.clipboardData.getData('Text').length,
                textCursor: event.target.selectionEnd
            }

            console.log(info);
            return info;
        },
        cutEvent: function(event){
            var info = {
                type:'cutEvent',
                string:event.clipboardData.getData('Text'),
                length:event.clipboardData.getData('Text').length,
                textCursor: event.target.selectionEnd
            }
            console.log("cutEvent");
            console.log(event);
            console.log(info);
        },


    },
    mounted(){
        console.log(this.$refs);
    }
}
</script>
