<template  src="./Settings.html" ></template>
<style  src="./Settings.css" scoped></style>


<script>
import {bus} from '../../main'

export default {
    name:"Settings",
    data:function(){
        return {
            padID:''
        };
    },
    methods:{},
    created(){
      bus.$on('datasended',(data) => {
       this.padID = data;
      })

    }
    
}
</script>
