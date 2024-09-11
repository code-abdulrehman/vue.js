<template>
<div class="w-full flex flex-col">
    <div class="container mx-auto">

        <h1 class="heading text-center m-4">All Restaurents List</h1>
        <ul class="flex flex-wrap gap-4 my-4">
          <li v-for="item in list" :key="item?.id">
            <RestCard 
            :name="item?.name" 
            :address="item?.address"
             :contact="item?.contact"
              :imageSrc="item?.image" 
              :Itemkey="item?.id"
            @delete-item="handleDelete"/>
          </li>
        </ul>
    </div>
</div>
</template>

<script>
import RestCard from '@/components/RestCart.vue'
import axios from 'axios';
export default {

    name: "HomePage",
    components: {
        RestCard
    },
    data(){
      return{
        list : []
      }
    },
    methods: {
    async handleDelete(id) {
      const base_url = import.meta.env.VITE_BASE_URL;
      try {
        let response = await axios.delete(`${base_url}/restaurant/${id}`);
        if (response.status === 200) {
          // Remove the deleted item from the list
          this.list = this.list.filter(item => item.id !== id);
          alert('Restaurant deleted successfully.');
        } else {
          console.log('Failed to delete item:', response.status);
        }
      } catch (error) {
        console.error('Error deleting restaurant:', error);
        alert('Error deleting item. Please try again later.');
      }
    }
  },
    mounted() {
        let userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            this.$router.push({
                name: "home"
            });
        } else {
            this.$router.push({
                name: "login"
            });
        }

        const getList = async () => {
            const base_url = import.meta.env.VITE_BASE_URL;
            try {
                let req = await axios.get(`${base_url}/restaurent`);
                // console.log(req);
                if(req.status == 200){
                  return this.list = req.data
                }
                console.log(req);

            } catch (error) {
              console.log(error);
              alert(error)
            }
          }
          getList();
   
    }

}
</script>
