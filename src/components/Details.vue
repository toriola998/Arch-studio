<template>
    <img src="./../assets/about/mobile/image-hero.jpg" alt="" class="details-img"/>
    <div class="white-div"></div>
    <div class="page-details">
        <h2>{{ heading }}</h2>
        <p class="description">{{ description }}</p>
    </div>
</template>

<script>
export default {
    name: 'Details',
    props: ['heading', 'description']
}
</script>

<style scoped>
    .page-details {
        padding: 0 1.5rem 3rem;
    }

    .details-img {
        position: relative;
    }

    .white-div { 
        background-color: #fff;
        height: 3rem;
        width: 80%;
        position: relative;
        bottom: 3rem;
    }
</style>