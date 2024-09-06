
<template>
           <div class="w-full items-center p-6 bg-white rounded-lg shadow-md gap-6 flex flex-col">
        <h1>ParentComponent</h1>
        
        <Teleport to="#footer">
            <FooterComponent/>
        </Teleport>



    </div>
</template>

<script>

import FooterComponent from './components/Footer.vue';

export default {
    name: 'ParentComponent',
    props:{
        text: String
    },
    components:{
        FooterComponent,
    }
}
</script>
<style scoped>
h1{
    font-size: 27px;
    font-weight: 700;
}
a{
    text-decoration: underline;
    color: blue;
}
a:visited{
    text-decoration: underline;
    color: rgb(138, 0, 173);
}
 </style>