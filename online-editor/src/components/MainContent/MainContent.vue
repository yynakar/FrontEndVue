<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>

<script>
<<<<<<< HEAD
import {bus} from '../../main'
import {store} from '../../store/store'



export default {
    name:"MainContent",
    data:function(){
        return {
            padID: '',
            navbaRseTvisibility: true,
            create:"create",
           // temp:''
        }
    },
    methods:{
        // sendID(){
        //     bus.$emit('datasended',this.padID);
        // },
        makeSettingsVisible() {
            bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
        },
        handler() {
            // this.sendID();
            this.makeSettingsVisible();
        }
    },
    computed:{
         count(){
             return this.$store.state.temp;
         }
    },

=======
import { bus } from "../../main";

export default {
  name: "MainContent",
  data: function() {
    return {
      padID:'',
      navbaRseTvisibility: true,
      create: "create"
    };
  },
  methods: {
    makeSettingsVisible() {
      bus.$emit("settings-visibility-mainToEdit", this.navbaRseTvisibility);
    },
    handler() {
      this.makeSettingsVisible();
    }
  }
>>>>>>> 153ab4c261a40c17b366b93e942e0e8d4b6145dc
};
</script>
