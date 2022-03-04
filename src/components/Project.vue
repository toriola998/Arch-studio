<template>
    <div class="project-container">
        <img :src="require(`@/assets/portfolio/${filename}.svg`)"
        alt="project-photo" 
        class="project" />

        <div class="flex-tab-num"> 
            <div>
                 <h3>{{ projectName }}</h3>
                <router-link to="" class="project-link">View All Projects</router-link>
            </div>
            <p class="tab-num">1</p>
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

    .tab-num {
        display: none ;
    }

    @media screen and (min-width: 520px) {
        .project-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0, 0.4)
        }

        .project-container {
            margin-bottom: 2rem;
        }

        .project {
            margin-top: unset;
        }

        .project-container > div{
            z-index: 9999;
        }

        .flex-tab-num {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 3rem;
            width: 100%;
        }

        .tab-num {
            display: block;
            font-size: 12rem;
            color: #fff;
            opacity: 0.5;
            font-weight: 700;
        }

        .project-container > div{
            left: unset;
        }
    }
</style>