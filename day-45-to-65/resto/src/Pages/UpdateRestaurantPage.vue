<template>
    <div class="flex justify-center w-full h-[93vh] items-center">
      <div class="w-auto min-h-[400px] mx-auto p-6 bg-[#ffffff6b] backdrop-blur-sm rounded-lg shadow-md gap-4 col-center">
        <h3 class="heading">Update Restaurant</h3>
        <form @submit.prevent="updateRestaurant">
          <div class="mb-4 flex flex-col">
            <label for="name" class="font-medium mb-1">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter restaurant name"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              v-model="form.name"
            />
            <small class="error max-h-[20px]">{{ errors.name }}</small>
          </div>
          <div class="mb-4 flex flex-col">
            <label for="address" class="font-medium mb-1">Address</label>
            <input
              type="text"
              id="address"
              placeholder="Enter restaurant address"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              v-model="form.address"
            />
            <small class="error max-h-[20px]">{{ errors.address }}</small>
          </div>
          <div class="mb-4 flex flex-col">
            <label for="contact" class="font-medium mb-1">Contact</label>
            <input
              type="text"
              id="contact"
              placeholder="Enter contact number"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              v-model="form.contact"
            />
            <small class="error max-h-[20px]">{{ errors.contact }}</small>
          </div>
          <div class="mb-4 flex flex-col">
            <label for="image" class="font-medium mb-1">Select Image</label>
            <select
              id="image"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              v-model="form.image"
            >
              <option value="" disabled>Select an image</option>
              <option v-for="image in images" :key="image" :value="image">
                {{ image }}
              </option>
            </select>
            <small class="error max-h-[20px]">{{ errors.image }}</small>
          </div>
          <div class="mb-4">
            <button
              type="submit"
              class="w-full px-4 py-2 border rounded-lg bg-blue-500 text-white"
            >
              Update Restaurant
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UpdateRestaurantPage',
    data() {
      return {
        form: {
          name: '',
          address: '',
          contact: '',
          image: ''
        },
        errors: {
          name: '',
          address: '',
          contact: '',
          image: ''
        },
        images: []
      };
    },
    methods: {
      async fetchImages() {
        try {
          const response = await axios.get('https://raw.githubusercontent.com/xfiveco/mock-api-images/main/images.json');
          const imageUrls = response.data.data;
          const allImageUrls = imageUrls.flatMap(item => Object.values(item.sizes));
          this.images = allImageUrls;
        } catch (error) {
          console.error('Failed to fetch images:', error.message);
        }
      },
      async fetchRestaurant() {
        const base_url = import.meta.env.VITE_BASE_URL;
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`${base_url}/restaurent/${id}`);
          if (response.status === 200) {
            this.form = response.data;
          } else {
            console.log('Failed to fetch restaurant data:', response.status);
          }
        } catch (error) {
          console.error('Error fetching restaurant data:', error.message);
        }
      },
      async updateRestaurant() {
        this.errors = { name: '', address: '', contact: '', image: '' }; // Clear previous errors
  
        if (!this.form.name || !this.form.address || !this.form.contact || !this.form.image) {
          this.errors.name = !this.form.name ? 'Name is required' : '';
          this.errors.address = !this.form.address ? 'Address is required' : '';
          this.errors.contact = !this.form.contact ? 'Contact is required' : '';
          this.errors.image = !this.form.image ? 'Image selection is required' : '';
          return;
        }
  
        const base_url = import.meta.env.VITE_BASE_URL;
        const id = this.$route.params.id;
  
        try {
          const response = await axios.patch(`${base_url}/restaurent/${id}`, {
            name: this.form.name,
            address: this.form.address,
            contact: this.form.contact,
            image: this.form.image
          });
  
          if (response.status === 200) {
            alert('Restaurant updated successfully.');
            this.$router.push({ name: "home" });
          } else {
            console.log('Failed to update item:', response.status);
          }
        } catch (error) {
          if (error.response) {
            const errMsg = error.response.data.message || 'An error occurred.';
            this.errors.name = errMsg; // Example of setting an error, adjust as needed
            alert(error.response.data.message);
          } else {
            console.error('Error:', error.message);
          }
        }
      }
    },
    async mounted() {
      await this.fetchImages(); // Fetch images when component mounts
      await this.fetchRestaurant(); // Fetch restaurant data when component mounts
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
  .heading {
    font-size: 1.5rem;
    text-align: center;
  }
  </style>
  