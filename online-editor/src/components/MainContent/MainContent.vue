<template  src="./MainContent.html" >
</template>
<style  src="./MainContent.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import index from '../users/index.vue'

export default {
    name:"MainContent",
    methods:{
    },
    components: {
        'newPad':newPad,
        'users':index
  }
}
</script>
