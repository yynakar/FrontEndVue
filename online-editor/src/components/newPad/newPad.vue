<template  src="./newPad.html" ></template>
<style  src="./newPad.css" scoped></style>


<script>
export default {
    name:"newPad",
    methods:{
        selectEvent: function(event){
            console.log("Select event!");
            console.log(event);
        },
        keyDownEvent: function(){
            console.log("keyDownEvent!");
        },
        clickEvent: function(event){
            console.log("clickEvent!");
            console.log(event);
        },
        pasteEvent: function(){
            console.log("pasteEvent");
        },
        cutEvent: function(){
            console.log("cutEvent");
        },


    },
    mounted(){
        console.log(this.$refs);
    }
}
</script>
