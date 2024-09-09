<template>
<!-- User Card -->
<div class="user-card">
  <div class="flex justify-center items-center" v-if="user?.avatar">
    <!-- Avatar -->
    <img :src="user?.avatar" :alt="user?.id">
  </div>
    <!-- User Name -->
    <h2 v-if="user">{{ user?.name || user?.first_name }}</h2>
    <!-- User Details -->
    <p v-if="user?.id"><strong>Id:</strong> {{ user?.id }}</p>
    <p v-if="user?.age"><strong>Age:</strong> {{user?.age}}</p>
    <p v-if="user?.email"><strong>Email:</strong> <a :href="email">{{user?.email}}</a></p>
    <p v-if="user?.address"><strong>Address:</strong>{{user?.address}}</p>
    <p v-if="user?.phone"><strong>Phone:</strong> {{ user?.phone}}</p>
    <button v-on:click="alertOpen(user?.name || user?.first_name)" v-if="user">Click me</button>
  </div>
</template> 
<script> 
export default { 
    name: 'UserCard',
    props: {
        user:Object,
        alertOpen: Function
    },
    data(){
      return{
        email: `mailto:+${this.user?.email}`
      }
    }
}
</script>
<style scoped>
/* Card Container */
.user-card {
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin: 20px auto;
      font-family: Arial, sans-serif;
    }

    /* Avatar Image */
    .user-card img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
    }

    /* User Name */
    .user-card h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    /* User Details */
    .user-card p {
      margin: 5px 0;
      color: #555;
      font-size: 16px;
    }

    /* Email Link */
    .user-card a {
      color: #1e90ff;
      text-decoration: none;
      font-weight: bold;
    }

    .user-card a:hover {
      text-decoration: underline;
    }
    button{
      background: #1e90ff;
      color: #f5eaea;
      padding: 4px;
      border-radius: 10px;
    }
</style>