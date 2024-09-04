<template>
<h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>

form
<div class="group flex flex-col justify-center items-center flex-wrap gap-4 text-2xl border p-4 bg-slate-600 text-gray-50">
<div class="who flex items-center flex-col justify-center">
   <div class="flex justify-between gap-6 items-center">
    <div class="flex items-center gap-4">
        <input type="radio" id="devloper" value="devloper" name="who" v-model="who">
        <label for="devloper">devloper</label>
    </div>
    <div class="flex items-center gap-4">
        <input type="radio" id="hacker" value="hacker" name="who" v-model="who">
        <label for="hacker">hacker</label>
    </div>
    <div class="flex items-center gap-4">
        <input type="radio" id="teacher" value="teacher" name="who" v-model="who">
        <label for="teacher">teacher</label>
    </div>
    <div class="flex items-center gap-4">
        <input type="radio" id="designer" value="designer" name="who" v-model="who">
        <label for="designer">designer</label>
    </div>
   </div>
    <h3>Who I'm a {{ who }}</h3>
</div>
    <hr>
    <h1>Technology</h1>
    <div class="flex items-center gap-4">
        <input type="checkbox" id="java" value="java" v-model="technology">
        <label for="java">java</label>
    </div>
    <div class="flex items-center gap-4">
        <input type="checkbox" id="php" value="php" v-model="technology">
        <label for="php">php</label>
    </div>
    <div class="flex items-center gap-4">
        <input type="checkbox" id="html" value="html" v-model="technology">
        <label for="html">html</label>
    </div>
    <div class="flex items-center gap-4">
        <input type="checkbox" id="css3" value="css3" v-model="technology">
        <label for="css3">css3</label>
    </div>
    <!-- <button  v-on:click="null">Submit</button> -->
<h3>selected technology: {{ technology }}</h3>
</div> 
</template>

<script>
export default {
    name: 'TestComponent',
    props: {
        name: null, //null  mean any (type of data)
    },
    data() {
        return {
            technology:[],
            who:null
        }
    },
    // 11 vide 
    methods: {
   
    }
}
</script>

<style scoped>
p {
    border: 2px solid red;
    padding: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
button{margin-top: 10px;
    padding: 4px;
    border: 2px solid black;
}
button:active{
    color: #ff0606;
    background: #000;
}
</style>
