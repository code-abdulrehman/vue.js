<template>
    <div class="flex gap-4 p-2 items-center">
        <button class="border rounded p-2 border-slate-600 active:text-white active:bg-slate-500" @click="counter++"> increment</button>{{ counter }}
        <button class="border rounded p-2 border-slate-600 active:text-white active:bg-slate-500" @click="counter--"> decrement</button>
    </div>
</template>
<script setup>
import { ref } from "vue"
const counter = ref(0)

</script>