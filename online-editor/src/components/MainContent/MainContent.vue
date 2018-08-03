<template  src="./MainContent.html" >
    <router-view></router-view>
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import navbar from '../navbar/navbar.vue'
import users from '../users/index.vue'
import {bus} from '../../main'
//import EventBus from '../../event-bus';


export default {
    name:"MainContent",
    data:function(){
        return {
            padID: ''
        }
    },
    methods:{
        sendID(){
            alert('sendID called');
            bus.$emit('datasended',this.padID);
           // EventBus.$emit('datasended1', this.padID);       
            alert('sendID after data sending'); 
       },
       takeID(){
           alert('takeID called');
           //to-do
           //na stelnete aithma sto server gia generat ID

       }
    }
}
</script>
