<template>
<h1 class="bg-teal-600 p-4 text-xl font-bold text-white"> Hello I'm <span class="font-mono">{{ name }}. from {{ city }}</span>
<br>
<b class="bg-green-300 text-black">
    {{ userObj }}</b>
</h1>
<button v-on:click="getData()">Click me</button>
</template>

<script>
export default {
    name: "Child_Component",
    props:{
        name:String,
        city: String,
        userObj:Object,
        getData: Function
    }
}
</script>
<style scoped>
button{
    background: #d6d6d6;
}</style>