<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import {bus} from '../../main'

export default {
    name:"MainContent",
    data:function(){
        return {
            padID: ''
        }
    },
    methods:{
        sendID(){
            alert('send id');
            bus.$emit('datasended',this.padID);
            alert('send id meta'); 
       },
       requestForNewID(){
           //lets talk with back to let them know that we created a new pad so they generate a new id
            alert("Button pressed yay");
           //with existing methods of restservice.js, createPadRequest and loadPadRequest
       }
    }
}
</script>
