<template>
     <router-link to="" class="cta-link flex">
        <span class="cta"> {{btnContent}} </span>
        <img alt="" src="./../assets/icons/icon-arrow-white.svg" width="32" height="32"
             class="visit-arrow"/>
    </router-link>
</template>

<script>
export default {
    name: 'Button',
    props: ['btnContent']
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
</style>