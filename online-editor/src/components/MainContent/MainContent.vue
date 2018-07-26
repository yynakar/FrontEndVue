<template  src="./MainContent.html" >
    <router-view></router-view>
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import navbar from '../navbar/navbar.vue'
import users from '../users/index.vue'

export default {
    name:"MainContent",
    methods:{
    },
    components: {
        'navbar':navbar,
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
