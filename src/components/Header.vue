<template>
    <div class="flex nav-top">
        <img src="./../assets/logo.svg" alt="logo" class="logo"/>
        <img src="./../assets/icons/icon-hamburger.svg" alt="menu" class="menu"/>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .logo,
    menu {
        height: auto;
        width: auto;
    }

    .nav-top{
        height: 5.5rem;
        justify-content: space-between;
        padding: 0 1.5rem;
    }
</style>
