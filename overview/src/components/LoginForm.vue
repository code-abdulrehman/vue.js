<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-sm p-6 bg-white rounded shadow-md">
        <h2 class="mb-6 text-2xl font-bold text-center text-gray-700">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block mb-2 text-sm font-medium text-gray-700" for="email">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-gray-700" for="password">Password</label>
            <input
              v-model="password"
              type="password"
              id="password"
              required
              class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none disabled:opacity-50"
          >
            <span v-if="isLoading">Logging in...</span>
            <span v-else>Login</span>
          </button>
          <p v-if="errorMessage" class="mt-4 text-sm text-center text-red-500">{{ errorMessage }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginForm',
    data() {
      return {
        email: '',
        password: '',
        isLoading: false,
        errorMessage: '',
      };
    },
    methods: {
      async handleLogin() {
        this.isLoading = true;
        this.errorMessage = '';
  
        try {
          const response = await fetch('/api/users/log_in', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
          }
  
          const data = await response.json();
          // Handle successful login (e.g., save token, redirect)
          console.log('Login successful:', data);
          // Example: Redirect to dashboard
          // this.$router.push('/dashboard');
        } catch (error) {
          this.errorMessage = error.message;
          console.error('Error during login:', error);
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add additional custom styles here if needed */
  </style>
  