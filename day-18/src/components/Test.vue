<template>
    <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
    <hr>
    <div class="green">
        hello green => simple class
    </div>
    <hr><br>
    <div :class="{ green: colorFull, yellow: !colorFull }">
        hello green => class binding
    </div>
    <div :class="cssClasse">
        hello yellow => class binding
    </div>
    <button v-on:click="colorFull = !colorFull">classes Toggle</button>

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
            colorFull: true
        }
    },
    computed: {
        cssClasse() {
            return {
                green: !this.colorFull,
                yellow: this.colorFull,
            };
        },
    }
}
</script>

<style scoped>
.green {
    background: #50e950;
    padding: 4px;
    font-size: large
}

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
