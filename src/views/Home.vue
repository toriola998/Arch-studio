<template>
    <header>
        <Header />
        <div class="overlay"></div>
        <section id="home" class="flex">
            <div>
                <h1>Project <br> Paramour</h1>
                <p class="note">Project made for an art museum near Southwest London. 
                Project Paramour is a statement of bold, modern architecture.</p>
                <router-link to="" class="cta-link flex">
                    <span class="cta">See Our Portfolio</span>
                    <img alt="visit-arrow" src="./../assets/icons/icon-arrow.svg" />
                </router-link>
            </div>
        </section>
    </header>
</template>

<script>
import Header from './../components/Header.vue'
export default {
    name: 'Home',
    components: {
        Header,
    }
}
</script>

<style scoped>
    #home {
        background-image: url('./../assets/home/mobile/image-hero-paramour.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 85vh; 
        width: 100%;
        justify-content: center; 
        padding: 0 2.5rem;
        position: relative;
    }

    #home > div {
        z-index: 999;
    }

    .overlay  {
        background: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 5.5rem;
        z-index: 99;
        width: 100%;
        height: 85vh;
    }

    h1 {
        font-weight: 700;
        font-size: 2.8rem;
        color: #fff;
    }

    .note {
        color: #fff;
        font-weight: 400;
        margin: 1rem 0 3rem;
        line-height: 1.6;
        font-size: .9rem;
    }

    .cta-link {
        height: 4rem;
        width: 16rem;
        background-color: #1B1D23;
        justify-content: center;
        transition: all .7s;
    }

    .cta-link:hover {
        background-color: #979797;
    }
    .cta {
        color: #fff;
        font-weight: 700;
        margin-right: 1rem;
    }

</style>