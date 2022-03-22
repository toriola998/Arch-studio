<template>
    <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
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

    img {
        height: auto;
        width: auto;
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
        margin-bottom: auto;
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

    .home,
    .about-us {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        padding: 0 2.5rem;
        position: relative;
        height: 600px;  
    }

    .home > div,
    .about-us > div {
        z-index: 999;
    }

    @media screen and (min-width: 520px) {
        .header,
        .about-container{
            padding: 0 4rem;
        }
    }

    @media screen and (min-width: 700px) {
    .large-welcome,
    .large-heading {
        display: block;
        color: #EEEFF4;
        font-size: 5.2rem;
        margin-bottom: 1rem;
        }
    }

    @media screen and (min-width: 1000px) {
        h2 {
            font-size: 3rem;
        }
    }

    @media screen and (min-width: 1400px) {
        section,
        header,
        footer {
            max-width: 1320px;
            margin: auto;
        }
    }
</style>
