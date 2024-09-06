<template>
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
 
  <h1>child</h1>
  <header>
      <slot name="header">
      <marquee>by default in child [header]</marquee>    
      </slot>
  </header>

  <main>
      <slot name="main">
      <marquee>by default in child [main]</marquee>    
      </slot>
  </main>

<footer>
<slot name="footer">
      <marquee>by default in child [footer]</marquee>    
      </slot>
</footer>

</div>
</template>

<script>
export default {
name: 'ChildComponent',
}
</script>
<style scoped>
h1{
font-size: 27px;
font-weight: 700;
}
div{
border: 2px solid rgb(13, 138, 196);
padding: 4px;
}
header{
background: #69d869;
}
main{
background: #000;
color: aliceblue;
}
footer{
background: #e27373;
}
</style>