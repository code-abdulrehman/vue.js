<template>
  <div class="card">
    <img class="card-img hover:scale-110" :src="imageSrc || defaultImage" alt="Image of HFC" />
    <router-link :to="`/update/${Itemkey}`">
      <span class="text-blue-600 bg-white rounded absolute p-2 translate-x-24 -translate-y-3 cursor-pointer shadow-md w-16 hover:text-white hover:bg-blue-600">Edit</span>
    </router-link>
    <span @click="handleDelete" class="text-red-600 bg-white rounded absolute p-2 translate-x-24 translate-y-6 cursor-pointer shadow-md w-16 hover:text-white hover:bg-red-600">Delete</span>
    <div class="card-content">
      <h2 class="card-title text-start overflow-hidden text-ellipsis">Name: {{ name }}</h2>
      <p class="card-address text-start overflow-hidden text-ellipsis">Address: {{ address }}</p>
      <p class="card-contact text-start overflow-hidden text-ellipsis">Contact: {{ contact }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestCard',
  props: {
    Itemkey: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      defaultImage: 'https://amayaintl.com/wp-content/uploads/2023/12/amaya5.webp'
    };
  },
  methods: {
    handleDelete() {
      // Emit an event with the Itemkey
      this.$emit('delete-item', this.Itemkey);
    }
  }
}
</script>

<style scoped>
.card {
  @apply bg-white rounded-lg shadow-md w-80 overflow-hidden text-center relative;
}
.card-img {
  transition: all .2s linear;
  @apply w-full h-48 object-cover;
}
.card-content {
  @apply p-4;
}
.card-title {
  @apply text-xl font-bold text-gray-600;
}
.card-address,
.card-contact {
  @apply mt-2 text-gray-600;
}
</style>
