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

    h2 {
        font-size: 2.5rem;
    }

    p {
        font-size: .9rem;
    }

    .line {
        background-color: #C8CCD8;
        height: 1px;
        width: 5rem;
        margin-bottom: 4rem;
    }

    .description {
        color: #60636D;
        line-height: 25px;
        margin-top: 2rem;
    }

    .project-container::after,
    .details-img::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.4)
    }

    @media screen and (min-width: 520px) {
        .line {
            display: none;
        }
    }
</style>
