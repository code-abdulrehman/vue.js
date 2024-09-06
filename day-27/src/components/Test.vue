<template>
    <div>

        <h1 class="bg-teal-400 text-4xl font-bold p-4"> {{ name }}</h1>
        <hr>
        <ul class="w-full max-w-md p-6 bg-white rounded-lg shadow-md gap-4">
            <li class="yellow">
                <mark>Bill:</mark> ${{ (dollor) * dollorInrupess  }}

            </li>
            <li class="yellow">
                <mark> Discount:</mark> {{discount }}%
                
            </li>
            <hr>
            <li class="yellow">
                <!-- <mark> Total Bill:</mark> ${{ (dollor * dollorInrupess ) * 100 / discount}} -->
                <mark> Total Bill:</mark> $ {{ findDiscount }}

            </li>
        </ul>
    </div> 
</template>
<script>
export default {
    name: 'TestComponent',
    props: {
        name: String,
    },
    data() {
        return {
            text: '',
            dollor: 1039934434342424,
            dollorInrupess: 278,
            discount: 12
        }
    },
    computed: {
        findDiscount() {
      // Calculate total bill after applying discount
      return (this.dollor * this.dollorInrupess) * (1 - this.discount / 100);
    },
    },
    methods: {
       
    }
}
</script>

<style>
body {
    background: #271313;
}

.yellow {
    background: #493600;
    color: #ffffff;
    padding: 4px;
    font-size: large
}

h1 {
    font-size: 40px;
    font-weight: 700;
}

ul {
    color: aqua;
    list-style: square;
}
</style>
