<template>
    <div class="project-container">
        <picture>
            <source media="(min-width: 1000px)" 
                    :src="require(`@/assets/portfolio/desktop/${filename}.jpg`)">
            <source media="(min-width: 700px)" 
                    :srcset="require(`@/assets/portfolio/tablet/${filename}.jpg`)">
            <img :src="require(`@/assets/portfolio/mobile/${filename}.jpg`)"
                    :alt="projectAltText"
                    class="project">
        </picture> 
        <div>
            <h3>{{ projectName }}</h3>
            <router-link to="/portfolio" class="project-link">{{ info }}</router-link>
        </div>
        <p class="project-num">{{ projectNumber }}</p>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['projectAltText','filename', 'projectName', 'info', 'projectNumber']
}
</script>

<style scoped>
    .project {
        width: 100%;
        height: auto;  
    }

    .project-container {
        position: relative;
        margin-bottom: 2rem;
    }

    .project-container > div{
        position: absolute;
        bottom: 2.5rem;
        left: 2rem;
        z-index: 9999;
    }

    h3,
    .project-link {
        color: #fff;
    }

    h3 {
        font-size: 1.3rem;
        margin-bottom: .7rem;
    }

    .project-link {
        font-weight: 400;
    }

    .tab-projects,
    .project-num,
    .desktop-projects {
        display: none ;
    }

@media screen and (min-width: 520px) {
    .tab-projects,
    .project-number {
        display: block;
    }
    
    .mobile-projects,
    .desktop-projects {
        display: none;
    }

    .project-num {
        display: block;
        color: #fff;
        opacity: 0.5;
        font-weight: 700;
        font-size: 8rem;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9999;
    }
}

@media screen and (min-width: 700px) {
    .desktop-projects {
        display: block;
    }

    .mobile-projects,
    .tab-projects {
        display: none;
    }

     .project-num {
        font-size: 10rem;
     }
}

@media screen and (min-width: 1200px) {
    .project-container {
        cursor: pointer;
        transition: all 1s;
    }

    .project-container:hover {
        transform: scale(0.9);
    }
}
</style>