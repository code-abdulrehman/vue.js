<template>
  <div class="hello" ref="hello">
    <h1 class="text-7xl font-bold">{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  unmounted(){
    console.log("Hello World unmounted", this.$refs["hello"])
    // alert("Hello World unmounted")
  },
  beforeUnmount(){
    console.log("Hello World beforeUnmount", this.$refs["hello"])
    // alert("Hello World beforeUnmount")
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
