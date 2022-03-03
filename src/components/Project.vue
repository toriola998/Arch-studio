<template>
    <div class="project-container">
        <img :src="require(`@/assets/portfolio/mobile/${filename}.svg`)"
            alt="project-photo" 
            class="project" />
        <div> 
            <h3>{{ projectName }}</h3>
            <router-link to="" class="project-link">View All Projects</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['filename', 'projectName']
}
</script>

<style scoped>
    .project {
        width: 100%;
        height: auto;
        margin-top: 2rem;
    }

    .project-container {
        position: relative;
    }

    .project-container > div{
        position: absolute;
        bottom: 2.5rem;
        left: 2rem;
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
</style>