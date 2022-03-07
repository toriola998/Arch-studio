<template>
    <div class="flex nav-top">
        <img src="./../assets/logo.svg" alt="logo" class="logo"/>
        <img src="./../assets/icons/icon-hamburger.svg" alt="menu" class="menu"/>

        <nav>
            <ul>
                <li>
                    <router-link to="">Home</router-link>
                </li>
                <li>
                    <router-link to="">About Us</router-link>
                </li>
                <li>
                    <router-link to="">Portfolio</router-link>
                </li>
            </ul>
        </nav>
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

    nav {
        display: none;
    }

    @media screen and (min-width: 520px) {
        .menu {
            display: none;
        }

        .nav-top {
            padding: unset;
        }

        nav ul {
            display: flex;
        }

        nav li {
            padding: 0 .7rem;
        }
    }
</style>
