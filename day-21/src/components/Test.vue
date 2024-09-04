<template>
    <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
    <hr>

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
