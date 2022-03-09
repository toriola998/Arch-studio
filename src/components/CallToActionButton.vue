<template>
     <router-link to="" class="cta-link flex">
        <span class="cta"> {{btnContent}} </span>
        <img alt="visit-arrow" src="./../assets/icons/icon-arrow-white.svg" class="visit-arrow"/>
    </router-link>
</template>

<script>
export default {
    name: 'Button',
    props: ['routeLink','btnContent']
}
</script>

<style scoped>
    .cta-link {
        height: 4rem;
        background-color: #1B1D23;
        justify-content: center;
        transition: all .7s;
    }

    .cta-link:hover {
        background-color: #979797;
    }

    .cta {
        font-weight: 700;
        margin-right: 1rem;
        color: #fff;
    }

    .visit-arrow {
        height: 2rem;
    }
</style>