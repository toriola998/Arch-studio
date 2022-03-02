<template>
     <router-link to="" class="cta-link flex">
        <span class="cta"> {{btnContent}} </span>
        <img alt="visit-arrow" src="./../assets/icons/icon-arrow.svg" />
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
        max-width: fit-content;
        padding: 0 2rem;
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
    }
</style>