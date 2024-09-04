<template>
<h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
<hr>
<div v-html="tag"></div>
 <hr>
 <h1 v-html="h1">
 </h1>
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        name: null, //null  mean any (type of data)
    },
    data(){
        return{
            text:"Hello",
            h1: "<h1>H1 </h1>",
            // tag: "<h1> {{ name }}</h1>", //wrong
            tag: "<h1>" +this.name +"</h1>" //true
        }
    }
}
</script>
