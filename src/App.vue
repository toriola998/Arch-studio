<template>
    <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Spartan', sans-serif;
        font-style: normal;
    }

    a {
        text-decoration: none;
    }

    li a{
        color: #1B1D23;
        font-weight: 600;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    ul {
        list-style-type: none ;
    }

    h1, h2, h3 {
        font-weight: 700;
    }
</style>
