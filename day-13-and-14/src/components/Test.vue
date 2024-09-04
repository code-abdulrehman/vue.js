<template>
<h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>

<div class="group flex flex-col justify-center items-center flex-wrap gap-4 text-2xl border p-4 bg-slate-600 text-gray-50">
<!--13 -->
  <h1 v-if="show">If condition 1</h1>
  <h1 v-else-if="hide">If hide condition 1</h1> <!--  commit this line and check-->
  <h1 v-else> else condition 1</h1>
  <button v-on:click="show=!show">show :{{ show }}</button>
<br>  <hr>
<!--  14 -->
<ul class="flex items-center gap-4">
  <li v-for="fruit in fruits" :key="fruit" class="bg-amber-400 border-b-2 text-black">
{{fruit}}
  </li>
</ul>
  <ol class="flex flex-wrap items-center gap-4">
    <li v-for="user in users" :key="user.id" class="bg-amber-400 border-b-2 text-black p-3">
     Name: {{user.name}} <br>
     Email: {{user.email}} <br>
     Age: {{user.age}} <br>
    </li>
  </ol>
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
          // 13 video
            show:false,
          hide: true,
          // 14
          fruits : ["Apple", "Banana", "Mango", "Orange", "Grapes"],
          users: [ {
            id: 1,
            name: "Alice Johnson",
            age: 28,
            email: "alice.johnson@example.com",
          },
            {
              id: 2,
              name: "Bob Smith",
              age: 35,
              email: "bob.smith@example.com",
            },
            {
              id: 3,
              name: "Charlie Brown",
              age: 42,
              email: "charlie.brown@example.com",
            },]
        }
    },
    // 11 vide 
    methods: {
   
    }
}
</script>

<style scoped>
p {
    border: 2px solid red;
    padding: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
button{margin-top: 10px;
    padding: 4px;
    border: 2px solid black;
}
button:active{
    color: #ff0606;
    background: #000;
}
</style>
