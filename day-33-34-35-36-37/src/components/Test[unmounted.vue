<template>
    <div>

        <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
        <hr>
        <button v-on:click="show = !show">Toggle</button>
        <div v-if="show" class="w-full mt-4 border-2 border-black max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
            <HelloWorld />
    </div> 
    </div> 
</template>
<script>
import HelloWorld from './HelloWorld.vue';


export default {
    
    name: 'TestComponent',
    components:{
        HelloWorld
    },
    props: {
        name: String,
    },
    data(){
            return{
                show:true
            }
        },
}
</script>

<style scoped>
body{
    background: #000000d2;
    color: #ffffff;
}
.yellow {
    background: #c99300;
    padding: 4px;
    font-size: large
}

h1 {
    font-size: 40px;
    font-weight: 700;
}

button {
    background: #241f1f;
    padding: 10px;
    font-size: 30px;
    color: #fffef9;
}
button:active{
    background: #f3f3f3;
    color: #c99300;
}

</style>
