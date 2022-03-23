<template>
    <VerticalTitle pageTitle="PORTFOLIO" />
    <TheHeader />
    <main>
        <section class="portfolio-container">
            <ProjectLayout projectAltText="Seraph Station" filename="image-seraph" projectName="Seraph Station" info="September 2019"/>
            <ProjectLayout projectAltText="Eebox Building"  filename="image-eebox" projectName="Eebox Builing" info="August 2017"/>
            <ProjectLayout projectAltText="Federal II Tower"  filename="image-federal" projectName="Federal II Tower" info="March 2017"/>
            <ProjectLayout projectAltText="Project del sol"  filename="image-del-sol" projectName="Project del sol" info="January 2019"/>
            <ProjectLayout projectAltText="Le prototype"  filename="image-prototype" projectName="Le prototype" info="October 2015"/>
            <ProjectLayout projectAltText="228B Tower"  filename="image-228b" projectName="228B Tower" info="April 2015"/>
            <ProjectLayout projectAltText="Grand Edelweiss Hotel"  filename="image-edelweiss" projectName="Grand Edelweiss Hotel" info="December 2013"/>
            <ProjectLayout projectAltText="Netcry Tower"  filename="image-netcry" projectName="Netcry Tower" info="August 2012"/>
            <ProjectLayout projectAltText="Hypers"  filename="image-hypers" projectName="Hypers" info="January 2012"/>
            <ProjectLayout projectAltText="SXIV Tower"  filename="image-sxiv" projectName="SXIV Tower" info="December 2013"/>
            <ProjectLayout projectAltText="Trinity Bank Tower"  filename="image-trinity" projectName="Trinity Bank Tower" info="September 2010"/>
            <ProjectLayout projectAltText="Project Paramour"  filename="image-paramour" projectName="Project Paramour" info="February 2008"/>
        </section>
    </main>
    <TheFooter />
</template>

<script>
import VerticalTitle from '../components/VerticalTitle.vue'
import TheHeader from '../components/TheHeader.vue'
import ProjectLayout from '../components/ProjectLayout.vue'
import TheFooter from '../components/TheFooter.vue'
export default {
    name: 'Portfolio',
    components: {
        VerticalTitle,
        TheHeader,
        ProjectLayout,
        TheFooter 
    }
}
</script>

<style scoped>
.portfolio-container{
    padding: 3rem 1.5rem 5rem;
}

@media screen and (min-width: 520px) {
    .portfolio-container {
        padding: 0rem 4rem 6rem;
    }
}

@media screen and (min-width: 700px) {
    .portfolio-container {
        padding: 0rem 4rem 6rem;
        display: grid;
        grid-template-columns: auto auto;
        gap: 40px;
    }
}

@media screen and (min-width: 1000px) {
    .portfolio-container {
        padding: 0rem 6rem 6rem;
        grid-template-columns: auto auto auto;
        gap: 20px;
    }
}

@media screen and (min-width: 1200px) {
    .portfolio-container {
        padding: 0rem 10rem 6rem;
    }  
}
</style>
