<template>
    <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
    <hr>
    <div class="flex flex-wrap justify-center  border p-2 bg-gray-200 text-slate-800">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h1>Data:</h1>
            <p>Type: {{ typeof(text) }}</p>
            <p>Data:{{ text }}</p>
            <hr>
    
            <div class="mb-4">
                <input type="text" placeholder="Enter text"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required v-model.lazy.trim="text">
                    <!-- required v-model.number.lazy.trim="text"> -->
            </div> 

            </div>
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
            text: '',

        }
    },
    methods:{
    
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
h1{
    font-size: 40px;
    font-weight: 700;
}
</style>
