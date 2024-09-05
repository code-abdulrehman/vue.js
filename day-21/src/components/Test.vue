<template>
    <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
    <hr>
    <div class="flex flex-wrap gap-4 border p-2 bg-gray-800 text-slate-200">
  <input type="text" id="" placeholder="enter ..." class="text-black active:border-0" ref="inputText">

        <button class="text-yellow-100 border border-red-400 active:bg-purple-600" v-on:click="getData()">Submit</button>
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
            text: "Hello",
        }
    },
    methods:{
        getData(){
            this.$refs.inputText.focus();
            this.$refs.inputText.style.border = "5px solid red"
            let inpV = this.$refs.inputText.value;
            console.log(inpV)
        }
    }
}
</script>

<style scoped>

.yellow {
    background: #d49e07;
    color: #ffffff;
    padding: 4px;
    font-size: large
}

button {
    border: 2px solid blue;
    background: #000;
    color: bisque;
    padding: 4px;
}

button:active {
    color: #000;
    background: bisque;

}
</style>
