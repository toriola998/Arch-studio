<template>
    <Header />
    <div class="portfolio-container">
        <Project filename="image-seraph" projectName="Seraph Station" info="September 2019"/>
        <Project filename="image-eebox" projectName="Eebox Builing" info="August 2017"/>
        <Project filename="image-federal" projectName="FederalII Tower" info="March 2017"/>
        <Project filename="image-del-sol" projectName="Project del sol" info="January 2019"/>
        <Project filename="image-prototype" projectName="Le prototype" info="October 2015"/>
        <Project filename="image-228b" projectName="228B Tower" info="April 2015"/>
        <Project filename="image-edelweiss" projectName="Grand Edelweiss Hotel" info="December 2013"/>
        <Project filename="image-netcry" projectName="Netcry Tower" info="August 2012"/>
        <Project filename="image-hypers" projectName="Hypers" info="January 2012"/>
        <Project filename="image-sxiv" projectName="SXIV Tower" info="December 2013"/>
        <Project filename="image-trinity" projectName="Trinity Bank Tower" info="September 2010"/>
        <Project filename="image-paramour" projectName="Project Paramour" info="February 2008"/>
    </div>
    <Footer />
</template>

<script>
import Header from './../components/Header.vue'
import Project from './../components/Project.vue'
import Footer from './../components/Footer.vue'
export default {
    name: 'Portfolio',
    components: {
        Header,
        Project,
        Footer 
    }
}
</script>

<style scoped>
.portfolio-container{
    padding: 3rem 1.5rem 0;
}

@media screen and (min-width: 520px) {
    .portfolio-container {
        padding: 3rem 4rem 6rem;
    }
}

@media screen and (min-width: 700px) {
    .portfolio-container {
        padding: 3rem 6rem 6rem;
        display: grid;
        grid-template-columns: auto auto;
        gap: 20px;
    }
}

@media screen and (min-width: 1200px) {
    .portfolio-container {
        padding: 3rem 8rem 6rem;
        grid-template-columns: auto auto auto;
    } 
    
}

</style>
