<template>
    <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
    <hr>
    <h2>form data:</h2>
    <p>email:
       <b>
           {{ form.email}}
       </b> 
    </p>
    <p>pasword:
        <b>
            {{ form.password}}
        </b>
    </p>
    <hr>
    <div class="flex flex-wrap justify-center  border p-2 bg-gray-200 text-slate-800">

        <form>
            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" placeholder="Enter your email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.email">
            </div>

            <!-- Password Input -->
            <div class="mb-6">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" placeholder="Enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.password">
            </div>

            <!-- Submit Button -->
            <div>
                <button type="button" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" v-on:click="login()">
                    Login
                </button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        name: null, //null  mean any (type of data)
    },
    data() {
        return {
            text: "Hello",
            form:{
                email:"",
                password:""
            }
        }
    },
    methods:{
        login(){
            if(this.form.email == "" || this.form.password == ""){
                console.warn("plase write correct email and password c")
            }    else{
            console.log("LOGIN data", this.form) 

        }
        }
    }
}
</script>

<style scoped>

.yellow {
    background: #d49e07;
    color: #ffffff;
    padding: 4px;
    font-size: large
}

</style>
