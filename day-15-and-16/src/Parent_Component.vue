<template>
    <Child_Component :name="user.name" :city="user.city" :userObj="user.name" :getData="getData"/>
</template>

<script>
import Child_Component from './components/Child_Component.vue';

export default {
    name: "Parent_Component",
    components: {
        Child_Component,
    },
    data() {
        return {
            user:{
                    name:"Theo m",
                    city: "HSP"
            }
        }
    },    
    methods:{
        getData(){
            console.log("This is child");
            alert("Call in Parent compoent")
        }
    }
}
</script>