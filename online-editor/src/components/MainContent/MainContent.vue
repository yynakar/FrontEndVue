<template  src="./MainContent.html" >
    <router-view></router-view>
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import navbar from '../navbar/navbar.vue'
import users from '../users/index.vue'
import {bus} from '../../main'
import EventBus from '../../event-bus';


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

           //with existing methods of restservice.js, createPadRequest and loadPadRequest
       }
    }
}
</script>
