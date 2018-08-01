<template  src="./edit.html" >
    <router-view></router-view>
</template>
<style  src="./edit.css" scoped></style>


<script>
import newPad from '../newPad/newPad.vue'
import users from '../users/index.vue'
import About from '../AboutPage/AboutPage.vue'
import Settings from '../Settings/Settings.vue'

export default {
    name:"edit",
    components: {
        'newPad':newPad,
        'users':users,
        'About':About,
        'Settings':Settings
    },
    /*TODO:Here will be placed the id we get from the backend*/
    props: {
        id: {
            type: Number,
            default: 5
        }
    }
}
</script>