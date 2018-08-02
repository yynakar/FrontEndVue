  <template  src="./edit.html" >
</template>
<style  src="./edit.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import users from '../users/index.vue'
import {bus} from '../../main'


export default {
    name:"edit",
  
    components: {
        'newPad':newPad,
        'users':users
    },
    /*Here will be placed the id we get from the backend*/
    props: {
        id: {
            type: Number,
            default: 5
        }
    },
    mounted(){
      bus.$on('datasended',(data) => {
        alert('ela ti leeii mpika mounted data edit newpad');
        alert(data);
        this.padId = data;
      })
    }
}
</script>