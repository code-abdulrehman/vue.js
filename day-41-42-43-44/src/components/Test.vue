<template>
<h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
 
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        name: null, //null  mean any (type of data)
    }
}
</script>
