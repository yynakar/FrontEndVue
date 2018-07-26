<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import index from '../users/index.vue'
import navbar from '../navbar/navbar.vue'

export default {
    name:"MainContent",
    methods:{
    },
    components: {
        'navbar':navbar,
        'newPad':newPad,
        'users':index
    }
}
</script>
