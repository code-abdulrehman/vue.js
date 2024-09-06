
<template>
           <div class="w-full items-center p-6 bg-white rounded-lg shadow-md gap-6 flex flex-col">
        <h1>ParentComponent</h1>
        
        <!-- <ChildComponent text="This is text 1"/>
        <ChildComponent text="This is text 2"/> -->
  
        <ChildComponent>
            <code>Hy Im slotable</code>
        </ChildComponent>
        <ChildComponent>
<Test name="theo marson"/>
<a href="#test">Test Componnet link</a>
        </ChildComponent>

        <ChildComponent>
            <img src="./assets/logo.png" alt="logo">
        </ChildComponent>


        <ChildComponent>
            <!-- empty  -->
        </ChildComponent>




    </div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
import Test from './components/Test.vue';


export default {
    name: 'ParentComponent',
    props:{
        text: String
    },
    components:{
        ChildComponent,
        Test
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