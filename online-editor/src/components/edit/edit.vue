  <template  src="./edit.html" >
</template>
<style  src="./edit.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import users from '../users/index.vue'

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
    }
}
</script>