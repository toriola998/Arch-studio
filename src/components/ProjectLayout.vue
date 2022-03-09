<template>
    <div class="project-container">
        <img :src="require(`@/assets/portfolio/mobile/${filename}.jpg`)"
        alt="project-photo" 
        class="project mobile-projects" />

        <img :src="require(`@/assets/portfolio/tablet/${filename}.jpg`)"
        alt="project-photo" 
        class="project tab-projects" />

        <img :src="require(`@/assets/portfolio/desktop/${filename}.jpg`)"
        alt="project-photo" 
        class="project desktop-projects" />

        
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
    props: ['filename', 'projectName', 'info', 'projectNumber']
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

    .tab-project,
    .tab-projects,
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