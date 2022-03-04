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

        <div class="flex-tab-num"> 
            <div>
                 <h3>{{ projectName }}</h3>
                <router-link to="" class="project-link">{{ info }}</router-link>
            </div>
            <p class="tab-num">1</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['filename', 'projectName', 'info']
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

    .project-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0, 0.4)
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

    .tab-num,
    .tab-projects,
    .desktop-projects {
        display: none ;
    }

@media screen and (min-width: 520px) {
    .tab-projects {
        display: block;
    }
    
    .mobile-projects,
    .desktop-projects {
        display: none;
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
}

@media screen and (min-width: 1200px) {
    .desktop-projects {
        cursor: pointer;
        transition: all 3s;
    }

    .desktop-projects:hover {
        transform: scale(1.2);
    }
}
</style>