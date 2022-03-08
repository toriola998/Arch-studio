<template>
    <div class="flex nav-top">
        <router-link to="/">
            <img src="./../assets/logo.svg" alt="logo" class="logo"/>
        </router-link>
        <img src="./../assets/icons/icon-hamburger.svg" 
            alt="menu" 
            class="menu"
            @click="showNav = !showNav"/>

        <nav class="nav-bar" v-if="showNav">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/about-us">About Us</router-link>
                </li>
                <li>
                    <router-link to="/portfolio">Portfolio</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'TheHeader',
    data () {
        return {
            showNav: false,
        }
    },
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

    .nav-bar {
        background-color: #EEEFF4;
        position: absolute;
        right: 0;
        width: 80%;
        top: 5.5rem;
        z-index: 9999999;
        padding: 3rem 3rem 2rem 3rem;
    }
    
    .nav-bar li {
        padding-bottom: 2rem;
    }

    @media screen and (min-width: 520px) {
        .menu {
            display: none;
        }

        .nav-top {
            padding: unset;
        }

        .nav-bar ul {
            display: flex;
        }

        .nav-bar li {
            padding: 0 .7rem;
        }
    }
</style>
