<template>
    <div class="project-container">
        <img src="./../assets/portfolio/mobile/image-del-sol.svg" 
            alt="project-photo" 
            class="project" />
        <div> 
            <h3>Project Del Sol</h3>
            <router-link to="" class="project-link">View All Projects</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Project',
    props: ['image', 'projectName']
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