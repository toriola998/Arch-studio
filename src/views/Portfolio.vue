<template>
    <Header />
    <div class="portfolio-container-mobile">
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

    <div class="portfolio-container-tablet">
        <Project filepath="tablet/image-seraph" projectName="Seraph Station" info="September 2019"/>
        <Project filepath="tablet/image-eebox" projectName="Eebox Builing" info="August 2017"/>
        <Project filepath="tablet/image-federal" projectName="FederalII Tower" info="March 2017"/>
        <Project filepath="tablet/image-del-sol" projectName="Project del sol" info="January 2019"/>
        <Project filepath="tablet/image-prototype" projectName="Le prototype" info="October 2015"/>
        <Project filepath="tablet/image-228b" projectName="228B Tower" info="April 2015"/>
        <Project filepath="tablet/image-edelweiss" projectName="Grand Edelweiss Hotel" info="December 2013"/>
        <Project filepath="tablet/image-netcry" projectName="Netcry Tower" info="August 2012"/>
        <Project filepath="tablet/image-hypers" projectName="Hypers" info="January 2012"/>
        <Project filepath="tablet/image-sxiv" projectName="SXIV Tower" info="December 2013"/>
        <Project filepath="tablet/image-trinity" projectName="Trinity Bank Tower" info="September 2010"/>
        <Project filepath="tablet/image-paramour" projectName="Project Paramour" info="February 2008"/>
    </div>

    <div class="portfolio-container-desktop">
        <Project filepath="desktop/image-seraph" projectName="Seraph Station" info="September 2019"/>
        <Project filepath="desktop/image-eebox" projectName="Eebox Builing" info="August 2017"/>
        <Project filepath="desktop/image-federal" projectName="FederalII Tower" info="March 2017"/>
        <Project filepath="desktop/image-del-sol" projectName="Project del sol" info="January 2019"/>
        <Project filepath="desktop/image-prototype" projectName="Le prototype" info="October 2015"/>
        <Project filepath="desktop/image-228b" projectName="228B Tower" info="April 2015"/>
        <Project filepath="desktop/image-edelweiss" projectName="Grand Edelweiss Hotel" info="December 2013"/>
        <Project filepath="desktop/image-netcry" projectName="Netcry Tower" info="August 2012"/>
        <Project filepath="desktop/image-hypers" projectName="Hypers" info="January 2012"/>
        <Project filepath="desktop/image-sxiv" projectName="SXIV Tower" info="December 2013"/>
        <Project filepath="desktop/image-trinity" projectName="Trinity Bank Tower" info="September 2010"/>
        <Project filepath="desktop/image-paramour" projectName="Project Paramour" info="February 2008"/>
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
    .portfolio-container-mobile {
        padding: 3rem 1.5rem 0;
    }

    .portfolio-container-tablet,
    .portfolio-container-desktop {
        display: none;
    }

    @media screen and (min-width: 520px) {
        .portfolio-container-tablet {
            display: block;
            padding: 3rem 4rem 6rem;
        }

        .portfolio-container-mobile,
        .portfolio-container-desktop {
            display: none;
        }
    }
</style>
