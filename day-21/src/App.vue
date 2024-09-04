<template>
  <HelloWorld msg="Hello"/>
  <TestComponent name="Abdulrehman"/>
  <Child_Component :setName="getName"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './components/Test.vue'
import Child_Component from './Child_Component.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    TestComponent, 
    Child_Component

  },
  data(){
    return{
    }
  },
  methods:{
    getName(name){
      alert("hi, " +name +". How are you")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
