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
    <main>
        <section class="welcome">
            <div class="line"></div>
            <h2>Welcome to<br> Arch Studio</h2>
            <p class="description"> We have a unique network and skillset to help bring your projects to life. Our small 
            team of highly skilled individuals combined with our large network put us in a strong 
            position to deliver exceptional results.</p>
            <p class="description">Over the past 10 years, we have worked on all kinds of projects. From 
            stations to high-rise buildings, we create spaces that inspire and delight.</p>
            <p class="description">We work closely with our clients so that we understand the intricacies of each
            project. This allows us to work in harmony the surrounding area to create truly
            stunning projects that will stand the test of time.</p>
        </section>
    </main>
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

    p {
        font-size: .9rem;
    }

    h1, 
    .note,
    .cta-link {
        color: #fff;
    }

    h1 {
        font-size: 2.8rem;
        line-height: 1.1;
    }

    .note {
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
        font-weight: 700;
        margin-right: 1rem;
    }

    .welcome {
        padding: 4rem 1.5rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    .description {
        color: #60636D;
        line-height: 25px;
        margin-top: 2rem;
    }

    .line {
        background-color: #C8CCD8;
        height: 1px;
        width: 5rem;
        margin-bottom: 4rem;
    }

</style>