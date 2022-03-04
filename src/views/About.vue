<template>
    <Header/>
    <img />
    <main>
        <section class="about">
            <div class="line"></div>
            <h2>Our<br> Heritage</h2>
            <p class="description">Founded in 2007, we started as a trio of architects. Our complimentary skills and 
            relentless attention to detail turned Arch into one of the most sought after
            boutique firms in the country.</p>
            <p class="description">Speciliazing in Urban Design allowed us to focus on creating exceptional structures
            that live in harmony with their surroundings. We consider every detail from every
            surrounding element to inform our designs.</p>
            <p class="description">Our small team of world-class professionals provides input on every project.</p>
        </section>
        <section class="leaders-container">
            <h2>The<br> Leaders</h2>
            <LeaderLayout avatarName="avatar-jake" personName="Jake Richards" personRole="Chief Architect"/>
            <LeaderLayout avatarName="avatar-thompson" personName="Thompson Smith" personRole="Head of Finance"/>
            <LeaderLayout avatarName="avatar-jackson" personName="Jackson Rourke" personRole="Lead designer"/>
            <LeaderLayout avatarName="avatar-maria" personName="Maria Simpson" personRole="Senior Architect"/>
        </section>
    </main>
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import LeaderLayout from './../components/LeaderLayout.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'About',
    components: {
        Header,
        LeaderLayout,
        Footer
    }
}
</script>

<style scoped>
    main {
        padding: 0 1.5rem 8rem;
    }

    .leaders-container{
        padding-top: 4rem;
    }

    .leaders-container h2{
        margin-bottom: 4rem;
    }

</style>
