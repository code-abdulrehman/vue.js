<template>
          <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
       
        <h1>child</h1>
        
        <slot>
        <marquee>by default in child</marquee>    
        </slot>
        
        <!-- {{text}} -->
    </div>
</template>

<script>
export default {
    name: 'ChildComponent',
    // props:{
    //     text: String
    // }
}
</script>
<style scoped>
h1{
    font-size: 27px;
    font-weight: 700;
}
div{
    border: 2px solid rgb(13, 138, 196);
    padding: 4px;
}

 </style>