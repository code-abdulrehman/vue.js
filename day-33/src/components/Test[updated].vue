<template>
    <div>

        <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
        <hr>
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
    <h1 ref="count">

        {{ counter }}
    </h1>   
    <button v-on:click="this.counter = this.counter-1">-</button>
       <button v-on:click="this.counter = this.counter+1">+</button>
 
        </div>
    </div> 
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        name: String,
    },
    data(){
            console.warn("counter ", this.counter)
            
            return{
                counter:0
            }
        },

        beforeUpdate() { //36
            console.warn("beforeUpdate Ui ref:", this.$refs['count'].textContent)
            },
        updated() { //36
            console.warn("updated Ui ref:", this.$refs['count'].textContent)
            // console.warn("update:", this.counter)
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
