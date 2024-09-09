<template>
    <div v-if="open" class="bg-[#fcfcfc9a] filter:blur-md drop-shadow-md absolute h-full w-screen flex flex-col justify-center items-center">
<span class="relative -top-40 w-full flex justify-end items-center px-40 mt-10 mr-4">
    <span class="text-white bg-red-500 rounded-md p-2 px-6 cursor-pointer" v-on:click="closeForm"> Close</span>
    
</span>
<br>
        <div class="min-w-[300px] max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
            <h1 class="text-4xl font-bold p-4"> Form</h1>

        <div class="mb-4">
                <label for="first_name" class="block text-gray-700 font-bold mb-2">first name</label>
                <input type="text" id="first_name" placeholder="Enter your first name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.name">
            </div>
        <div class="mb-4">
                <label for="job" class="block text-gray-700 font-bold mb-2">Job</label>
                <input type="text" id="job" placeholder="Enter your job" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.job">
            </div>

        
            <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" v-on:click="createMethod()">Create user</button>
</div>
        <pre class="m-6">
            {{ form }}
        </pre>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: "PostForm",
    props: {
        open:{
            type: Boolean,
        }
    },
    data(){
        return{
            form: {
                name:'',
                job:''
            },
        }
    },
    methods: {
       async createMethod(){
            let req = await axios.post('https://reqres.in/api/users',{
                name: this.form.name,
                job: this.form.job
            });
          console.log("req :",req)
            console.log(this.form)
        },
    // Emit an event to the parent to close the form
    closeForm() {
      this.$emit('close');
    }
  }
}
</script>
<style scoped>
</style>