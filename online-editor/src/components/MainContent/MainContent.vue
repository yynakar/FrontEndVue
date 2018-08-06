<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>

<script>
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
        takeID_test(){
            bus.$emit('takeID1_test',event);
           
        },
        makeSettingsVisible() {
            alert("Kalo to event gia to settings ap t main");
            bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
        },
        handler() {
            this.sendID();
            this.makeSettingsVisible();
        }
    }   

};
</script>
