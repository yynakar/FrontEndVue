<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import navbar from '../navbar/navbar.vue'
import users from '../users/index.vue'
import {bus} from '../../main'



export default {
    name:"MainContent",
    data:function(){
        return {
            padID: '',
            flag:'1',
            navbaRseTvisibility: true
        }
    },
    methods:{
        sendID(){
            bus.$emit('datasended',this.padID)
        },
        takeID(){
            bus.$emit('takeID1',this.flag);
        },
        makeSettingsVisible() {
            //alert("Kalo to event gia to settings ap t main");
            bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
        },
        handler() {
            alert("methods handler is on, two methods are about to be executed:sendID and makeSettingsVisible");
            this.sendID();
            this.makeSettingsVisible();
        }
    }   

};
</script>
