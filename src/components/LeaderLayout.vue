<template>
    <div class="the-leaders">
        <img :src="require(`@/assets/about/desktop/${avatarName}.jpg`)" alt="the leader" class="leader-img"/>
        <h3>{{ personName}}</h3>
        <p class="role"> {{ personRole }}</p>
        <img src="./../assets/icons/icon-linkedin.svg" alt="linkedin" style="margin-right: 1.5rem;"/>
        <img src="./../assets/icons/icon-twitter.svg" alt="twitter" />
    </div>
</template>

<script>
export default {
    name: 'LeaderLayout',
    props: ['avatarName', 'personName', 'personRole']
}
</script>

<style scoped>
    .the-leaders {
        margin-bottom: 2.5rem;
    }
    .leader-img {
        width: 100%;
        height: auto;
    }

    h3 {
        margin: 1rem 0 .7rem;
    }

    .role {
        font-weight: 500;
        margin-bottom: .5rem;
    }
</style>