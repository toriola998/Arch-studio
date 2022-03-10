<template>
<VerticalTitle />
    <header>
        <TheHeader />
        <section class="header">
            <div id="home" class="flex">
                <div>
                    <h1>Project <br> Paramour</h1>
                    <p class="note">Project made for an art museum near Southwest London. 
                    Project Paramour is a statement of bold, modern architecture.</p>
                    <CtaButton to="/portfolio" btnContent="See our portfolio" style="width: 16rem"/>
                </div>
            </div>
        </section>
    </header>
    <main>
        <section class="welcome">
            <div>
                <div class="line"></div>
                <h2 class="large-welcome">Welcome</h2>
                <h2>Welcome to<br> Arch Studio</h2>
                <p class="description"> We have a unique network and skillset to help bring your projects to life. Our small 
                team of highly skilled individuals combined with our large network put us in a strong 
                position to deliver exceptional results.</p>
                <p class="description">Over the past 10 years, we have worked on all kinds of projects. From 
                stations to high-rise buildings, we create spaces that inspire and delight.</p>
                <p class="description">We work closely with our clients so that we understand the intricacies of each
                project. This allows us to work in harmony the surrounding area to create truly
                stunning projects that will stand the test of time.</p>
            </div>
            <img src="./../assets/home/desktop/image-welcome.jpg" alt="image-welcome" class="image-welcome"/>
        </section>

        <section class="about-container">
            <div class="about-us flex">
                <div>
                    <h2>Small team, <br> big ideas</h2>
                    <CtaButton to="/about-us" btnContent="About us" style="width: 11rem"/>
                </div>
            </div>
        </section>
       
        <section class="features">
            <div class="featured-heading">
                <h2>Featured</h2>
                <CtaButton to="/portfolio" btnContent="See All" class="feature-btn"/>
            </div>
            
            <div class="project-wrapper">
                <ProjectLayout filename="image-del-sol" projectName="Project del sol" 
                        info="View All Projects" projectNumber="1"/>
                <ProjectLayout filename="image-228b" projectName="228B Tower" 
                        info="View All Projects" projectNumber="2"/>
                <ProjectLayout filename="image-prototype" projectName="Le Prototype" 
                        info="View All Projects" projectNumber="3"/>
            </div>
           <CtaButton to="/portfolio" btnContent="See all" style="margin-top: 1rem" class="hide-btn-tab"/>
        </section>
        <TheFooter />
    </main>
</template>

<script>
import TheHeader from '../components/TheHeader.vue'
import VerticalTitle from '../components/VerticalTitle.vue'
import ProjectLayout from '../components/ProjectLayout.vue'
import CtaButton from '../components/CtaButton.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
    name: 'Home',
    components: {
        TheHeader,
        VerticalTitle,
        ProjectLayout,
        CtaButton,
        TheFooter,  
    }
}
</script>

<style scoped>
    #home {
        background-image: url('./../assets/home/mobile/image-hero-paramour.svg');
        justify-content: center; 
    }

    #home,
    .about-us {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        width: 100%;
        padding: 0 2.5rem;
        position: relative;
        height: 600px; 
        
    }

    #home > div,
    .about-us > div {
        z-index: 999;
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

    .large-welcome,
    .image-welcome {
        display: none;
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
        margin-bottom: 2rem;
    }

    .feature-btn {
        display: none;
    }

    @media screen and (min-width: 520px) {
        .header,
        .about-container{
            padding: 0 4rem;
        }

        .hide-btn-tab {
            display: none;
        }

        .welcome {
            padding: 4rem;
        }

        .features {
            padding: 8rem 4rem;
        }

        .featured-heading,
        .feature-btn {
            display: flex;
            align-items: center;
        }

        .featured-heading {
            justify-content: space-between;
            margin-bottom: 3rem;
        }

        .features h2 {
            margin-bottom: unset;
        }

        .feature-btn {
            width: 10rem;
        }
    }

    @media screen and (min-width: 700px) {
        #home {
            background-image: url('./../assets/home/tablet/image-hero-paramour.png');
            height: 700px;
        }

        .about-us {
            background-image: url('./../assets/home/tablet/image-small-team.png');
            height: 500px;
        }

        #home > div {
            width: 70% ;
        }

        h1 {
            font-size: 3rem;
        }

        .project-wrapper { 
            display: grid;
            grid-template-columns: auto auto;
            gap: 20px;
        }
    }

    @media screen and (min-width: 1000px) {
        .header {
            padding: 0 6rem;
        }

        #home {
            background-image: url('./../assets/home/desktop/image-hero-paramour.jpg');
            justify-content: initial;
            padding: 0 8rem;
            height: 600px;
        }

        h1 {
            font-size: 3.5rem;
        }

        .about-us {
            background-image: url('./../assets/home/desktop/image-small-team.jpg'); 
        }

        .large-welcome,
        .image-welcome {
            display: block;
        }

        .welcome {
            display: flex;
            justify-content: end;
            padding: 6rem;
        }

        .welcome > div {
            width: 50%;
        }

        .image-welcome {
            width: 35%;
            /*height: 550px;*/
            object-fit: cover;
            margin: 8rem 0 0 3rem;  
        }

        .large-welcome {
            position: relative;
            font-size: 9rem;
            left: -7rem;
            top: 2rem;
        }

        .line {
            display: none;
        }

        .project-wrapper {
            grid-template-columns: auto auto auto;
        }

        .about-container {
            padding: 4rem 6rem;
        } 

        .about-us {
            padding: 0 10rem;
        }

        .features {
            padding: 4rem 6rem 8rem;
        }
    }

    @media screen and (min-width: 1200px) {
        .header {
            padding: 0 10rem;
        }

        #home > div {
            width: 50% ;
        }

        h1 {
            font-size: 4rem;
        }

        .welcome {
            padding: 6rem 10rem;
        } 

        .welcome > div {
            width: 40%;
        }
        
        .large-welcome {
            font-size: 11rem;
            left: -13rem;
        }

        .about-container {
            padding: 6rem 10rem;
        } 

        .features {
            padding: 4rem 10rem 8rem;
        }
    } 
</style>