<template>
    <div class="flex justify-center w-full h-[93vh] items-center">
        <div class="w-auto min-h-[400px] mx-auto p-6 bg-[#ffffff6b] backdrop-blur-sm rounded-lg shadow-md gap-4 col-center">
            <img class="logo" src="./../assets/images/logo.png" alt="logo">
            <h3 class="heading">Login</h3>
            <form @submit.prevent="Login">
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
                    <button type="submit" class="w-full px-4 py-2 border rounded-lg">Login</button>
                </div>
            </form>
            <div class="mb-4 f-start flex-col">
                <p>Are you a new user? <span class="text-blue-600 font-medium"><RouterLink to="/signup">Sign up</RouterLink></span></p>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LgoinPage",
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            errors: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        async Login() {
            this.errors = { email: '', password: '' }; // Clear previous errors
            const base_url = import.meta.env.VITE_BASE_URL;

            try {
                const response = await axios.get(`${base_url}/users?email=${this.form.email}&password=${this.form.password}`);

                console.log(response)
                if (response.status === 200 && response.data.length >= 0 && response.data.length <= 2) {
                    console.log(response)
                    // alert("Login successful!");
                    this.form.email = '';
                    this.form.password = '';
                    let userInfo = JSON.stringify(response.data[0]);
                    localStorage.setItem("userInfo", userInfo);
                    this.$router.push({name: "home"});
                }
                else{
                    alert("Please correct credentials :(")
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
            this.$router.push({name: "login"});
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











