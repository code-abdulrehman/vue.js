<template>
    <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
    <hr>
    <div class="flex flex-wrap justify-center  border p-2 bg-gray-200 text-slate-800">
{{  req }}
<li class="errItems" v-for="e in err" v-bind:key="e">
   
    {{ e }} not valid

</li>
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <form>
            <!-- Email Input -->
            <div class="mb-4">
                <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" placeholder="Enter your email"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required v-model="form.email">
            </div>

            <!-- Password Input -->
            <div class="mb-4">
                <label for="password" class="block text-gray-700 font-bold mb-2">Password</label>
                <input type="password" id="password" placeholder="Enter your password"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required v-model="form.password">
            </div>

            <!-- Skills Input (Checkboxes) -->
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2">Skills</label>
                <div class="flex items-center mb-2">
                    <input type="checkbox" id="skill_html" class="mr-2" value="HTML" v-model="form.skills">
                    <label for="skill_html" class="text-gray-700">HTML</label>
                </div>
                <div class="flex items-center mb-2">
                    <input type="checkbox" id="skill_css" class="mr-2" value="CSS" v-model="form.skills">
                    <label for="skill_css" class="text-gray-700">CSS</label>
                </div>
                <div class="flex items-center mb-2">
                    <input type="checkbox" id="skill_js" class="mr-2" value="JavaScript" v-model="form.skills">
                    <label for="skill_js" class="text-gray-700">JavaScript</label>
                </div>
                <div class="flex items-center mb-2">
                    <input type="checkbox" id="skill_php" class="mr-2" value="php" v-model="form.skills">
                    <label for="skill_php" class="text-gray-700">php</label>
                </div>
            </div>

            <!-- Country  -->
            <div class="mb-4">
                <label for="age" class="block text-gray-700 font-bold mb-2">Country</label>
                <select
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required v-model="form.country">
                    <option value="  " selected>select your country</option>
                    <option value="pk">Pk</option>
                    <option value="ch">ch</option>
                    <option value="in">in</option>
                    <option value="usa">USA</option>
                </select>
            </div>
            <!-- Age Input -->
            <div class="mb-4">
                <label for="age" class="block text-gray-700 font-bold mb-2">Age</label>
                <input type="number" id="age" placeholder="Enter your age"
                    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required v-model="form.age">
            </div>

            <!-- Gender Input (Radio Buttons) -->
            <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2">Gender</label>
                <div class="flex items-center mb-2">
                    <input type="radio" id="male" name="gender" value="male" class="mr-2" checked v-model="form.gender">
                    <label for="male" class="text-gray-700">Male</label>
                </div>
                <div class="flex items-center">
                    <input type="radio" id="female" name="gender" value="female" class="mr-2" v-model="form.gender">
                    <label for="female" class="text-gray-700">Female</label>
                </div>
            </div>

            <!-- Submit Button -->
            
                <button type="button" class="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" v-on:click="login()">
                    Login
                </button>
        </form>
            </div>
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
                password:"",
                skills: [],
                age:"",
                gender:true, 
                country:""
            },
            req : {},
            err: []
        }
    },
    methods:{
        // login(){    //23
        //     if(this.form.email == "" || this.form.password == ""){
        //         console.warn("plase write correct email and password c")
        //     }    else{
        //         this.req = this.form
        //     console.log("LOGIN data", this.form) 

        // }
        // this.form = {}
        // }

        login(){  //24
            this.err = []
            this.req = {}
            for(const item in this.form){
                if(this.form[item] === "" || this.form[item].length === 0){
                    this.err.push(item)
                }
            }
            if(this.err.length === 0){

                alert("Data successesfully submit..")
                this.req = this.form
                this.form = {}
            }
            console.log("Form Data", this.form)
            console.warn("Error", this.err)
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
.errItems {
    color: #e90a0a;
    font-size: 12px;
    padding: 2px;
}
</style>
