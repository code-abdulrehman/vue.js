<template>
<div>
<li>
    <button 
    v-for="btn in btns" 
    v-bind:key="btn.name" 
    @click="tab = btn.link"
 :class="{ buttonActive: tab === btn.link }"
    >{{ btn.name }} </button>
</li>
    <div class="w-full p-6 bg-white rounded-lg shadow-md gap-4 flex flex-col">
        <component :is="tab" />
    </div>
</div>
</template>

<script>
import HTMLComponent from './tabs/HTML.vue';
import CSS3Component from './tabs/CSS3.vue';
import JSComponent from './tabs/JS.vue';
import NODEComponent from './tabs/NODE.vue';
import PHPComponent from './tabs/PHP.vue';
import PYTHONComponent from './tabs/PYTHON.vue';
import SQLComponent from './tabs/SQL.vue';

export default {
    name: 'TestComponent',
    components: {
        HTMLComponent,
        CSS3Component,
        JSComponent,
        NODEComponent,
        PHPComponent,
        PYTHONComponent,
        SQLComponent,
    },
    props: {
        name: String,
    },
    data() {
        return {
            tab: 'HTMLComponent',
            btns:[
            {name:"HTML",link:"HTMLComponent"},
        {name:"CSS3",link:"CSS3Component"},
        {name:"JS",link:"JSComponent"},
        {name:"NODE",link:"NODEComponent"},
        {name:"PHP",link:"PHPComponent"},
        {name:"PYTHON",link:"PYTHONComponent"},
        {name:"SQL",link:"SQLComponent"},
            ],
        }
    },
}
</script>

<style scoped>
.yellow {
    background: #c99300;
    color: #ffffff;
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
    border: 2px solid black;
}

button:active {
    background: #f3f3f3;
    color: #c99300;
}
.buttonActive {
    background: #f3f3f3;
    color: #c99300;
    border: 2px dashed black;
}
</style>
