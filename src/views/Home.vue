<template>
    <header>
        <Header />
        <section id="home" class="flex">
            <div>
                <h1>Project <br> Paramour</h1>
                <p class="note">Project made for an art museum near Southwest London. 
                Project Paramour is a statement of bold, modern architecture.</p>
                <Button btnContent="See our portfolio" style="width: 16rem"/>
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

        <section class="about-us flex">
            <div>
                <h2>Small team, <br> big ideas</h2>
                <Button btnContent="About us" style="width: 11rem"/>
            </div>
        </section>

        <section class="features">
            <h2>Features</h2>
            <Project projectName="Project del sol" filename="image-del-sol"/>
            <Project projectName="228B Tower" filename="image-228b"/>
            <Project projectName="Le Prototype" filename="image-prototype"/>
            <Button btnContent="See all" style="margin-top: 1rem"/>
        </section>
        <Footer />
    </main>
</template>

<script>
import Button from '../components/Button.vue'
import Header from './../components/Header.vue'
import Project from './../components/Project.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'Home',
    components: {
        Header,
        Button,
        Project,
        Footer
    }
}
</script>

<style scoped>
    #home {
        background-image: url('./../assets/home/mobile/image-hero-paramour.svg');
    }

    #home,
    .about-us {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        padding: 0 2.5rem;
        position: relative;
        height: 85vh; 
        justify-content: center; 
    }

    #home > div,
    .about-us > div {
        z-index: 999;
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

    .about-us {
        background-image: url('./../assets/home/mobile/image-small-team.svg'); 
    }

    .about-us h2 {
        color: #fff;
        margin-bottom: 2rem;
    }

    .features {
        padding: 4rem 1.5rem 8rem;
    }

    .features h2 {
        font-size: 2.2rem;
    }

</style>