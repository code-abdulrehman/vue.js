<template>
    <div class="flex justify-center w-full h-[93vh] items-center">
        <div class="w-auto min-h-[400px] mx-auto p-6 bg-[#ffffff6b] backdrop-blur-sm rounded-lg shadow-md gap-4 col-center">
            <img class="logo" src="./../assets/images/logo.png" alt="logo">
            <h3 class="heading">Sign Up</h3>
            <form @submit.prevent="SignUp">
                <div class="mb-4 f-start flex-col">
                    <label for="name" class="b-start font-mediummb-1">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.name"/>
                    <small class="error b-start max-h-[20px] bg-slate-500 txt-flow">{{ errors.name }}</small>
                </div>
                <div class="mb-4 f-start flex-col">
                    <label for="email" class="b-start font-mediummb-1">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.email"/>
                    <small class="error b-start max-h-[20px] bg-slate-500 txt-flow">{{ errors.email }}</small>
                </div>
                <div class="mb-4 f-start flex-col">
                    <label for="password" class="b-start font-mediummb-1">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required v-model="form.password"/>
                    <small class="error b-start max-h-[20px] bg-slate-500 txt-flow">{{ errors.password }}</small>
                </div>
                <div class="mb-4">
                    <button type="submit" class="w-full px-4 py-2 border rounded-lg">Sign Up</button>
                </div>
            </form>
            <div class="mb-4 f-start flex-col">
                <p>Already signed up? <span class="text-blue-600 font-medium"><RouterLink to="/login">Login</RouterLink></span></p>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUpPage",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            },
            errors: {
                name: '',
                email: '',
                password: ''
            }
        };
    },
    methods: {
        async SignUp() {
            this.errors = { name: '', email: '', password: '' }; // Clear previous errors
            const base_url = import.meta.env.VITE_BASE_URL;

            try {
                const response = await axios.post(`${base_url}/users`, {
                    name: this.form.name,
                    email: this.form.email,
                    password: this.form.password
                });

                if (response.status === 201) {
                    // console.log(response)
                    // alert("Signup successful!");
                    this.form.name = '';
                    this.form.email = '';
                    this.form.password = '';
                    let userInfo = JSON.stringify(response.data);
                    localStorage.setItem("userInfo", userInfo);
                    this.$router.push({name: "home"});
                }
            } catch (error) {
                if (error.response) {
                    // Server-side error
                    const errMsg = error.response.data.message || 'An error occurred.';
                    if (error.response.status === 400) {
                        this.errors.name = errMsg;
                        alert(error.response.data.message)
                    }
                } else {
                    console.error('Error:', error.message);
                }
            }
        }
    },
    mounted() {
        let userInfo = localStorage.getItem('userInfo');
        if(userInfo){
            this.$router.push({name: "home"});
        }else{
            this.$router.push({name: "signup"});
        }
    }
}
</script>

<style scoped>
.logo {
    width: 100px;
}
.error {
    color: #ec0c0c;
    font-weight: 500;
}
</style>
