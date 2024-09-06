
<template>
    <div class="w-full items-center p-6 bg-white rounded-lg shadow-md gap-6 flex flex-col">
 <h1>ParentComponent</h1>
 
 <!-- <ChildComponent text="This is text 1"/>
 <ChildComponent text="This is text 2"/> -->

 <ChildComponent>
 <template v-slot:header>
     <code>Hy Im slotable  header 1</code> <br> 
     <code>Hy Im slotable  header 2</code> <br> <hr>
     <!-- <ChildComponent>
              <template v-slot:footer>
     <code>Hy Im slotable footer 1</code> <br> 
     <code>Hy Im slotable footer 2</code> <br> <hr>
 </template>
     </ChildComponent> -->
 </template>
 <template v-slot:main>
     <code>Hy Im slotable main 1</code> <br> 
     <code>Hy Im slotable main 2</code> <br> 
     <img src="./assets/logo.png" width="40" alt="">
     <hr>
     
 </template>
 <template v-slot:footer>
     <code>Hy Im slotable footer 1</code> <br> 
     <code>Hy Im slotable footer 2</code> <br> <hr>
 </template>
 </ChildComponent>

 

 <ChildComponent>
     <!-- empty  -->
 </ChildComponent>




</div>
</template>

<script>
import ChildComponent from './components/ChildComponent.vue';
// import Test from './components/Test.vue';


export default {
name: 'ParentComponent',
props:{
 text: String
},
components:{
 ChildComponent,
 // Test
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