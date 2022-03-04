<template>
  <Header />
    <div class="portfolio-container">
        <Project filepath="mobile/image-seraph" projectName="Seraph Station" info="September 2019"/>
        <Project filepath="mobile/image-eebox" projectName="Eebox Builing" info="August 2017"/>
        <Project filepath="mobile/image-federal" projectName="FederalII Tower" info="March 2017"/>
        <Project filepath="mobile/image-del-sol" projectName="Project del sol" info="January 2019"/>
        <Project filepath="mobile/image-prototype" projectName="Le prototype" info="October 2015"/>
        <Project filepath="mobile/image-228b" projectName="228B Tower" info="April 2015"/>

        <Project filepath="mobile/image-edelweiss" projectName="Grand Edelweiss Hotel" info="December 2013"/>
        <Project filepath="mobile/image-netcry" projectName="Netcry Tower" info="August 2012"/>
        <Project filepath="mobile/image-hypers" projectName="Hypers" info="January 2012"/>

        <Project filepath="mobile/image-sxiv" projectName="SXIV Tower" info="December 2013"/>
        <Project filepath="mobile/image-trinity" projectName="Trinity Bank Tower" info="September 2010"/>
        <Project filepath="mobile/image-paramour" projectName="Project Paramour" info="February 2008"/>
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
    .portfolio-container {
        padding: 3rem 1.5rem 0;
    }
</style>>
