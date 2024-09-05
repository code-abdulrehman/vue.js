<template>
    <div>

        <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
        <hr>
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h1 class="yello">Theo</h1>
            <h1 v-bind="$attrs" class="yellow">{{name}}</h1>
            <h1 class="yello">Marson</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TestComponent',
    inheritAttrs:false,
    props: {
        name: String,
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
