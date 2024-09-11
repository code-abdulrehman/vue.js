



<template>
  <div class="bg-white">

    <fwb-navbar class="w-auto">
      <template #logo>
        <RouterLink to="/">
          <img src="@/assets/images/logo.png" alt="logo" class="w-12">
        </RouterLink>
      </template>
      <template #default="{ isShowMenu }" v-if="userInfo">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link :is-active="isActive('/')">
            <RouterLink to="/">Home</RouterLink>
          </fwb-navbar-link>
          <fwb-navbar-link :is-active="isActive('/add')">
            <RouterLink to="/add">Add</RouterLink>
          </fwb-navbar-link>
          <fwb-navbar-link :is-active="isActive('/update')">
            <RouterLink to="/update">Update</RouterLink>
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #right-side v-if="userInfo">
        <fwb-button @click="logout">
          Logout
        </fwb-button>
      </template>
    </fwb-navbar>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue';

// Declare reactive `userInfo`
const userInfo = ref(localStorage.getItem("userInfo"));
const router = useRouter();
const route = useRoute();

// Function to handle logout
const logout = () => {
  localStorage.removeItem("userInfo");
  userInfo.value = null; // Trigger reactivity
  router.push("/login");
};

// Function to handle login (this should be called on successful login)
const login = (user) => {
  localStorage.setItem("userInfo", user);
  userInfo.value = user; // Trigger reactivity
  router.push("/"); // Redirect to home or desired page
};

// Function to check if the current route is active
const isActive = (path) => {
  return route.path === path;
};

// Watch for route changes and update `userInfo`
watch(route, (newRoute) => {
  // Here you can handle logic based on route changes if needed
  userInfo.value = localStorage.getItem("userInfo");
}, { immediate: true });

// Optionally, if you need a reactive `isActive` computed property
const isHomeActive = computed(() => isActive('/'));
const isAboutActive = computed(() => isActive('/about'));
</script>

<style scoped>
.fwb-navbar {
background-color: #123456; /* Custom background color */
}
</style>





















<!-- <template>
    <fwb-navbar>
      <template #logo>
        <RouterLink to="/"> 
          <img src="@/assets/images/logo.png" alt="logo" class="w-12">
        </RouterLink>
      </template>
      <template #default="{ isShowMenu }" v-if="userInfo">
        <fwb-navbar-collapse :is-show-menu="isShowMenu">
          <fwb-navbar-link :is-active="isActive('/')">
            <RouterLink to="/">Home</RouterLink>
          </fwb-navbar-link>
          <fwb-navbar-link :is-active="isActive('/about')">
            <RouterLink to="/about">About</RouterLink>
          </fwb-navbar-link>
        </fwb-navbar-collapse>
      </template>
      <template #right-side v-if="userInfo">
        <fwb-button @click="logout">
          Logout
        </fwb-button>
      </template>
    </fwb-navbar>
  </template>
<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLink } from 'flowbite-vue';

// Declare reactive `userInfo`
const userInfo = ref(localStorage.getItem("userInfo"));
const router = useRouter();

// Function to handle logout
const logout = () => {
  localStorage.removeItem("userInfo");
  userInfo.value = null; // Trigger reactivity
  router.push("/login");
};

// Function to handle login (this should be called on successful login)
const login = (user) => {
  localStorage.setItem("userInfo", user);
  userInfo.value = user; // Trigger reactivity
  router.push("/"); // Redirect to home or desired page
};

// Function to check if the current route is active
const isActive = (path) => {
  return router.currentRoute.value.path === path;
};

// Watch for changes in `userInfo`
watch(userInfo, (newValue) => {
  // Optional: Perform any additional actions when `userInfo` changes
  console.log("UserInfo changed:", newValue);
});

// Ensure `userInfo` is correctly set on component mount
onMounted(() => {
    userInfo.value = localStorage.getItem("userInfo");
    console.log("component onMounted:");

});
</script>
   -->
