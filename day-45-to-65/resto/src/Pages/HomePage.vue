<template>
    <div>
        <h1 class="heading">Welocme on HomePage</h1>
    </div>
</template>
<script>
export default {
    name: "HomePage",  
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