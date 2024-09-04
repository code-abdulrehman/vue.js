<template>
    <h1>{{ name }}</h1>
    <button class="bg-red-700 text-yellow-100 p-2"
    v-on:click="setName(name)">
        click & send data in parent
    </button>
</template>

<script>

export default {
    name: "Child_Component",
    props:{
        setName: Function
    },
    data() {
        return {
            name: "theo marson"
        }
    },    
}
</script>