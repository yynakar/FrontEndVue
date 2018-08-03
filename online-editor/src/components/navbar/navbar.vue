<template  src="./navbar.html" ></template>
<style  src="./navbar.css" scoped></style>


<script>
export default {
    name:"navbar",
    mounted(){
        bus.$on('settings-visibility-editToNav',(data)=>{
            alert("settings visibility is about to be changed in nav, before:"+this.visibility);
            this.visibility=data;
            alert("after:"+this.visibility+"(should be true");
        })
    },
    data: function(){
        return{
            visibility:false
        }
    }
}
</script>

<style lang="sass">

</style>

