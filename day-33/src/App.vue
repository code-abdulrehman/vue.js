<template>
  <HelloWorld msg="Hello"/>
  <TestComponent name="Abdulrehman" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestComponent from './components/Test[unmounted.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TestComponent, 
    

  },
  data(){
    return{
    }
  },
  methods:{

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
