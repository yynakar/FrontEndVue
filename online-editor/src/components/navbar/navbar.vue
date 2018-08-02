<template  src="./navbar.html" ></template>
<style  src="./navbar.css" scoped></style>


<script>
export default {
    name:"navbar",
    mounted(){
        bus.$on('settings-visibility',(data)=>{
            alert("settings visibility is about to be changed, before:"+this.visibility);
            this.visibility=data;
            alert("after:"+this.visibility);
        })
    },
    props: {
        visibility: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass">

</style>

