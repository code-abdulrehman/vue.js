<template>
    <div>
      <h1 class="bg-teal-400 text-4xl font-bold p-4">{{ ids }} {{ name }}</h1>
      <hr />
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
        Hi, How are You, {{ name }}
      </div>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'TestComponent',
    data(){
        return{
            ids: null,
            name: "Theo"
        }
    },
    mounted() {
      const route = useRoute();
      const id = route.params.id || 'Default id'; // Use route params to get the name if provided
      console.log(route.params); // Log route parameters
      this.ids = route.params.id
      return {
        id,
      };
    },
  };
  </script>
  
  <style scoped>
  .yellow {
    background: #c99300;
    color: #ffffff;
    padding: 4px;
    font-size: large;
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
  button:active {
    background: #f3f3f3;
    color: #c99300;
  }
  </style>
  